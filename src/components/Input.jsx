
function Input({ label, multiline = false, className = "", ...props }) {
  const Control = multiline ? "textarea" : "input";

  return (
    <label className={`field ${className}`.trim()}>
      <span>{label}</span>
      <Control className="input" {...props} />
    </label>
  );
}

export default Input;
