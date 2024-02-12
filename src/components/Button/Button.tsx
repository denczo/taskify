import "./Button.css";


const Button = ({name} : {name: String}) => {

  return (
    <div className="button" onClick={undefined}>{name}</div>
  );
}

export default Button;