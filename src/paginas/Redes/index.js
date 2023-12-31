import styles from "./Redes.module.css"
import fotoDesenho from "../../assets/perfil_desenho.png"
import { Link } from "react-router-dom"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/GitHub.png"

export default function Redes() {
  return (
    <main>
      <div className={styles.bannerRedes}>
        <div className={styles.oi}>
          <h1 className={styles.titulo}>Minhas redes sociais</h1>
          <p className={styles.paragrafo}>Para me encontrar, aqui estão algumas redes (você provavelmente teve acesso a esta página por uma delas), não apareço com frequência nelas, mas, de qualquer forma, fica como fonte de contato :)</p>
        </div>
        <div className={styles.imagem}>
        <img
            className={styles.meuDesenho}
            src={fotoDesenho}
            alt="Desenho da Gisa"
            />
        </div>
      </div>

      <nav className={styles.redesLinks}>
        <ul>
          <li><img src={linkedin} alt="Logo linkedin" className={styles.linkedinImg}/><Link to="https://www.linkedin.com/in/giselle-machado-lopes-82a045262" target="_blank">Linkedin</Link></li>
          <li><img src={github} alt="Logo github" className={styles.githubImg}/><Link to="https://github.com/" target="_blank">Github</Link></li>
        </ul>
      </nav>
    </main>
  )
}
