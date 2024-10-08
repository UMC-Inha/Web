import './MyButton.css';

function Button({ onClick, children, type = 'button' }) {
  return (
    <button onClick={onClick} type={type} className="todo-button">
      {children}
    </button>
  );
}

export default Button;
