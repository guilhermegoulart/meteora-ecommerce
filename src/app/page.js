import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosApi() {
  const res = await fetch("https://api.npoint.io/de826750b2a0b8e4ffe5/produtos");
  if (!res.ok) {
    throw new Error("Falha ao buscar produtos");
  }

  const produtos = await res.json();

  return produtos;
} 

async function fetchCategoriasApi() {
  const res = await fetch("http://localhost:3000/api/categorias");
  if (!res.ok) {
    throw new Error ("Não foi possivel fazer o fetch de dados")
  }

  const categorias = await res.json();

  return categorias;
} 

export default async function Home() {
  const produtos = await fetchProdutosApi();
  
  const { categorias } = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
