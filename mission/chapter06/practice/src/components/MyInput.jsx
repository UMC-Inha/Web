import './MyInput.css';

function Input({ value, onChange, placeholder = '' }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="todo-input"
    />
  );
}

export default Input;
