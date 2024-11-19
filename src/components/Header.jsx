import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Button } from "./Button";
import { useAuth } from "../contexts/auth-context";

export function Header() {
  const { user, setUser } = useAuth();

  return (
    <header className={styles.header}>
      <Link to="/">
        <a>
          <h1>Abibos</h1>
        </a>
      </Link>
      <div className={styles.links}>
        <a href="#services">Serviços</a>
        <a href="#about">Quem somos</a>
      </div>

      {user ? (
        <div className={styles.logoutBtn}>
          <h1>Olá, {user.name}</h1>
          <Button  variant="glass" onClick={() => setUser(null)}>Sair</Button>
        </div>
      ) : (
        <Link to="/login">
          <Button variant="glass">Faça seu login</Button>
        </Link>
      )}
    </header>
  );
}