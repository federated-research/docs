// Shows the light (-white) or dark version of an animation to match the site
// theme. The video plays when clicked. The #t fragment makes Safari show the
// first frame before it is played.
function Video({ src, label, className }) {
  return (
    <video
      className={`themed-video ${className}`}
      src={`${src}#t=0.001`}
      aria-label={label}
      muted
      playsInline
      controls
      preload="metadata"
    />
  )
}

export function ThemedVideo({ name, label }) {
  return (
    <>
      <Video src={`/assets/animations/${name}-white.mp4`} label={label} className="themed-video-light" />
      <Video src={`/assets/animations/${name}.mp4`} label={label} className="themed-video-dark" />
    </>
  )
}
