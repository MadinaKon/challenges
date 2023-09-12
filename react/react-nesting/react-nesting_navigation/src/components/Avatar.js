import Image from "./Image";
export default function Avatar({ avatar, handleClick }) {
  return (
    <button type="button" onClick={handleClick} aria-label="toggle profile">
      <Image className="round-image" src={avatar} alt="avatar" />
    </button>
  );
}
