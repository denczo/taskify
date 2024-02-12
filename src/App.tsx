import "./App.css";
import Tabel from "./components/Tabel/Tabel";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div id="headerContent">
          Aufgabenliste
        </div>
      </header>
      <div id="content">
        <Tabel />
      </div>
    </div>
  );
}

export default App;
