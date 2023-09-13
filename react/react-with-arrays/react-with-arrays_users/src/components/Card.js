import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";

function Card({ user }) {
  console.log("USER ", user);
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {/* <Tag tag={user.roles[0]} /> */}
        {user?.roles.map((roles) => (
          <Tag tag={roles} key={roles.id} />
        ))}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
