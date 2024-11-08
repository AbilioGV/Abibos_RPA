import styles from "./Button.module.css";

import "../global.css";

export function Button({ children, variant = 'gradient', icon, ...props }) {
  const buttonClasses = `${styles.button} ${styles[`button-${variant}`]}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}