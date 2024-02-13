import { useState } from "react";
import "./PopupSelect.css";

const PopupSelect = ({options}: {options: string[]}) => {

    const [option, setOption] = useState<string>();

    return (
        <div className="popupSelect">
            <select id="status" value={option} onChange={(e) => setOption(e.target.value)} name="status">
                {options.map(option => <option value={option}>{option}</option>)}
            </select>
        </div>);
}

export default PopupSelect;