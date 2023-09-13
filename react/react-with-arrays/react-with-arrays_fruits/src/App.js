import Card from "./components/Card";

export default function App() {
  const fruits = [
    { name: "Apple", id: 1, color: "Red" },
    { name: "Banana", id: 2, color: "Yellow" },
    { name: "Orange", id: 3, color: "Orange" },
    { name: "Grapes", id: 4, color: "Purple" },
    { name: "Strawberry", id: 5, color: "Teal" },
  ];

  return (
    <div className="app">
      {fruits.map(({ name, id, color }) => {
        return (
          <>
            {" "}
            <Card name={name} id={id} color={color} />
          </>
        );
      })}
    </div>
  );
}
