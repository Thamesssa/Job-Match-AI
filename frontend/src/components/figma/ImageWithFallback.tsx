import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export function ImageWithFallback({ src, alt, className, fallback }: ImageWithFallbackProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallback) {
        setImageSrc(fallback);
      }
    }
  };

  if (hasError && !fallback) {
    return (
      <div className={`bg-gradient-to-br from-[#0078D7]/20 to-[#4CAF50]/20 flex items-center justify-center ${className}`}>
        <div className="text-gray-400 text-sm text-center p-4">
          Image not available
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}