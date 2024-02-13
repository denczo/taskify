import { SelectOption } from "../../../react-app-env.d";
import "./PopupSelect.css";

const PopupSelect = ({options, selected, onChange}: {options: SelectOption[], selected: number, onChange: (value: number) => void}) => {

    return (
        <div className="popupSelect">
            <select id="status" value={selected} onChange={(e) => {onChange(parseInt(e.target.value))}} name="status">
                {options.map((option, index) => <option value={option.value} key={index}>{option.name}</option>)}
            </select>
        </div>);
}

export default PopupSelect;