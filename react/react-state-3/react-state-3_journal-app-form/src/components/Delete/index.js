export default function Delete({ onDelete }) {
  console.log("onDelete ", onDelete);
  return <button onClick={onDelete}>X</button>;
}
