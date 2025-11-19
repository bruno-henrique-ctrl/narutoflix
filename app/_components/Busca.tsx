"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { apiFull } from "../_api/api"
import style from "./Busca.module.css"

const Busca = () => {
    const [input, setInput] = useState<string>("")
    const [char, setChar] = useState<string>('')

    useEffect(() => {
        const fetchChars = async () => {
            const response = await apiFull()
            const charData = response.data.filter((char: { name: string }) =>
                char.name.toLowerCase().includes(input.toLowerCase())
            )
            setChar(charData[0]?.id || '')
        }
        fetchChars()
    }, [input])

    return (
        <div className={style.container}>
            <input
                type="text"
                placeholder="Buscar personagem..."
                className={style.searchInput}
                onChange={(e) => setInput(e.target.value)}
            />

            <Link href={`/characters/${char}`} className={style.button}>
                Buscar
            </Link>
        </div>
    )
}

export default Busca;
