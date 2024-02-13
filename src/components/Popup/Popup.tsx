import Button from "../Button/Button";
import "./Popup.css";

const Popup = ({ onClose }:{onClose : any}) => {

  return (
    <div className="popup">
        <div className="popup-inner">
          <h2>Popup Content</h2>
          <Button onClick={undefined} name={"Abbrechen"} />
        </div>
  </div>  );
}

export default Popup;