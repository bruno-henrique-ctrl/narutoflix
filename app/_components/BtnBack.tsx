import Link from "next/link";
import style from "./BtnBack.module.css";

const BtnBack = ({ url }: { url: string }) => {
    return (
        <div className={style.btn}>
            <Link className="btn" href={url}>Voltar</Link>
        </div>
    );
}
export default BtnBack;