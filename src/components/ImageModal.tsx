'use client';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  origin: string;
  history?: string;
  importance: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  origin,
  history,
  importance,
}: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose} // Close modal on backdrop click
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden bg-neutral-800 p-6 rounded-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg max-w-full max-h-[60vh] object-contain mb-4"
        />

        {/* Info Section */}
        <div className="text-white space-y-4">
          <h3 className="text-4xl font-bold">{title}</h3>
          <p className="text-2xl font-bold">
            <span className="font-semibold">Origin: </span>{origin}
          </p>
          {history && (
            <p className="text-2xl font-bold">
              <span className="font-semibold">History: </span>{history}
            </p>
          )}
          <p className="text-2xl font-bold">
            <span className="font-semibold">Importance: </span>{importance}
          </p>
        </div>
      </div>
    </div>
  );
}
