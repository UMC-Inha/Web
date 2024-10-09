export default function Input({ type, defaultValue="", value, onChange }) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
}