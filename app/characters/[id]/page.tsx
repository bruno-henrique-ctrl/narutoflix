import { api } from "@/app/_api/api";
import Image from "next/image";
import style from "./page.module.css";
import BtnBack from "@/app/_components/BtnBack";

const CharacterPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const response = await api(id);
    const char = response.data;

    return (
        <main className={`${style.page} page`}>
            <BtnBack url="/characters" />

            <Image
                src={char.images[0].image_url}
                alt={char.name}
                width={300}
                height={300}
                className={style.charImage}
            />

            <div className={style.info}>
                <div className={style.infoBlock}>
                    <h1 className={style.title}>{char.name}</h1>
                    <h2 className={style.sectionTitle}>Informações</h2>
                    <h3>Rank</h3>
                    <p>{char?.rank}</p>

                    {char.mother && <p>Mae - {char.mother.name}</p>}

                    {char.father && <p>Pai - {char.father.name}</p>}
                    {char.village && <p>Aldeia - {char.village.name}</p>}

                    {char.summary && (
                        <>
                            <h2 className={style.sectionTitle}>Resumo</h2>
                            <p>{char.summary}</p>
                        </>)
                    }
                </div>

                {char.jutsus && char.jutsus.length != 0 && (
                    <>
                        <h2 className={style.sectionTitle}>Jutsus</h2>

                        {char.jutsus.map((jutsu) => (
                            <div key={jutsu.name} className={style.jutsuCard}>
                                <h4>{jutsu.name}</h4>
                                <span>Tipo: {jutsu.type}</span>
                                <p>{jutsu.description}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </main>
    );
};

export default CharacterPage;
