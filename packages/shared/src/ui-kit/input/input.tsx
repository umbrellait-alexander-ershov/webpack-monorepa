import styles from "./input.module.scss";
import type { InputProps } from "./input.types";

export const Input = ({
  placeholder,
  type,
  disabled,
  defaultValue,
  onChange,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      defaultValue={defaultValue}
      onChange={onChange}
      className={styles.root}
    />
  );
};
