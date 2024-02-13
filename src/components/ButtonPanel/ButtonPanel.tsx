import { useState } from "react";
import Button from "../Button/Button";
import "./ButtonPanel.css";
import { useTaskContext } from "../../contexts/TaskProvider";

const ButtonPanel = () => {

    const task = useTaskContext();
    const [showPopup, setShowPopup] = useState(false);


    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

    return (<div id="buttonPanel">
        <Button onClick={undefined} name={"Aufgabe hinzufügen"} />
        <Button onClick={undefined} name={"Aufgabe editieren"} />
        <Button onClick={task?.deleteTask} name={"Aufgabe löschen"} />
    </div>
    );
}

export default ButtonPanel;
