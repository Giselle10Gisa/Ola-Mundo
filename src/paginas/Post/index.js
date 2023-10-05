import styles from './Post.module.css'
import { Route, Routes, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './Post.css'
import PostModelo from "componentes/PostModelo";
import PostCard from "componentes/PostCard";
import posts from "json/posts.json";
import PaginaPadrao from "componentes/PaginaPadrao";
import NaoEncontrada from "paginas/NaoEncontrada";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id)   
  })

  if (!post) {
    return <NaoEncontrada />
  }

  /*const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 3)*/

  const postsFiltrados = posts.filter((post) => post.id !== Number(parametros.id))

  function shuffle(arr) {
    for (let i = arr.length; i; i--) {
      const j = Math.floor(Math.random() * i);

      // atribuição via destructuring
      [arr[i-1], arr[j]] = [arr[j], arr[i-1]];
    }
  }

  shuffle(postsFiltrados)
  const postsRecomendados = postsFiltrados.slice(0, 3)

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
          <PostModelo
            fotoCapa={`/posts/${post.id}/capa.png`}
            titulo={post.titulo}
          >
            <div className="post-markdown-container">
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
            </div>

            <h2 className={styles.tituloOutrosPosts}>
              Outros posts:
            </h2>

            <ul className={styles.postsRecomendados}>
              {postsRecomendados.map((post) => (
                <li key={post.id}>
                  <PostCard post={post}/>
                </li>
              ))}
            </ul>

          </PostModelo>
        } />
      </Route>
    </Routes>
  )
}