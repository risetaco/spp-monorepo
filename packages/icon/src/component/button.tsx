import { ButtonHTMLAttributes } from "react";

const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="min-w-16 py-2 px-4 text-white rounded-full bg-primary" {...props}>
      {children}
    </button>
  );
};

export default Button;
