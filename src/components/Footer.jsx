import { LinkedinLogo, GithubLogo, EnvelopeOpen } from "@phosphor-icons/react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>Empresa</h3>
          <a href="#about">Sobre nós</a>
          <a href="#services">Serviços</a>
          <a href="#">Carreira</a>
          <a href="#">Contato</a>
        </div>
        
        <div className={styles.footerColumn}>
          <h3>Soluções</h3>
          <a href="#">Automação de PDF</a>
          <a href="#">Web Scraping</a>
          <a href="#">Manipulação de Excel</a>
          <a href="#">Processamento de Dados</a>
        </div>
        
        <div className={styles.footerColumn}>
          <h3>Recursos</h3>
          <a href="#">Documentação</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
          <a href="#">Suporte</a>
        </div>
        
        <div className={styles.footerColumn}>
          <h3>Contato</h3>
          <p>contato@abibos.com</p>
          <p>+55 (11) 9999-9999</p>
          <p>São Paulo, SP</p>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Abibos. Todos os direitos reservados.</p>
        <div className={styles.socialLinks}>
          <a href="#"><LinkedinLogo size={24} /></a>
          <a href="https://github.com/AbilioGV/Abibos_RPA/"><GithubLogo size={24} /></a>
          <a href="#"><EnvelopeOpen size={24} /></a>
        </div>
      </div>
    </footer>
  );
}

