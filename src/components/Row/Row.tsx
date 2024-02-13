import { Task } from "../../interfaces/Interfaces";
import "./Row.css";
import { useUiContext } from "../../contexts/UiProvider";

const Row = ({data, person} : {data: Task, person: String}) => {

  const ui = useUiContext();
  const dueDateConverted = ui?.parseGermanDate(data.dueDate);
  const dateStatus = dueDateConverted? (dueDateConverted < Date.now() && !data.done? "Überfällig" : data.dueDate): "";

  return (
    <div className="row">
          <div style={{minWidth: '50px'}}>
            <input type="checkbox" 
              onChange={() => ui?.handleCheckboxChange(data.id)} 
              checked={data.id === ui?.taskId}
            />
            </div>
          <div style={{minWidth: '600px'}}>{data.label}</div>
          <div style={{minWidth: '200px'}}>{person}</div>
          <div style={{minWidth: '150px'}}>{dateStatus}</div>
          <div style={{minWidth: '100px'}}>{data.done? "Erledigt" : "Offen"}</div>
    </div>
  );
}

export default Row;