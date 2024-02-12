import Button from "../Button/Button";
import "./ButtonPanel.css";

const ButtonPanel = () => {

    return (<div id="buttonPanel">
        <Button name={"Aufgabe hinzufügen"} />
        <Button name={"Aufgabe löschen"} />
    </div>
    );
}

export default ButtonPanel;
