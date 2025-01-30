import type { variantTypes } from "./button.constants";

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: (typeof variantTypes)[number];
}
