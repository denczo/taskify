import "./Row.css";
import { useUiContext } from "../../contexts/UiProvider";
import { parseGermanDate } from "../../utils/dateUtils";
import { Task } from "../../react-app-env.d";

const Row = ({data, person} : {data: Task, person: String}) => {

  const ui = useUiContext();
  const dueDateConverted = parseGermanDate(data.dueDate);
  const dateStatus = new Date(dueDateConverted).getTime() < Date.now() && !data.done? "⏰ late" : data.dueDate!;

  return (
    <div className="row">
          <div>
            <input type="checkbox" 
              onChange={() => ui?.handleCheckboxChange(data.id)} 
              checked={data.id === ui?.taskId}
            />
            </div>
          <div>{data.label}</div>
          <div>{person}</div>
          <div>{dateStatus}</div>
          <div>{data.done? "✅" : "🧑‍💻"}</div>
    </div>
  );
}

export default Row;