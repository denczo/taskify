import "./App.css";
import Tabel from "./components/Table/Table";
import { useUiContext } from "./contexts/UiProvider";
import Popup from "./components/Popup/Popup";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { useTaskContext } from "./contexts/TaskProvider";

const App = () => {

  const ui = useUiContext();
  const task = useTaskContext();

  useEffect(() => {
      task?.getTasks();
      task?.getPersons();
  }, [])

  return (
    <div className="App">
      {ui?.popupActive ? <Popup action={ui.popupAction} /> : <></>}
      <Navbar />
      <Tabel />
      <footer>&copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla. All rights reserved.</footer>
    </div>
  );
}

export default App;