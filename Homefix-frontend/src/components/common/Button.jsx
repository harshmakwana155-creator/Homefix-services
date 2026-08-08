function Button({ children, type = "button", variant = "primary", ...props }) {
  const base = "rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
  };

  return (
    <button type={type} className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
