import "./App.css";
import BoltHeader from "./components/BoltHeader";
import PageContent from "./components/PageContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoltHeader />
        <PageContent />
      </header>
    </div>
  );
}

export default App;
