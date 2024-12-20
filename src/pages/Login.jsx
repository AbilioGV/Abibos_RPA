import { useState } from "react";
import { Button } from "../components/Button";
import styles from "./Login.module.css";
import { Envelope, User, Lock } from "@phosphor-icons/react";
import { useAuth } from "../contexts/auth-context";
import { Link, Navigate, useNavigate } from "react-router-dom";


export function Login() {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  const [activeTab, setActiveTab] = useState("login");

  const [passwordStrength, setPasswordStrength] = useState("");
  const [formError, setFormError] = useState("");

  // Função para verificar a força da senha
  const checkPasswordStrength = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) return "Muito fraca";
    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
      return "Fraca";
    }
    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
      return "Forte";
    }

    return "Boa";
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const strength = checkPasswordStrength(password);
    setPasswordStrength(strength);
    setFormError(""); // Limpa mensagens de erro ao digitar
  };


  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");

    const password = formData.get("password");

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",

      },

    });

    if (!response.ok) {
      return alert("Seus dados de login não batem");
    }

    const data = await response.json();

    setUser(data);

    navigate("/");
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");

    const email = formData.get("email");

    const password = formData.get("password");

    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      return alert("As senhas não coincidem");
    }

    // Verificar se a senha é forte
    if (passwordStrength !== "Forte") {
      return setFormError("A senha deve atender aos requisitos de força");
    }

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      return alert("Seu email já está cadastrado");
    }

    const data = await response.json();

    setUser(data);

    navigate("/");


  };

  if (user) {
    return <Navigate to="/" />
  }



  return (
    <div className={styles.authContainer}>
      <div className={styles.auth}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabBtn} ${activeTab === "login" ? styles.active : ""
              }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "register" ? styles.active : ""
              }`}
            onClick={() => setActiveTab("register")}
          >
            Cadastro
          </button>
        </div>

        <div
          className={`${styles.tabContent} ${activeTab === "login" ? styles.active : ""
            }`}
        >
          <h2>Bem-vindo de volta!</h2>
          <form className={styles.authForm} onSubmit={handleSubmitLogin}>
            <div className={styles.inputGroup}>
              <Envelope className={styles.inputIcon} size={20} />
              <input type="email" name="email" placeholder="E-mail" required />
            </div>
            <div className={styles.inputGroup}>
              <Lock className={styles.inputIcon} size={20} />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                required
              />
            </div>
            <div className={styles.formFooter}>
              <label>
                {/* <input type="checkbox" />
                <span>Lembrar-me</span> */}
              </label>
              <a href="#" className={styles.forgot}>
                {/* Esqueceu a senha? */}
              </a>
            </div>
            <Button variant="gradient" type="submit">
              Entrar
            </Button>
          </form>
        </div>

        <div
          className={`${styles.tabContent} ${activeTab === "register" ? styles.active : ""
            }`}
        >
          <h2>Crie sua conta</h2>
          <form className={styles.authForm} onSubmit={handleSubmitRegister}>
            <div className={styles.inputGroup}>
              <User className={styles.inputIcon} size={20} />
              <input
                type="text"
                name="name"
                placeholder="Nome completo"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <Envelope className={styles.inputIcon} size={20} />
              <input type="email" name="email" placeholder="E-mail" required />
            </div>
            <div className={styles.inputGroup}>
              <Lock className={styles.inputIcon} size={20} />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <Lock className={styles.inputIcon} size={20} />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar senha"
                required
              />
            </div>

            <div className={styles.passwordInfo}>
              <p className={styles.verificar}>
                A senha deve conter ao menos 8 caracteres, uma letra maiúscula, um caractere especial e um número.
              </p>
              <p className={styles.strength}>
                Força da senha: <strong>{passwordStrength}</strong>
              </p>
            </div>
            <div className={styles.formFooter}>
              <label>
                <input type="checkbox" required />
                <Link to="/termos" >
                  <span>Aceito os termos e condições</span>
                </Link>
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
