import "./App.css";
import ButtonPanel from "./components/ButtonPanel/ButtonPanel";
import Tabel from "./components/Tabel/Tabel";
import { useUiContext } from "./contexts/UiProvider";
import Popup from "./components/Popup/Popup";

const App = () => {

  const ui = useUiContext();

  return (
      <div className="App">
        {ui?.popupActive? <Popup /> : <></>}
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
