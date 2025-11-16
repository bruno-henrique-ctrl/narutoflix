import { apiFull } from "../_api/api";
import type { characterType } from "../_types/characters";
import style from './page.module.css';
import FecthCharacters from "../_components/Characters";
import BtnBack from "../_components/BtnBack";

const CharactersPage = async () => {
    const responseCharacters = await apiFull();

    return (
        <main className="page">
            <BtnBack url="/" />

            <div className={style.charGrid}>
                {responseCharacters.data.map((char: characterType) => (
                    <FecthCharacters key={char.id} id={char.id} />
                ))}
            </div>
        </main>
    );
};

export default CharactersPage;
