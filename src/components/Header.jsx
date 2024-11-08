import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Button } from "./Button";

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/"><a><h1>Abibos</h1></a></Link>
      <div className={styles.links}>
        <a href="#services">Serviços</a>
        <a href="#about">Quem somos</a>
      </div>
      <Link to="/login">
        <Button variant="glass">Faça seu login</Button>
      </Link>
    </header>
  );
}
