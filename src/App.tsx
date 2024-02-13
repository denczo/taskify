import { useState } from "react";
import "./App.css";
import ButtonPanel from "./components/ButtonPanel/ButtonPanel";
import Tabel from "./components/Tabel/Tabel";
import { TaskProvider } from "./contexts/TaskProvider";
import { UiProvider } from "./contexts/UiProvider";

function App() {

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <TaskProvider>
      <UiProvider>
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
      </UiProvider>
    </TaskProvider>

  );
}

export default App;
