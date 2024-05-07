import "./Button.css";

const Button = ({name, onClick} : {name: String, onClick: any}) => {

  return (
    <div className="button" onClick={onClick}>{name}</div>
  );
}

export default Button;