interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variants = {
  primary: "bg-primary-600 text-white hover:bg-primary-700",
  secondary:
    "bg-secondary-100 text-secondary-800 hover:bg-secondary-200 border border-secondary-300",
  danger: "bg-red-100 text-red-600 hover:bg-red-200",
  success: "bg-green-600 text-white hover:bg-green-700",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        inline-flex items-center justify-center
        font-medium rounded-md
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400
        transition-colors duration-200
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
