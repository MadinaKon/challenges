export default function Image({ src, alt }) {
  console.log(src);
  return <img className="round-image" src={src} alt={alt} />;
}
