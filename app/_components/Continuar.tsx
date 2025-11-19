"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Save = ({ anime, ep }: { anime?: string; ep?: string }) => {
    useEffect(() => {
        if (anime && ep) {
            const dados = { anime, ep };
            localStorage.setItem("continuar", JSON.stringify(dados));
        }
    }, [anime, ep]);

    return null;
};

const Continuar = () => {
    const [continuar] = useState<{ anime: string; ep: string } | null>(() => {
        if (typeof window !== "undefined") {
            const salvo = localStorage.getItem("continuar");
            return salvo ? JSON.parse(salvo) : null;
        }
        return null;
    });

    return continuar ? (
        <Link
            className="btn"
            href={`/episodios/${continuar.anime.toLowerCase()}/${continuar.ep}`}
        >
            Continuar
        </Link>
    ) : null;
};

export { Save };
export default Continuar;
