import "./styles.css";

export default function App() {
  return <Greeting name="Madina" />;
}

function Greeting({ name }) {
  const coaches = ["Marcell", "Jan", "Klaus"];
  console.log("coaches ", coaches);

  return <h1>{coaches.includes(name) ? "Hello, Coach!" : "Hello " + name}</h1>;
}
