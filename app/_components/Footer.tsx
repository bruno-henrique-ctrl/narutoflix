import style from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.content}>

                <div className={style.logoArea}>
                    <h2>Naruto Net</h2>
                    <p>O maior portal Ninja da internet.</p>
                </div>

                <div className={style.links}>
                    <h3>Links úteis</h3>
                    <Link href="/">Início</Link>
                    <Link href="/characters">Personagens</Link>
                    <Link href="/episodios/naruto">Naruto</Link>
                    <Link href="/episodios/boruto">Boruto</Link>
                </div>

                <div className={style.social}>
                    <h3>Social</h3>
                    <a href="#">Instagram</a>
                    <a href="#">GitHub</a>
                    <a href="#">YouTube</a>
                </div>

            </div>

            <div className={style.copy}>
                © {new Date().getFullYear()} Naruto Net — Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
