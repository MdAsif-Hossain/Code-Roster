import { useCallback, useState } from "react";
import { Trash2, Upload, Image, X } from "lucide-react";

interface DropZoneProps {
  onFileDrop: (file: File) => void;
  file: File | null;
  onClear: () => void;
  disabled?: boolean;
}

export const DropZone = ({ onFileDrop, file, onClear, disabled }: DropZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (disabled) return;
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      onFileDrop(droppedFile);
    }
  }, [onFileDrop, disabled]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      onFileDrop(selectedFile);
    }
  }, [onFileDrop]);

  if (file) {
    return (
      <div className="relative p-6 md:p-8 bg-card border-4 border-primary rounded-none brutal-shadow-lg">
        <button
          onClick={onClear}
          disabled={disabled}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-primary transition-colors disabled:opacity-50"
          aria-label="Clear file"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-4">
          <div className="p-4 bg-secondary rounded-none">
            <Image className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-mono text-lg font-bold text-foreground truncate">
              {file.name}
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              {(file.size / 1024).toFixed(1)} KB • Ready for roasting
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <label
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        block cursor-pointer
        p-8 md:p-12
        border-4 border-dashed rounded-none
        transition-all duration-300
        ${isDragging 
          ? "border-primary bg-primary/10 scale-[1.02]" 
          : "border-muted-foreground/40 bg-card hover:border-primary hover:bg-card/80"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        disabled={disabled}
        className="sr-only"
      />
      
      <div className="flex flex-col items-center gap-4 text-center">
        <div className={`
          p-6 rounded-full bg-secondary
          ${isDragging ? "animate-pulse" : ""}
        `}>
          <Trash2 className={`
            w-12 h-12 md:w-16 md:h-16
            ${isDragging ? "text-primary" : "text-muted-foreground"}
          `} />
        </div>
        
        <div>
          <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
            Drop your spaghetti code here
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            or click to upload a screenshot
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <Upload className="w-4 h-4 text-primary" />
          <span className="font-mono text-xs text-primary">
            PNG, JPG, GIF up to 10MB
          </span>
        </div>
      </div>
    </label>
  );
};
