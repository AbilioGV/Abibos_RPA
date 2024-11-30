import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import styles from './Sucesso.module.css'

export function Sucesso() {
  return (
    <div className={styles.sucesso}>
      <h1>Pedido realizado com sucesso!</h1>
      <p>Nossa equipe entrará em contato pelo seu email cadastrado em breve para entender melhor suas necessidades e dar continuidade ao processo.</p>
      <Link to="/">
        <Button>Voltar a Tela Inicial</Button>
      </Link>
    </div>
  )
}