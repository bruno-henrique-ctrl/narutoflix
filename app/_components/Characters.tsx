import Image from "next/image";
import { api } from "../_api/api";
import Link from "next/link";
import style from "./Characters.module.css";
import { url } from "inspector";

const FetchCharacters = async ({ id }: { id: string }) => {
    const response = await api(id);
    const imageUrl = response.data.images[0].image_url;

    return (
        <Link
            href={`/characters/${id}`}
            className={style.charCard}
        >
            <div>
                <div style={{ backgroundImage: `url('${imageUrl}')` }}>
                    <p>{response.data.name}</p>
                </div>
            </div>
        </Link>
    );
};

export default FetchCharacters;
