import { useState } from "react";
import { useTaskContext } from "../../contexts/TaskProvider";
import { useUiContext } from "../../contexts/UiProvider";
import { PopupAction, SelectOption, Task } from "../../interfaces/Interfaces";
import Button from "../Button/Button";
import "./Popup.css";
import PopupSelect from "./PopupSelect/PopupSelect";
import { parseGermanDate, parseUSDate } from "../../utils/dateUtils";

const Popup = ({action}:{action: PopupAction}) => {

  const ui = useUiContext();
  const task = useTaskContext();
  const selectedTask = task?.tasks.find(task => task.id === ui?.taskId);
  const [taskEdit, setTaskEdit] = useState<Task>(selectedTask!);
  const personOptions: SelectOption[] = task?.persons.map(({id, name}) => ({ name,  value: id}))!;
  const statusOptions: SelectOption[] = [{name: "Offen", value: 0},{name: "Erledigt", value: 1}];

  return (
    <div className="popup">
      <div id="popupContent">
        <h2>{action.name}</h2>
        <input type="text" id="description" value={taskEdit?.label} onChange={(e) => setTaskEdit(prevTask => ({ ...prevTask!, label: e.target.value }))}/>
        <PopupSelect options={personOptions} selected={taskEdit?.responsible!} onChange={(value: any) => setTaskEdit(prevTask => ({ ...prevTask!, responsible: value }))} />
        <input type="date" id="date" value={parseGermanDate(taskEdit?.dueDate)!} onChange={(e) => setTaskEdit(prevTask => ({ ...prevTask!, dueDate: parseUSDate(e.target.value) }))}/>
        <PopupSelect options={statusOptions} selected={Number(taskEdit?.done!)} onChange={(value: any) => setTaskEdit(prevTask => ({ ...prevTask!, done: value }))}/>
        <div id="popupButtons">
          <Button onClick={ui?.togglePopup} name={"Abbrechen"} />
          <Button onClick={() => {action.action(taskEdit); console.log(JSON.stringify(taskEdit)); ui?.togglePopup()}} name={"Speichern"} />
        </div>
      </div>
    </div>);
}

export default Popup;