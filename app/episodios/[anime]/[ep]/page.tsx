import { listaEpisodiosNaruto, listaEpisodiosBoruto } from "@/app/_assets/listaEpisodios";
import FecthEpisodios from "@/app/_components/Episodios";
import style from "./page.module.css";
import BtnBack from "@/app/_components/BtnBack";

const pageEpisodios = async ({ params }: { params: { anime: string, ep: string } }) => {
    const { anime, ep } = await params

    const listas: { [key: string]: typeof listaEpisodiosNaruto } = {
        naruto: listaEpisodiosNaruto,
        boruto: listaEpisodiosBoruto,
        // narutoshippuden: listaEpisodiosBoruto,
        // borutotwobluevortex: listaEpisodiosBoruto,
    }
    const lista = listas[anime]
    const episodio = lista.find(e => e.ep === ep);

    return (
        <main className={`${style.page} page`}>
            <BtnBack url={`/episodios/${anime}`} />

            {episodio && (
                <div className={style.videoWrapper}>
                    <FecthEpisodios ep={episodio.ep} anime={episodio.anime} />
                </div>
            )}

            <h1 className={style.title}>{episodio?.anime} - Episodio {episodio?.ep}</h1>
            <span className={style.arco}>{episodio?.arco}</span>
        </main>
    )
}

export default pageEpisodios