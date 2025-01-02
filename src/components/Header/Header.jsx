import React from "react";
import { Link } from 'react-router-dom';
import styles from "./header.module.css";
import { ReactComponent as Logo } from './vocabulary-svgrepo-com.svg';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logoLink}>
                    <Logo />
                </Link>
                <div className={styles.naiming}>
                    <h1>Словарь</h1>
                    <p>Изучай слова легко и увлекательно!</p>
                </div>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><Link to="/">
                        Главная
                    </Link></li>
                    <li><Link to="/game">
                        Игра
                    </Link></li>
                </ul>
            </nav>
            <div className={styles.account}>
                <a href="#signin">SIGN IN</a>
                <a href="#login">LOG IN</a>
            </div>
        </header>
    );
}

export default Header;