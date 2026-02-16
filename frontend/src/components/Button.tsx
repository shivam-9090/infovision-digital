import React, { memo } from "react";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
