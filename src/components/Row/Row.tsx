import "./Row.css";

interface Task {
  id: number,
  label: String,
  responsible: number,
  dueDate: String,
  done: boolean
}

const Row = ({data} : {data: Task}) => {

  return (
    <div className="row">
          <div style={{minWidth: '600px'}}>{data.label}</div>
          <div style={{minWidth: '200px'}}>{data.responsible}</div>
          <div style={{minWidth: '150px'}}>{data.dueDate}</div>
          <div style={{minWidth: '100px'}}>{data.done}</div>
    </div>
  );
}

export default Row;
