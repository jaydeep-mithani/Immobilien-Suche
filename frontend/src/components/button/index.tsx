import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`${className} px-4 py-2 rounded-[4px] transition-colors duration-200 ease-linear ${
        variant === "primary"
          ? "bg-foreground text-background hover:bg-gray-700"
          : "bg-background text-foreground hover:bg-gray-200"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
