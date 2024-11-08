import { useState } from "react";
import { Button } from "../components/Button";
import styles from "./Login.module.css";
import { Envelope, User, Lock } from "@phosphor-icons/react";

export function Login() {
  const [activeTab, setActiveTab] = useState("login");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    //lógica de login aqui
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    //lógica de registro aqui
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.auth}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabBtn} ${
              activeTab === "login" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`${styles.tabBtn} ${
              activeTab === "register" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("register")}
          >
            Cadastro
          </button>
        </div>

        <div
          className={`${styles.tabContent} ${
            activeTab === "login" ? styles.active : ""
          }`}
        >
          <h2>Bem-vindo de volta!</h2>
          <form className={styles.authForm} onSubmit={handleSubmitLogin}>
            <div className={styles.inputGroup}>
              <Envelope className={styles.inputIcon} size={20}/>
              <input type="email" placeholder="E-mail" required />
            </div>
            <div className={styles.inputGroup}>
              <Lock className={styles.inputIcon} size={20}/>
              <input type="password" placeholder="Senha" required />
            </div>
            <div className={styles.formFooter}>
              <label>
                <input type="checkbox" />
                <span>Lembrar-me</span>
              </label>
              <a href="#" className={styles.forgot}>
                Esqueceu a senha?
              </a>
            </div>
            <Button variant="gradient" type="submit">
              Entrar
            </Button>
          </form>
        </div>

        <div
          className={`${styles.tabContent} ${
            activeTab === "register" ? styles.active : ""
          }`}
        >
          <h2>Crie sua conta</h2>
          <form className={styles.authForm} onSubmit={handleSubmitRegister}>
            <div className={styles.inputGroup}>
              <User className={styles.inputIcon} size={20}/>
              <input type="text" placeholder="Nome completo" required />
            </div>
            <div className={styles.inputGroup}>
              <Envelope className={styles.inputIcon} size={20}/>
              <input type="email" placeholder="E-mail" required />
            </div>
            <div className={styles.inputGroup}>
              <Lock className={styles.inputIcon} size={20}/>
              <input type="password" placeholder="Senha" required />
            </div>
            <div className={styles.inputGroup}>
              <Lock className={styles.inputIcon} size={20}/>
              <input type="password" placeholder="Confirmar senha" required />
            </div>
            <div className={styles.formFooter}>
              <label>
                <input type="checkbox" required />
                <span>Aceito os termos e condições</span>
              </label>
            </div>
            <Button variant="gradient" type="submit">
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
