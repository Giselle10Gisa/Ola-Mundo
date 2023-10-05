# Olá, mundo! ![Favicon página](./public/favicon-16x16.ico)

      Este projeto foi desenvolvido junto ao curso de React da Alura https://cursos.alura.com.br/course/React-desenvolvendo-react-router-javaScript, toda a base, ideia e composição. Teve-se o andamento pois a proposta me gerou interesse, então, tomei a decisão de continuá-lo para uso como ferramenta de estudos, pois pode me auxiliar a melhorar minhas habilidades no momento de fazer o código, já que, como iniciei meus estudos em programação neste ano, ainda não me sinto confiante para escrever linhas de código de forma mais fluida, por isso, ao melhorar esse projeto, será um exercício para relembrar o que aprendi e realizar algo de forma individual com meu próprio conhecimento construído até aqui.
	    O projeto ‘Olá-mundo’ é uma página de apresentação, onde informações sobre a pessoa em questão serão mostradas, contendo cards com curiosidades e etc, foi desenvolvido em React e será compartilhado em redes como Linkedin e GitHub, para divulgar um pouco da minha evolução até aqui, algumas das imagens utilizadas no projeto são de minha própria autoria ou foram retiradas da rede Pinterest.

***
### Pastas:
- node_modules
- public 
  -  posts
- 	src
	-  assets
	- componentes
	   - Banner
	   - BotaoPrincipal
	   - Menu
	   - MenuLink
	   - PaginaPadrao
	   - PostCard
	   - PostModelo
	   - Rodape
	   - ScrollToTop
     - json
    - paginas
	   - inicio
	   - NaoEncontrada
	   - Post
	   - SobreMim

### Tipos de arquivos:

* .png
* .jpg
* .svg
* .ico
* .json
* .css
* .js
* .gitignore
* .md
***

* .gitignore -> menciona outros arquivos/pastas do projeto que serão ignoradas ao criar um repositório no github, como exemplo, node_modules é uma pasta que possui diversas subpastas de configurações do node, logo, não tem uma necessidade de aparecer nos arquivos do projeto ao ser postado.

* desktop.ini -> específica como o sistema de arquivos de uma pasta será visualizado.

* jsconfig.json / package-lock.json / package.json -> são configurações, regras e especificações criadas ao se instalar e criar um projeto react, contendo também arquivos json para instalações feitas de libs no projeto. É utilizado pois o projeto contém JavaScript, e o Json é uma forma de notação de objetos JavaScript.

* README.md -> um arquivo readme no formato markdown padrão que surge ao se criar uma aplicação react.
***
#### node_modules:
      Se integram ao código no momento de criação do arquivo react, por usarmos o comando npx create-react-app <nome arquivo>, do qual npx vai se referir ao node package execute, vindo do node e então instalando pastas de instalação global com diversas libs para serem utilizadas durante o código.
***
#### public:
* favicon-16x16.ico -> ícone escolhido para ficar como identificador da aba da página.

* index.html -> html da página, comentários e linhas de código padrões do react já foram retiradas, a última modificação feita foi mudar a linha <html lang> para pt-br. 

* manifest.json -> é um shortcut, descreve as aplicações da página. Apresenta um short_name, name, icons, src, sizes, type, start_url, display, theme_color, background_color, cada informação referente a página padrão react criada.

* pagina1 + pagina2 -> screenshots da página.

* perfil_tamanho_alterado -> foto de perfil em desenho, esta imagem irá aparecer novamente mais a frente, entretanto, terá um tamanho diferente.

* robots.txt -> diz para bots de browsers quais páginas referentes ao projeto web criado que podem ser movidas, acessadas, etc.

* #### posts:
  - pasta 1 -> capa.png + diagramaDeCasoDeUso.jpg + javascript.jpg + react.jpg
  - pasta 2 -> capa.png
  - pasta 3 -> capa.png + exemplo_blender.jpg
  - pasta 4 -> capa.png
  - pasta 5 -> capa.png + blenderRoom.jpg + desenho1.png + desenho2.jpg + pintura.png + quartos.jpg
  - pasta 6 -> capa.png + dbh.jpg + lifeisstrange.jpg + tlou.jpg + toTheMoon.jpg + ud.jpg + undertale.jpg
  - pasta 7 -> capa.png + avds.jpg + cinemaparadiso.jpg + close.jpg + dps.jpg + lms.jpg + oghb.jpg
  - pasta 8 -> capa.png
  - pasta 9 -> capa.png + shad.png
