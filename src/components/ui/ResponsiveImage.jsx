function ResponsiveImage({
  src,
  alt,
  label,
  className = "",
  enableLightbox = false,
  caption,
  onOpen,
}) {
  const classes = `responsive-image ${className}`.trim();

  if (!src) {
    return (
      <div className={`image-placeholder ${className}`.trim()} aria-hidden="true">
        <span>{label}</span>
      </div>
    );
  }

  if (enableLightbox) {
    return (
      <button
        className={`image-button ${className}`.trim()}
        type="button"
        onClick={() =>
          onOpen?.({
            src,
            alt,
            caption,
          })
        }
        aria-label={`Enlarge image: ${caption || alt}`}
      >
        <img className={classes} src={src} alt={alt} loading="lazy" />
        <span className="image-button-label">View</span>
      </button>
    );
  }

  return <img className={classes} src={src} alt={alt} loading="lazy" />;
}

export default ResponsiveImage;