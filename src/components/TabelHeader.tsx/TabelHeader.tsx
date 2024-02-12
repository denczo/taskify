import "./TabelHeader.css";

const TabelHeader = () => {

  return (
    <div className="tabelHeader">
          <div style={{minWidth: '600px'}}>{"Beschreibung"}</div>
          <div style={{minWidth: '200px'}}>{"Verantwortlich"}</div>
          <div style={{minWidth: '150px'}}>{"Fälligkeit"}</div>
          <div style={{minWidth: '100px'}}>{"Status"}</div>
    </div>
  );
}

export default TabelHeader;
