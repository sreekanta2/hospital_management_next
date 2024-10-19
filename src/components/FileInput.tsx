"use client";

import { Input } from "@/components/ui/input";
import { CheckCircle, ImageUp, Loader2, XCircle } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

interface FileInputProps {
  setImages: (urls: string[]) => void; // Updated to handle URL array
  images: string[]; // Now storing image URLs instead of File objects
  label?: string; // Optional label
  maxFiles?: number; // Maximum number of files allowed
}

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/svg+xml",
];

const FileInput: React.FC<FileInputProps> = ({
  setImages,
  images,
  label,
  maxFiles = 3,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError(null); // Clear previous errors
    setSuccess(null); // Reset success state

    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles); // Convert FileList to array

      if (filesArray.length + images.length > maxFiles) {
        setError(`Maximum of ${maxFiles} files allowed.`);
        return;
      }

      // Validate files
      const validFiles = filesArray.filter((file) => {
        const isValidType = ALLOWED_FILE_TYPES.includes(file.type);
        const isValidSize = file.size <= MAX_FILE_SIZE;

        if (!isValidType) {
          setError(`File type not allowed: ${file.name}`);
          return false;
        }

        if (!isValidSize) {
          setError(`File size exceeds 2MB: ${file.name}`);
          return false;
        }

        return true;
      });

      if (validFiles.length > 0) {
        setIsLoading(true); // Start loading

        try {
          // Prepare form data for API upload
          const formData = new FormData();
          validFiles.forEach((file) => formData.append("files", file));

          // Send files to API
          const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });

          const data = await response.json();
          console.log(data);

          if (response.ok) {
            // Add the uploaded URLs to the images array
            const newImages = [...images, ...data.data.urls].slice(0, maxFiles);
            setImages(newImages);
            setSuccess(data.message || "Files uploaded successfully"); // Set success message from response
          } else {
            setError(data.message || "File upload failed.");
          }
        } catch (err: any) {
          setError(
            err.message || "An unexpected error occurred during file upload."
          );
        } finally {
          setIsLoading(false); // Stop loading
        }
      }
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveFile = async (urlToRemove: string) => {
    setIsLoading(true); // Start loading
    setError(null); // Clear previous errors
    setSuccess(null); // Reset success state

    try {
      // Send DELETE request to remove the file
      const response = await fetch(
        `/api/remove?fileName=${encodeURIComponent(
          urlToRemove.split("/").pop()!
        )}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Remove specific URL from images array
        setImages(images.filter((url) => url !== urlToRemove));
        setSuccess(data.message || "File removed successfully"); // Set success message from response
      } else {
        setError(data.message || "File removal failed.");
      }
    } catch (err) {
      setError("An unexpected error occurred during file removal.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && <label>{label}</label>}

      {/* Hidden file input */}
      <Input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        multiple
        className="hidden"
      />

      {/* Icon trigger */}
      <div className="flex items-center gap-2">
        {images.length < maxFiles && (
          <ImageUp
            size={60}
            strokeWidth={1}
            className="cursor-pointer ring-1 rounded-md text-blue-500 p-2 hover:text-blue-700"
            onClick={handleIconClick}
          />
        )}
        {isLoading && (
          <Loader2 className="animate-spin text-blue-500" size={24} />
        )}
        {success && <CheckCircle className="text-green-500" size={24} />}
        {error && <XCircle className="text-red-500" size={24} />}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Success Message */}
      {success && <p className="text-green-500">{success}</p>}

      {/* List of uploaded images */}
      <div className="flex flex-wrap gap-2 mt-2">
        {images.map((url, index) => (
          <div key={index} className="flex flex-col items-center">
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleRemoveFile(url)}
              className="mt-1"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileInput;
