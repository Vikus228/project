import React from "react";
import styles from "./header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Словарь</h1>
                <p>Изучай слова легко и увлекательно!</p>
                <div>
                    <a href="#signin">SIGN IN</a>
                    <a href="#login">LOG IN</a>
                </div>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#home">Главная</a></li>
                    <li><a href="#about">О приложении</a></li>
                    <li><a href="#training">Тренировка</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
