import Entries from "./components/Entries/Entries";
import EntryForm from "./components/EntryForm/EntryForm";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <EntryForm />
        <Entries />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
