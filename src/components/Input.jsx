
function Input({ label, multiline = false, className = "", ...props }) {
  const Control = multiline ? "textarea" : "input";

  return (
    <label className={`field ${className}`.trim()}>
      <span className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{label}</span>
      <Control 
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
        focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm 
        ${multiline ? "h-32 resize-y" : "h-10 pl-3 pr-4"}`
        } 
        {...props} 
      />
    </label>
  );
}

export default Input;
