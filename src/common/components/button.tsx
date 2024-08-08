import { cn } from "@/common/lib/utils";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  endIcon,
  className,
  style,
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <button
      className={cn("bg-primary rounded-full text-center text-white text-sm font-medium py-4 gap-3 px-3 min-w-24 flex", className)}
      onClick={onClick}
      type={type}
      style={style}
    >
      {children}
      {text && <span className="btn_text">{text}</span>}
      {endIcon && <span className="btn_icon_container">{endIcon}</span>}
    </button>
  );
};

export default Button;
