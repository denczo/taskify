import "./TableHeader.css";

const TableHeader = () => {

  return (
    <div className="tableHeader">
          <div></div>
          <div>{"📃 Description "}</div>
          <div>{"💪 Responsible"}</div>
          <div>{"📅 Due date"}</div>
          <div>{"🚦 Status"}</div>
          <div></div>
    </div>
  );
}

export default TableHeader;
