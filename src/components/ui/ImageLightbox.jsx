import { useEffect } from "react";

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image?.src) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("lightbox-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("lightbox-open");
    };
  }, [image, onClose]);

  if (!image?.src) return null;

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption || image.alt || "Expanded project image"}
      onClick={onClose}
    >
      <div className="image-lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <button className="image-lightbox-close" type="button" onClick={onClose}>
          <span className="visually-hidden">Close image preview</span>
          ×
        </button>

        <img src={image.src} alt={image.alt} />

        {image.caption && <p>{image.caption}</p>}
      </div>
    </div>
  );
}

export default ImageLightbox;