***
#### src:
* index.js -> importa o React, RactDOM, index.css, AppRoutes. Tem uma const que usa o ReactDOM e cria uma root conforme o id de um elemento no arquivo html. Coloca um ReactContext, o <AppRoutes/> que é o arquivo que possui as rotas, dentro de um <React.StrictMode>, que identifica bugs e unsafe situations dentro do código.

* index.css -> está guardando os estilos da página como um padrão, onde tem também armazenado cores e fontes para serem chamadas em variáveis de forma mais fácil depois, simplificando o código e mantendo as cores corretamente.

* routes.js -> importa  BrowserRouter, Route e Routes de react-router-dom para conseguir fazer os caminhos das rotas. Também está importando Inicio, SobreMim, Redes, Menu, Rodape, PaginaPadrao, Post, NaoEncontrada, ScrollToTop, que são outros arquivos do projeto que ligam a outras funcionalidades da página. O nome da função que agrupa as rotas é AppRoutes, que está em index.js. ScrollToTop e Menu estão antes das rotas, e cada rota tem seu determinado path e element.

* #### assets:
  Contém as imagens que são utilizadas no site, tanto para backgrounds quanto para fotos de perfil, são do tipo .png, .jpg e .svg.
  
  - circulo.png
  - erro_404.png
  - GitHub.png
  - linkedin.png
  - perfil_desenho.png
  - sobre_mim_capa.png
  - perfil1.jpg
  - marca_registrada.svg

