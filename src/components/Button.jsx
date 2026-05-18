function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses = "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-2 focus-indigo-500";

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    success: "bg-emerald-600 hover:bg-emerald-700",
    warning: "bg-amber-600 hover:bg-amber-700",
    danger: "bg-rose-600 hover:bg-rose-700",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
  }[variant] || variantClasses.primary;

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
