import Image from "./Image";

export default function Logo({ src }) {
  return (
    <>
      <Image className="round-image" src={src} alt="logo" />
    </>
  );
}
