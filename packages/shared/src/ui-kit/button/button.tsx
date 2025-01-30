import styles from "./button.module.scss";

import type { ButtonProps } from "./button.types";

export const Button = <T extends ButtonProps>({
  text,
  variant,
  onClick,
}: T) => {
  const currentStyle = variant === "primary" ? styles.primary : "";

  return (
    <button className={`${styles.root} ${currentStyle}`} onClick={onClick}>
      {text}
    </button>
  );
};
