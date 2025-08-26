import React from 'react';

interface ImageZoomModalProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({ src, alt, open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={onClose}>
      <div className="relative max-w-5xl w-full m-0 p-0" onClick={e => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80 transition"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <img src={src} alt={alt} className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[110vh]" />
      </div>
    </div>
  );
};

export default ImageZoomModal;
