import Button from "../Button/Button";
import "./ButtonPanel.css";
import { useTaskContext } from "../../contexts/TaskProvider";
import { useUiContext } from "../../contexts/UiProvider";

const ButtonPanel = () => {

    const task = useTaskContext();
    const ui = useUiContext();

    return (<div id="buttonPanel">
        <Button onClick={ui?.togglePopup} name={"Aufgabe hinzufügen"} />
        <Button onClick={ui?.togglePopup} name={"Aufgabe editieren"} />
        <Button onClick={() => task?.deleteTask(ui?.taskId || 0)} name={"Aufgabe löschen"} />
    </div>
    );
}

export default ButtonPanel;
