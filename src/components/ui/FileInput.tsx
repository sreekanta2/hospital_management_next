import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { ImageUp, Trash2 } from "lucide-react";

interface FileInputProps {
  onFileChange: (file: File | null) => void;
  label?: string; // Optional label
}

const FileInput: React.FC<FileInputProps> = ({ onFileChange, label }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileChange(file); // Pass the selected file to the parent
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveFile = () => {
    onFileChange(null); // Clear the file
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input value
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
        className="hidden"
      />

      {/* Icon trigger and remove button */}
      <div className="flex gap-2">
        <ImageUp
          size={40}
          strokeWidth={1}
          className="cursor-pointer ring-1 p-1 rounded-md text-blue-500 hover:text-blue-700"
          onClick={handleIconClick}
        />
        <Trash2
          size={40}
          strokeWidth={1}
          className="cursor-pointer ring-1 ring-red-400 p-2 rounded-md text-red-500"
          onClick={handleRemoveFile}
        />
      </div>
    </div>
  );
};

export default FileInput;
