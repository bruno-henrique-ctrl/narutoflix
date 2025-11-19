import Link from "next/link";
import FecthCharacters from "./_components/Characters";
import style from "./page.module.css";
import Continuar from "./_components/Continuar";

const Home = () => {
  return (
    <main className="page">
      <section className={style.hero}>
        <h1>Entre no Mundo Ninja</h1>
        <p>Explore jutsus, personagens e episódios de toda saga Naruto.</p>
        <div>
          <Continuar />
          <Link className="btn" href="/episodios/naruto">Começar</Link>
        </div>
      </section>

      <section className={style.characters}>
        <h2>Personagens</h2>

        <div>
          <FecthCharacters id="1" />
          <FecthCharacters id="5" />
          <FecthCharacters id="16" />
        </div>

        <div>
          <Link className={`${style.all} btn`} href="/characters">Ver todos</Link>
        </div>
      </section>
    </main>
  );
}

export default Home
