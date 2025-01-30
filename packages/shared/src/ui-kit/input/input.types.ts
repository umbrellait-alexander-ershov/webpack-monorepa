export interface InputProps {
  type?: HTMLInputElement["type"];
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: () => void;
}
