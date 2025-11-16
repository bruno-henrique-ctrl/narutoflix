"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./Menu.module.css"
import Image from "next/image"

const Menu = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [isLarge, setIsLarge] = useState<boolean>(false)

    useEffect(() => {
        const checkWidth = () => setIsLarge(window.innerWidth > 600);
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <input
                    type="checkbox"
                    id="menu_toggle"
                    className={styles.check}
                    onChange={() => setShowMenu(!showMenu)}
                />

                <label htmlFor="menu_toggle" className={styles.hamburger_label}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </label>
            </div>

            {(showMenu || isLarge) && (
                <ul className={styles.menuList}>

                    <li className={styles.inicio}>
                        <Link href="/">
                            <span>Início</span>
                            <Image src="/imgs/home.webp" alt="Início" width={100} height={100} />
                        </Link>
                    </li>

                    <li className={styles.chars}>
                        <Link href="/characters">
                            <span>Personagens</span>
                            <Image src="/imgs/chars.webp" alt="Personagens" width={100} height={100} />
                        </Link>
                    </li>

                    <li className={styles.naruto}>
                        <Link href="/episodios/naruto">
                            <span>Naruto</span>
                            <Image src="/imgs/naruto1.webp" alt="Naruto" width={100} height={100} />
                        </Link>
                    </li>

                    <li className={styles.narutoShippuden}>
                        <Link href="/">
                            <span>Naruto Shippuden</span>
                            <Image src="/imgs/narutoS.webp" alt="Naruto Shippuden" width={100} height={100} />
                        </Link>
                    </li>

                    <li className={styles.boruto}>
                        <Link href="/episodios/boruto" className={styles.img}>
                            <span>Boruto</span>
                            <Image src="/imgs/boruto1.webp" alt="Boruto" width={100} height={100} />
                        </Link>
                    </li>

                    <li className={styles.borutoTBV}>
                        <Link href="/">
                            <span>Boruto Two Blue Vortex</span>
                            <Image src="/imgs/borutotbv1.webp" alt="Boruto Two Blue Vortex" width={100} height={100} />
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default Menu
