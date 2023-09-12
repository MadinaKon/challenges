import Entries from "./components/EntriesSection/EntriesSection";
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
