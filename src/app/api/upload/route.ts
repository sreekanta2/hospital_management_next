import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
import { promisify } from "util";

const writeFile = promisify(fs.writeFile);
const unlinkFile = promisify(fs.unlink);

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
const ALLOWED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/svg+xml",
];
const MAX_FILES = 3; // Maximum number of files allowed

export async function POST(req: Request) {
  let filePath = ""; // Declare filePath for cleanup

  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (files.length === 0) {
      return NextResponse.json({ status: 400, message: "No files provided." });
    }

    if (files.length > MAX_FILES) {
      return NextResponse.json({
        status: 400,
        message: `Maximum of ${MAX_FILES} files allowed.`,
      });
    }

    const uploadedFileUrls: string[] = []; // Store uploaded file URLs

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    for (const file of files) {
      const fileType = file.type;
      const fileSize = file.size;

      // Validate file type and size
      if (!ALLOWED_FILE_TYPES.includes(fileType)) {
        return NextResponse.json({
          status: 400,
          message: `File type not allowed: ${file.name}`,
        });
      }

      if (fileSize > MAX_FILE_SIZE) {
        return NextResponse.json({
          status: 400,
          message: `File size exceeds 3MB: ${file.name}`,
        });
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Create unique filename
      const filename = `${Date.now()}-${file.name}`;
      filePath = path.join(uploadDir, filename);

      // Save file to the upload folder
      await writeFile(filePath, buffer);

      // Generate URL for uploaded file
      uploadedFileUrls.push(`/uploads/${filename}`);
    }

    return NextResponse.json({
      data: { urls: uploadedFileUrls },
      status: 201,
      message: "Files uploaded successfully",
    });
  } catch (error: unknown) {
    console.error("File upload error:", error);

    if (filePath) {
      try {
        await unlinkFile(filePath);
      } catch (unlinkError) {
        console.error("Error deleting file:", unlinkError);
      }
    }
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "An error occurred during file upload.",
      error: (error as Error).message,
    });
  }
}