* #### componentes:
  - *Banner* -> Aqui estão as informações da parte superior do site, onde aparecem a foto de perfil e o texto introdutório, não contando com a header que contém os links de ‘Início’, ‘Sobre mim’ e ‘Redes’. 
    
    - **index.js**-> imports de styles, circulo(img), minhaFoto(img). Uma function com nome Banner retornando três divs. A primeira engloba as outras duas, a segunda contém os textos do título e do parágrafo de apresentação, a terceira div tem as imagens do círculo, e a minhaFoto.
    - **Banner.module.css**-> os estilos desta parte da página são feitos aqui, para as divs, título, parágrafo e imagens.

  - *BotaoPrincipal* -> os arquivos desta pasta são relativos a funcionalidade do botão ‘Ler’, que está em cada caixa de cada post, para que sejam abertos e direcionados para seus devidos conteúdos.
    - **index.js**-> importa apenas os styles. Sua function tem o nome BotaoPrincipal, e seu parâmetro desestrutura ‘children’ e ‘tamanho’. Retorna uma tag button, cujo tem seu className feito com template strings onde estão styles.botaoPrincipal e styles[tamanho]. A tag contém um objeto children.
    - **BotaoPrincipal.module.css**-> estilos do botão principal tanto para seu estado estático quanto para quando acontecer a ação de hover.

  - *Menu* ->  a header de ‘Início’ e ‘Sobre mim’ foi criada aqui.
    - **index.js**-> imports de styles e MenuLink(outra pasta dentro de componentes). Sua function com nome Menu retorna uma header, que tem um nav, por conta de ser referente a navegação que os links permitirão serem feitas. A três tags que armazena referentes a MenuLink possuem um path e um texto referente a como se chamará esse link, que no caso são ‘Início’, ‘Sobre mim’ e ‘Redes’.
    - **Menu.module.css**-> style de nav, que também é estilizado para ter responsividade.

  - *MenuLink*-> aqui que são codificados os caminhos que foram descritos na pasta anterior, os que estão no header, e também caso precisem de mais links de navegação poderão ser feitos conforme a lógica destes arquivos.
    - **index.js**-> imports de Link e useLocation vindos de react-router-dom, e styles. A function MenuLink está fazendo uma desestruturação com children e to. Antes do return, foi criada uma const localizacao  que utiliza o useLocation, já como retorno, a tag Link é usada contento className com template strings, nisso temos a const localizacao sendo chamada para se referir ao pathname, que, caso seja idêntico a ‘to’, terá o styles.linkDestacado, caso contrário, será uma string vazia. Fora da template string e do className, temos o to={to}, que se refere ao que foi escrito em ‘to’ dentro do arquivo index.js de Menu para cada tag MenuLink. A tag Link contém um objeto children.
    - **MenuLink.module.css**-> estilos de link antes e após ser acessado.

  - *PaginaPadra*-> criada para conter as informações de componentes e depois ser armazenada em routes, criando assim um sistema de hierarquia de como a página funciona.
    - **index.js**-> imports de Outlet de react-router-dom. A function PaginaPadrao retorna um main que contém a tag de auto fechamento Outlet.

  - *PostCard*->  a estrutura de cada card de post fica aqui, fazendo a montagem em ordem por imagem, título e o botão para acessar e realizar a leitura.
    - **index.js**-> imports de Link do react-router-dom, styles e BotaoPrincipal. Em sua function PostCard, faz uma desestruturação com post, tendo um return da tag Link que tem um ‘to’ com template string, esta tag engloba uma div, que representa a estrutura do card do post. Dentro dessa div teremos primeiramente um img, onde o src é uma template string que tem um caminho conforme o id do post, id das imagens, após a img temos um h2 armazenando um post.titulo, e cada título e informação deste card estão no arquivo posts.json. Por último,  uma tag de BotaoPrincipal que tem o texto ‘Ler’, que representa o botão.
    - **Post.module.css**-> styles em div, img e h2, a div tendo um style a mais para as situações de hover, e um estilo a mais para todos para situações de tamanhos diferentes de tela, mostrando a responsividade e as mudanças que alguns elementos vão sofrer por conta disto.

  - *PostModelo*-> a estrutura de cada post está armazenada aqui, para demonstrar como deve ser criado e o que um post deve conter.
    - **index.js**-> import de styles. A function PostModelo faz a desestruturação de children, fotoCapa e titulo. No seu return armazena um article, do qual engloba duas divs e um h2, a primeira div é referente a foto de fundo do post, o h2 é o título do post, e a segunda div se refere ao conteúdo do post.
    - **PostModelo.module.css**-> estilos em article, div e h2. Também possui linhas para configurar a responsividade e as modificações que isso causa em partes da página.

  - *Rodape*-> configuração do rodapé da página.
    - **index.js**-> import de styles e ReactComponent as MarcaRegistrada(um arquivo .svg). A function Rodape retorna um footer, que organiza em ordem o .svg MarcaRegistrada e um texto contendo um link.
    - **Rodape.module.css**-> estilo para o footer e para o link acrescentado através de uma tag ‘a’.

  - *ScrollToTop*-> configurações para que ao entrar em um post, ou em qualquer parte do site, o scroll da tela esteja no topo, ou seja, entraremos no início da página, não no final dela.
    - **index.js**-> imports de useEffect e useLocation. A function ScrollToTop tem uma const de pathname que recebe um useLocation, e o useEffect tem dentro de seus parâmetros uma arrow function com parâmetro vazio e para cada um recebe uma window.scrollTo de 0 em ambos parâmetros, direcionando a pathname. No final, retorna null.

* #### json: 
  O arquivo posts.json está aqui, do qual armazena as informações de id, titulo e texto de cada card(post) da página.

