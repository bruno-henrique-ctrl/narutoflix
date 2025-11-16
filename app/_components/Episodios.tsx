import Link from "next/link";
import { listaEpisodiosNaruto } from "../_assets/listaEpisodios";
import style from "./Episodios.module.css";

const FecthEpisodios = ({ ep, anime }: { ep: string, anime: string }) => {
    const episodio = listaEpisodiosNaruto.find(
        e => e.ep === ep && e.anime.toLowerCase() === anime.toLowerCase()
    );

    return (
        <div className={style.wrapper}>
            <div className={style.playerWrapper}>
                <iframe
                    src={episodio?.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>

            <div className={style.navButtons}>
                <Link className="btn" href={`/episodios/${anime.toLowerCase()}/${ep > "1" ? Number(ep) - 1 : "1"}`}>
                    Anterior
                </Link>

                <Link className="btn" href={`/episodios/${anime.toLowerCase()}/${Number(ep) < listaEpisodiosNaruto.length ? Number(ep) + 1 : listaEpisodiosNaruto.length}`}>
                    Próximo
                </Link>
            </div>
        </div>
    )
}

export default FecthEpisodios;
