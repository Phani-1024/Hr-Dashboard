interface BadgeProps {
  variant?: "success" | "warning" | "danger" | "info";
  children: React.ReactNode;
  className?: string;
}

const variants = {
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  danger: "bg-red-100 text-red-700",
  info: "bg-primary-100 text-primary-700", // changed from blue to teal
};

export default function Badge({
  variant = "info",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-0.5
        text-xs font-semibold
        rounded-full
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
