import { useEffect, useState } from "react";
import { useTaskContext } from "../../contexts/TaskProvider";
import { useUiContext } from "../../contexts/UiProvider";
import Button from "../Button/Button";
import "./Popup.css";
import PopupSelect from "./PopupSelect/PopupSelect";
import { getCurrentDate, parseGermanDate, parseUSDate } from "../../utils/dateUtils";
import { PopupAction, SelectOption, Task } from "../../react-app-env.d";

const Popup = ({ action }: { action: PopupAction }) => {

  const ui = useUiContext();
  const task = useTaskContext();
  const selectedTask = task?.tasks.find(task => task.id === ui?.taskId);
  const [taskEdit, setTaskEdit] = useState<Task>(selectedTask || { id: Date.now(), done: false, dueDate: getCurrentDate(), responsible: 0, label: "Neue Aufgabe" });
  const personOptions: SelectOption[] = task?.persons.map(({ id, name }) => ({ name, value: id }))!;
  const statusOptions: SelectOption[] = [{ name: "Offen", value: 0 }, { name: "Erledigt", value: 1 }];

  return (
    <div className="popup">
      <div id="popupContent">
        <h2>{action.name}</h2>
        <div className="section">
          <label>Beschreibung</label>
          <input type="text" id="description" value={taskEdit?.label} onChange={(e) => setTaskEdit(prevTask => ({ ...prevTask!, label: e.target.value }))} />
        </div>
        <div className="section">
          <label>Verantwortlich</label>
          <PopupSelect options={personOptions} selected={taskEdit?.responsible!} onChange={(value: any) => setTaskEdit(prevTask => ({ ...prevTask!, responsible: value }))} />
        </div>
        <div className="section">
          <label>Fälligkeit</label>
          <input type="date" id="date" value={parseGermanDate(taskEdit?.dueDate) || getCurrentDate()} onChange={(e) => setTaskEdit(prevTask => ({ ...prevTask!, dueDate: parseUSDate(e.target.value)}))} />
        </div>
        <div className="section">
          <label>Status</label>
          <PopupSelect options={statusOptions} selected={Number(taskEdit?.done!)} onChange={(value: any) => setTaskEdit(prevTask => ({ ...prevTask!, done: value }))} />
        </div>
        <div id="popupButtons">
          <Button onClick={ui?.togglePopup} name={"Abbrechen"} />
          <Button onClick={() => { action.action(taskEdit); ui?.togglePopup() }} name={"Speichern"} />
        </div>
      </div>
    </div>);
}

export default Popup;