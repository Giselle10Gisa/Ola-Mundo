import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada/>
        Página realizada através do <a href='https://cursos.alura.com.br/course/React-desenvolvendo-react-router-javaScript' alt='Link para curso da alura' target='_blank' rel="noreferrer" className={styles.link}>curso da Alura</a>
    </footer>
  )
}