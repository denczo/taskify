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
            ui?.togglePopup({name: "📄 New Task", action: (taskEdited) => task?.addTask(taskEdited)!})
        }
        else if(type === PopupType.EDIT){
            ui?.togglePopup({name: "✏️ Edit Task", action: (taskEdited) => task?.editTask(taskEdited)!})
        }
    }

    return (<div id="buttonPanel">
        <Button onClick={() => action(PopupType.ADD)} name={"📄 Add Task"} />
        <Button onClick={() => action(PopupType.EDIT)} name={"✏️ Edit Task"} />
        <Button onClick={() => task?.deleteTask(ui?.taskId || 0)} name={"🗑️ Delete Task"} />
        <Button onClick={() => task?.resetData()} name={"🔁 Reset Data"} />
    </div>
    );
}

export default ButtonPanel;
