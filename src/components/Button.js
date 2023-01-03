import "css/Button.css";

function Button({ onClickHandler, title }) {
  return <button onClick={onClickHandler}>{title}</button>;
}

export default Button;
