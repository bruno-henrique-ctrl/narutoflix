import style from './page.module.css';
import { listaEpisodiosBoruto, listaEpisodiosNaruto } from '@/app/_assets/listaEpisodios';
import Link from 'next/link';

const narutoEpisodios = async ({ params }: { params: { anime: string } }) => {
    const { anime } = await params

    const listas: { [key: string]: typeof listaEpisodiosNaruto } = {
        naruto: listaEpisodiosNaruto,
        boruto: listaEpisodiosBoruto,
        // narutoshippuden: listaEpisodiosBoruto,
        // borutotwobluevortex: listaEpisodiosBoruto,
    }
    const lista = listas[anime]

    return (
        <main className={`${style.container} page`}>
            <div className={style.btn}>
                <Link className="btn" href="/">Voltar</Link>
            </div>
            <h1>{anime}</h1>

            <div className={style.episodios}>
                <h2>Lista de episódios de {anime}.</h2>
                <ul>
                    {lista.map(({ ep }: { ep: string, anime: string, }, index) => <li key={index}><Link href={`/episodios/${anime}/${ep}`}>{anime.toUpperCase()} - Episodio {ep}</Link></li>)}
                </ul>
            </div>
        </main>
    )
}
export default narutoEpisodios;