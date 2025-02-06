import { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: "text" | "email" | "password" | "tel" | "url" | "number";
  placeholder?: string;
  label?: string;
  id?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}