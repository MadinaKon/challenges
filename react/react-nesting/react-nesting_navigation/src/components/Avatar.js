import Image from "./Image";

export default function Avatar({ avatar }) {
  return (
    <>
      <Image className="round-image" src={avatar} alt="avatar" />
    </>
  );
}
