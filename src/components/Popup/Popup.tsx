import { useTaskContext } from "../../contexts/TaskProvider";
import { useUiContext } from "../../contexts/UiProvider";
import { Task } from "../../interfaces/Interfaces";
import Button from "../Button/Button";
import "./Popup.css";
import PopupSelect from "./PopupSelect/PopupSelect";

const Popup = () => {

  const ui = useUiContext();
  const task = useTaskContext();
  const selectedTask = task?.tasks.find(task => task.id === ui?.taskId)

  return (
    <div className="popup">
      <div id="popupContent">
        <h2>Popup Content</h2>
        <input type="text" value={selectedTask?.label || ""} />
        <PopupSelect options={task?.persons.map(person => person.name)!} />
        {selectedTask?.dueDate}
        <input type="date" value={selectedTask?.dueDate} />
        <PopupSelect options={["Offen", "Erledigt"]} />
        <div id="popupButtons">
          <Button onClick={ui?.togglePopup} name={"Abbrechen"} />
          <Button onClick={ui?.togglePopup} name={"Speichern"} />
        </div>
      </div>
    </div>);
}

export default Popup;