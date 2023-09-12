import Entries from "./components/Entries/Entries";
import EntryForm from "./components/EntryForm/EntryForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <EntryForm />
        <Entries />
      </main>
      <Footer />
    </>
  );
}

export default App;
