import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css"
import fotoSobreMim from "assets/perfil_desenho.png"

export default function SobreMim() {
  return (
      <PostModelo
          fotoCapa={fotoCapa}
          titulo="Sobre mim"
      >
          <h3 className={styles.subtitulo}>
            Olá, eu sou a Gisa!
          </h3>

          <img
            src={fotoSobreMim}
            alt="Foto de perfil versão desenho, feita através do site picrew.me"
            className={styles.fotoSobreMim}
          />

          <p className={styles.paragrafo}>
            Muito prazer, me chamo Giselle Machado Lopes, atualmente, no ano de 2023, possuo 18 anos de idade, comecei a graduação de engenharia da computação EAD neste ano, cursei 1 semestre, mas decidi realizar a transferência para ciência da computação presencialmente, por me identificar com esta forma de ensino e com o curso. No fim do primeiro semestre consegui o estágio de engenharia de software na empresa Poatek, o que está sendo uma ótima experiência, tanto para aprendizado na área como para minha formação como pessoa.
          </p>
          <p className={styles.paragrafo}>
            Venho estudando algumas linguagens e conceitos dentro das áreas de back-end e front-end, já pesquisei  e estudei um pouco de Java, Python, PHP, C, C++, JavaScript, e as ferramentas CSS e HTML, assim como estudei Node.js e no momento estou estudando React.js. Me identifico e tenho mais gosto de utilizar ferramentas na parte de front-end, entretanto, espero conseguir aprender e me desenvolver em back-end, pois tenho interesse enorme em ambas as áreas, sendo assim, almejo chegar no nível full-stack.
          </p>
          <p className={styles.paragrafo}>
            Futuramente em minha carreira, se possível, espero me desenvolver mais para poder trabalhar na área de desenvolvimento de jogos, principalmente para console e pc, seja programando ou lidando com a criação das histórias e design de personagens, pois está é a área que me chama mais atenção hoje em dia no quesito de programação, e espero ter conhecimentos para um dia chegar nestes locais.
          </p>
          <p className={styles.paragrafo}>
            Utilizando como gancho o que foi dito acima, algumas curiosidades. Gosto muito de desenhar, seja em papel, digitalmente, pinturas, tudo o que for manualmente para se construir tenho interesse. Comecei a desenhar digitalmente a pouco mais de um ano, e no momento estou aprendendo a utilizar a ferramenta blender, por conta do meu interesse em jogos.
          </p>
          <p className={styles.paragrafo}>
            Dentre outros hobbys, gosto muito de ler, assistir filmes e comentar sobre o quesito cinematográfico, escutar música, e prático artes marciais, antes também dançava, mas hoje em dia me distanciei um pouco disto. Ah, e obviamente, jogar é um ótimo passatempo.
          </p>
          <p className={styles.paragrafo}>
            Esta foi uma tentativa de resumo de fatos sobre mim, curiosidades e meu momento na área profissional em programação. Agradeço por dedicar seu tempo a olhar um pouco da página que criei graças ao curso da alura, até mais:)
          </p>
      </PostModelo>
  )
}