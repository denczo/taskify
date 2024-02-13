import Button from "../Button/Button";
import "./ButtonPanel.css";
import { useTaskContext } from "../../contexts/TaskProvider";
import { useUiContext } from "../../contexts/UiProvider";
import { PopupType } from "../../react-app-env.d";

const ButtonPanel = () => {

    const task = useTaskContext();
    const ui = useUiContext();
    const action = (type: PopupType) => {
        if(type == PopupType.ADD){
            ui?.togglePopup({name: "Neue Aufgabe", action: (taskEdited) => task?.addTask(taskEdited)!})
        }
        else if(type === PopupType.EDIT){
            ui?.togglePopup({name: `#${ui.taskId} Aufgabe bearbeiten`, action: (taskEdited) => task?.editTask(taskEdited)!})
        }
    }

    return (<div id="buttonPanel">
        <Button onClick={() => action(PopupType.ADD)} name={"Aufgabe hinzufügen"} />
        <Button onClick={() => action(PopupType.EDIT)} name={"Aufgabe editieren"} />
        <Button onClick={() => task?.deleteTask(ui?.taskId || 0)} name={"Aufgabe löschen"} />
    </div>
    );
}

export default ButtonPanel;
