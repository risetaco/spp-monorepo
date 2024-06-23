import { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button className="min-w-16 py-2 px-4 text-white rounded-full bg-primary" {...props}>
      {children}
    </button>
  );
};

export default Button;
