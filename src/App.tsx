import "./App.css";
import Button from "./components/Button/Button";
import ButtonPanel from "./components/ButtonPanel/ButtonPanel";
import Tabel from "./components/Tabel/Tabel";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div id="headerContent">
          Aufgabenliste
          <ButtonPanel />
        </div>
      </header>
      <div id="content">
        <Tabel />
      </div>
    </div>
  );
}

export default App;
