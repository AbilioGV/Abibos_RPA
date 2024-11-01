import styles from "./Button.module.css";

import "../global.css";

export function Button({ children }) {
  return (
    <button>
      <strong>{children}</strong>
    </button>
  );
}
