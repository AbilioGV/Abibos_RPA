import styles from "./Profile.module.css";

import "../global.css";

export function Profile({ image }) {
  return <img src={image} className={styles.profile}/>;
}
