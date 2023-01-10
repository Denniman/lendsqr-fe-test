import { HTMLButtonElement } from "react";

export type IButton = {
  text: string;
  className?: string;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
