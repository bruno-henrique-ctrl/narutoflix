import Image from "next/image";
import { api } from "../_api/api";
import Link from "next/link";
import style from "./Characters.module.css";

const FetchCharacters = async ({ id }: { id: string }) => {
    const response = await api(id);
    const imageUrl = response.data.images[0].image_url;

    return (
        <Link
            href={`/characters/${id}`}
            className={style.charCard}
        >
            <div>
                <Image
                    src={imageUrl}
                    alt={response.data.name[0]}
                    width={238}
                    height={428}
                    className={style.charCard}
                    loading="eager"
                    fetchPriority="high"
                    priority
                />
                <p>{response.data.name}</p>
            </div>
        </Link>
    );
};

export default FetchCharacters;
