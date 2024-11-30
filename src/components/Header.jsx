import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Button } from "./Button";
import { useAuth } from "../contexts/auth-context";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

export function Header() {
  const { user, setUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <a>
          <h1>Abibos</h1>
        </a>
      </Link>

      <div className={styles.menuMobile} onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} color="white" /> : <List size={24} color="white" />}
      </div>

      <div className={`${styles.links} ${isMenuOpen ? styles.linksVisible : ''}`}>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>Quem somos</a>
        {user?.role === 1 && (
          <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Pedidos</Link>
        )}
      </div>

      {user ? (
        <div className={styles.logoutBtn}>
          <h1>Olá, {user.name}</h1>
          <Button variant="glass" onClick={() => setUser(null)}>Sair</Button>
        </div>
      ) : (
        <Link to="/login">
          <Button variant="glass">Faça seu login</Button>
        </Link>
      )}
    </header>
  );
}