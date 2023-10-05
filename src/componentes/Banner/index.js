import styles from './Banner.module.css'
import circulo from 'assets/circulo.png'
import minhaFoto from 'assets/perfil1.jpg'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Sou a Giselle M. Lopes, mas pode me chamar de Gisa, sou iniciante no mundo da programação e estou estudando para ter uma carreira como full-stack. Aqui irei compartilhar curiosidades sobre mim, algumas coisas que produzo artisticamente e na área de programação, e o que aprendo com o tempo. Agradeço por visitar minha página :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img 
          className={styles.circulo} 
          src={circulo}
          aria-hidden={true}
          alt="Circulo com imagem do céu" 
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto da Gisa"
        />
      </div>
    </div>
  )
}