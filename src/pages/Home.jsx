import styles from "./Home.module.css";
import "../global.css";
import { Link } from "react-router-dom";

import {
  EnvelopeOpen,
  FilePdf,
  GithubLogo,
  LinkedinLogo,
  MicrosoftExcelLogo,
  Robot,
  Table,
  TreeStructure,
} from "@phosphor-icons/react";
import { Profile } from "../components/Profile";
import { Button } from "../components/Button";

export function Home() {
  return (
    <div>
      <main>
        <div className={styles.mainContent}>
          <div className={styles.content}>
            <div className={styles.firstContent}>
              <div className={styles.leftContent}>
                <h1 id="home">Plataforma de RPA para automação de processos</h1>
                <p>
                  Automatize tarefas repetitivas e complexas com eficiência e
                  precisão. Nossa plataforma de RPA permite transformar
                  processos manuais em fluxos automatizados, garantindo mais
                  agilidade e produtividade para o seu negócio.
                </p>
                <Link to="/pedido">
                <Button variant="gradient">Comece agora</Button>
                </Link>
              </div>
              <div className={styles.contentImg}>
                <img
                  src="robot.png"
                  alt="Graident Ai Robot Vectorart"
                />
              </div>
            </div>
            <p>
              Com uma tecnologia fácil de usar e altamente escalável, nossa
              solução de RPA se adapta às necessidades de qualquer empresa.
              Reduza erros, libere sua equipe para atividades estratégicas e
              experimente uma nova era de automação.
            </p>
            <div>
              <h2 id="services">Serviços</h2>
              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <FilePdf size={48} />
                  <h3>Automação de PDF</h3>
                  <p>
                    Automatize a extração e manipulação de dados de documentos
                    PDF, melhorando a gestão de documentos.
                  </p>
                </div>
                <div className={styles.card}>
                  <Robot size={48} />
                  <h3>Web Scraping</h3>
                  <p>
                    Extraia dados de websites automaticamente para análise,
                    economizando tempo e fornecendo insights valiosos.
                  </p>
                </div>
                <div className={styles.card}>
                  <Table size={48} />
                  <h3>Preenchimento de Formulários</h3>
                  <p>
                    Automatize o preenchimento de formulários online, reduzindo
                    erros de digitação e acelerando processos.
                  </p>
                </div>
                <div className={styles.card}>
                  <MicrosoftExcelLogo size={48} />
                  <h3>Manipulação de Excel</h3>
                  <p>
                    Automatize o preenchimento, análise e atualização de
                    planilhas Excel, facilitando o processamento de grandes
                    volumes de dados.
                  </p>
                </div>
                <div className={styles.card}>
                  <EnvelopeOpen size={48} />
                  <h3>Envio de E-mail em Massa</h3>
                  <p>
                    Automatize o envio de e-mails personalizados para grandes
                    listas de contatos, melhorando a comunicação e o
                    engajamento.
                  </p>
                </div>
                <div className={styles.card}>
                  <TreeStructure size={48} />
                  <h3>Manipulação de Dados</h3>
                  <p>
                    Organize e processe dados de diversas fontes para análises
                    mais precisas, garantindo alta qualidade de dados.
                  </p>
                </div>
              </div>
              <Link to="/pedido">
                <Button variant="gradient">Realizar pedido</Button>
              </Link>
            </div>
            <p>
              A automação de processos com RPA proporciona ganhos em precisão,
              velocidade e controle. Ideal para tarefas como gerenciamento de
              dados, atendimento ao cliente, e integração de sistemas,
              permitindo que sua empresa atinja o próximo nível de eficiência.
            </p>
            <div className={styles.about}>
              <h2 id="about">Quem somos</h2>
              <div className={styles.profileContainer}>
                <div>
                  <Profile image="https://github.com/AbilioGV.png" />
                  <strong>Abilio Gonçalves</strong>
                  <p>Web Developer</p>
                  <div className={styles.icons}>
                    <a href="https://github.com/AbilioGV" target="_blank" rel="noopener noreferrer">
                      <GithubLogo size={32} color="black" />
                    </a>
                    <a href="https://www.linkedin.com/in/abilio-gonçalves-developer/" target="_blank" rel="noopener noreferrer">
                      <LinkedinLogo size={32} color="black" />
                    </a>
                  </div>
                </div>
                <div>
                  <Profile image="https://github.com/LuisTomaz.png" />
                  <strong>Luis Felipe Tomaz</strong>
                  <p>Analista de crédito</p>
                  <div className={styles.icons}>
                    <a href="https://github.com/LuisTomaz" target="_blank" rel="noopener noreferrer">
                      <GithubLogo size={32} color="black" />
                    </a>
                    <a href="https://www.linkedin.com/in/luis-felipe-tomaz-b66b96209/" target="_blank" rel="noopener noreferrer">
                      <LinkedinLogo size={32} color="black" />
                    </a>
                  </div>
                </div>
                <div>
                  <Profile image="wendell.jpeg" />
                  <strong>Wendell Santos</strong>
                  <p>RPA Developer</p>
                  <div className={styles.icons}>
                    <a href="https://github.com/Wen-developer" target="_blank" rel="noopener noreferrer">
                      <GithubLogo size={32} color="black" />
                    </a>
                    <a href="https://www.linkedin.com/in/wendell-santos-alves/" target="_blank" rel="noopener noreferrer">
                      <LinkedinLogo size={32} color="black" />
                    </a>
                  </div>
                </div>
                <div>
                  <Profile image="https://media.licdn.com/dms/image/v2/D4E03AQFSdtCkcd_4Zw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693511199463?e=1735776000&v=beta&t=R8lCxjpjFDvCer1Mi_YIM1u5rGJs0anJBTu4W6PGOiM" />
                  <strong>Matheus Costa</strong>
                  <p>Data Analyst</p>
                  <div className={styles.icons}>
                    <a href="https://github.com/matheuslisboadev" target="_blank" rel="noopener noreferrer">
                      <GithubLogo size={32} color="black" />
                    </a>
                    <a href="https://www.linkedin.com/in/matheuslisboadev/" target="_blank" rel="noopener noreferrer">
                      <LinkedinLogo size={32} color="black" />
                    </a>
                  </div>
                </div>
                <div>
                  <Profile image="https://media.licdn.com/dms/image/v2/D4D03AQFRqAM5HmA88A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678374415923?e=1735776000&v=beta&t=dEogxDCl54QQHLVGFgtO5XAzl_7OfuQZGrNQUJu67wE" />
                  <strong>Igor Felipe Jordão</strong>
                  <p>Web Developer</p>
                  <div className={styles.icons}>
                    <a href="https://github.com/IgorFelipe10" target="_blank" rel="noopener noreferrer">
                      <GithubLogo size={32} color="black" />
                    </a>
                    <a href="https://www.linkedin.com/in/igor-felipe-jordão-4b8549269/" target="_blank" rel="noopener noreferrer">
                      <LinkedinLogo size={32} color="black" />
                    </a>
                  </div>
                </div>
              </div>
              <p>
                Somos um grupo de cinco estudantes do quinto semestre de
                Sistemas para Internet no Senac, unidos pela paixão por
                tecnologia e inovação. Durante nossa jornada acadêmica,
                desenvolvemos habilidades em desenvolvimento web, automação de
                processos e design de interfaces, com foco em soluções que
                atendam às necessidades reais do mercado. Este projeto de RPA é
                o resultado de nossa dedicação e aprendizado, onde aplicamos
                conceitos modernos para criar uma plataforma robusta e eficiente
                para automatização de processos. Nosso objetivo é transformar
                desafios em soluções práticas e acessíveis, contribuindo para um
                futuro mais ágil e digital.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}