* #### paginas:
  Aqui estão as pastas com arquivos de configuração das páginas de início, página não encontrada, post que aparecem como recomendação e sobre mim, utilizando muitas vezes tags para mencionar outros arquivos referentes a outras páginas.

  - *inicio* -> configurações da página de início, a primeira que aparece ao entrar no site.
    - **index.js**-> imports de styles, posts, PostCard e Banner. A function Inicio retorna uma main contendo uma tag de auto fechamento de Banner e uma lista (ul), que contém um map de posts que a cada post retorna uma lista (li) contendo uma tag de auto fechamento de PostCard. Ou seja, a configuração de como os cards dos posts irão aparecer na página inicial.
    - **Inicio.module.css**->  estilos para ul e configurações para responsividade.

  - *NaoEncontrada* -> configurações para a página que aparece caso seja utilizado um path para uma página que não foi criada.
    - **index.js**-> imports de BotaoPrincipal, styles, erro404(img) e useNavigate. A function NaoEncontrada contém uma const navegar que recebe o useNavigate, já o seu return tem quatro divs, um h1 e dois ps. A primeira div armazena tudo que está dentro de return, menos  a última div que é colocada depois desta, que é apenas para criar um espaço em branco, a primeira coisa que aparece na div escrita anteriormente é um span contendo o texto “404”, em seguida um h1 com “Ops! Página não encontrada”, um p com “Tem certeza de que era isso que você estava procurando?”, outro p com “Aguarde uns instantes e recarregue a página, ou volte para a página inicial.”, a div colocada em seguida possui um onClick com um path “/”, para, ao ser clicado através da tag BotaoPrincipal com o texto “Voltar”, seja redirecionado à página inicial, que tem o caminho vazio, mais uma div contendo uma img e por último uma div vazia, para criar um espaçamento antes do rodapé.
    - **NaoEncontrada.module.css**-> todas as tags tem estilização, e também possuem configurações de estilização para responsividade da página em dois tamanhos diferentes.

  - *Post* -> armazena configurações padrão dos posts e também configurações para aparição de recomendação de outros posts no final das páginas.
    - **index.js**-> imports de styles, Route, Routes, useParams, ReactMarkdown, Post.css, PostModelo, PostCard, posts, PaginaPadrao, NaoEncontrada. A function Post antes de ter o return armazena três constantes. A primeira const é de parametros que recebe useParams, a segunda é de post, onde é realizado um .find, para cada post (como parâmetro de uma arrow function) será retornado um id de post que seja idêntico a Number que tem como parâmetro o id de parametros, se não houver post será retornado uma tag de NaoEncontrada, a terceira const é de postsFiltrados, que terá um posts.filter, que, para cada post, irá retornar um post.id idêntico ao parametros.id de Number, depois desta const temos uma function chamada shuffle, que recebe um parâmetro arr, dentro da function temos um for de let i = arr.length, i e i–, dentro de for temos uma const j que recebe Math.floor contendo um Marh.random multiplicando i, e após isso uma destructuring de [arr[i-1], arr[j]] = [arr[j], arr[i-1]], com o fechamento da function o shuffle recebe entre parênteses postsFiltrados, e uma const postsRecomendados é criada recebendo postsFiltrados.slice(0, 3), que demonstra a quantidade de cards recomendados que irá aparecer ao final de cada página. Então, no return, teremos as rotas, primeiramente o Routes englobando todas as tags, em seguida um Route de PaginaPadrao englobando o restante das informações, mais um Route é colocado com o element de PostModelo que será configurado. O PostModelo tem configurações de  fotoCapa e titulo, que são configurados conforme o id do post, a tag irá conter uma div com um ReactMarkdown de post.texto, um h2 com o texto “Outros posts:”, e uma ul com o map de postsRecomendados, que retorna para cada post uma li contendo um PostCard, ou seja, retorna a organização dos cards similar a organização que se encontra na página incial.
    - **Post.css**-> estilos da div que contém o ReactMarkdown, junto de configurações para responsividade.
    - **Post.module.css**-> estilos de h2 e de ul.

  - *Redes*-> Local para divulgação de algumas redes sociais.
    - **index.js**-> tem imports para styles, fotoDesenho(img), Link, linkedin(img), insta(img), github(img). A function Redes retorna uma main com uma div contento duas div’s, a primeira delas com um h1 e um p para introdução sobre a página, a segunda div contém uma img com fotoDesenho que foi importado no início do código. Além disso, a function contém uma tag nav com uma ul e três li’s, cada uma para uma respectiva rede social, contendo uma img, o nome da rede e um link direcionando para ela.
    - **Redes.module.css**-> Todas as tags tem sua estilização e configuração para responsividade

  - *SobreMim*-> configurações da página Sobre Mim.
    - **index.js**-> imports de PostModelo, fotoCapa, styles e fotoSobreMim. A function SobreMim retorna uma tag de PostModelo com configurações de fotoCapa e titulo. Esta tag contém um h3, uma img com o src de uma imagem importada no início do arquivo, e seis tags p com o texto da página.
    - **SobreMim.module.css** -> estilos de img, h3 e dos parágrafos, além de configurações para responsividade.



