import React, { memo } from "react";
import "./Card.css";

export interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "hover" | "bordered";
  className?: string;
}

const CardComponent: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const classes = `card card--${variant} ${className}`.trim();

  return <div className={classes}>{children}</div>;
};

export const Card = memo(CardComponent);

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeaderComponent: React.FC<CardHeaderProps> = ({
  children,
  className = "",
}) => <div className={`card__header ${className}`.trim()}>{children}</div>;

export const CardHeader = memo(CardHeaderComponent);

export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

const CardBodyComponent: React.FC<CardBodyProps> = ({
  children,
  className = "",
}) => <div className={`card__body ${className}`.trim()}>{children}</div>;

export const CardBody = memo(CardBodyComponent);

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
}) => <div className={`card__footer ${className}`.trim()}>{children}</div>;
