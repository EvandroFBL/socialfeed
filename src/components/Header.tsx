import styles from "./Header.module.css";
import sfLogo from "../assets/sfLogo.svg";

export function Header(){
    return (
        <header className={styles.header}>
            <img src={sfLogo} />
        </header>
    );
}