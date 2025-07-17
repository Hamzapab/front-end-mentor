import { CircleAlert } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface MyDropzoneProps {
  onFileSelect: (files: File[]) => void;
  files: File[];
}

export function MyDropzone({ onFileSelect }: MyDropzoneProps) {
  const [fileSizeB, setFileSizeB] = useState<boolean | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // do not accept file bigger than 500KB
      const filteredFiles = acceptedFiles.filter(
        (file) => file.size <= 500 * 1024
      );
      if (filteredFiles.length > 0) {
        onFileSelect(filteredFiles);
        setPreviewUrl(URL.createObjectURL(filteredFiles[0]));
        setFileSizeB(true);
      } else {
        setFileSizeB(false);
      }
    },
    [onFileSelect]
  );
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    noClick: fileSizeB ?? undefined,
    multiple: false,
  });

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);
  const handleRemoveImage = (): void => {
    onFileSelect([]); //
    setPreviewUrl(null);
    setFileSizeB(null);
  };

  return (
    <div>
      <div 
        className={`bg-[#4b486a4d] flex flex-col items-center gap-3 mb-1
        transition-all duration-300 ease-in hover:cursor-pointer hover:bg-[#4b486ab3]
       border-2 border-dashed 
       ${isDragActive ? "border-gray-300" : "border-gray-500 "}
       py-5 px-3 rounded-lg outline-0 focus:outline-1`}
        role="button"
        tabIndex={0}
        aria-label="Upload files"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {!fileSizeB && (
          <>
            <div className="p-1 bg-[#4b486ab3] rounded-lg">
              <img
                src="/assets/images/icon-upload.svg"
                alt="upload icon"
                className="w-8 h-8 "
              />
            </div>
            {isDragActive ? (
              <p className="text-sm text-gray-400 font-semibold">
                Release to upload the file
              </p>
            ) : (
              <p className="text-sm text-gray-400 font-semibold">
                Drag and drop or click to upload
              </p>
            )}
          </>
        )}
        {fileSizeB && (
          <>
            <div className="p-1 rounded-lg">
              <img
                src={previewUrl ?? undefined}
                alt="Preview"
                className="w-10 h-10 rounded-lg"
              />
            </div>
            <div>
              <button
                type="button"
                onClick={handleRemoveImage}
                className="cursor-pointer text-[10px] text-gray-300 bg-[#4b486a80] mr-2 py-0.5 px-1.5 rounded-xs"
              >
                Remove Image
              </button>
              <button
                type="button"
                onClick={open}
                className="cursor-pointer text-[10px] text-gray-300 bg-[#4b486a80] py-0.5 px-1.5 rounded-xs"
              >
                Change Image
              </button>
            </div>
          </>
        )}
      </div>
      {fileSizeB === false && (
        <span className="text-xs text-red-500  flex items-center gap-2 mb-2">
          <CircleAlert className="w-4" />
          File too large, Please upload a photo under 500KB.
        </span>
      )}
      {fileSizeB !== false && (
        <span className="text-xs text-gray-500 font-semibold flex items-center gap-2 mb-2">
          <CircleAlert className="w-4" />
          Upload your photo (JPG or PNG, max size : 5MB).
        </span>
      )}
    </div>
  );
}
