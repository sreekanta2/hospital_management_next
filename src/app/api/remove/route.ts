import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function DELETE(req: Request) {
  try {
    // Get the file name from the query parameters
    const url = new URL(req.url);
    const fileName = url.searchParams.get("fileName");

    if (!fileName) {
      return NextResponse.json(
        { status: 400, message: "File name is required." },
        { status: 400 }
      );
    }

    // Construct the full file path
    const filePath = path.join(process.cwd(), "public/uploads", fileName);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { status: 404, message: "File not found." },
        { status: 404 }
      );
    }

    // Remove the file
    fs.unlinkSync(filePath);

    return NextResponse.json(
      { status: 200, message: "File deleted successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("File deletion error:", error);
    return NextResponse.json(
      {
        status: 500,
        message: "An error occurred while deleting the file.",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
