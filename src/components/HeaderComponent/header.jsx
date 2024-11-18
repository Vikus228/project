import React from "react";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>Словарь</h1>
                <p>Изучай слова легко и увлекательно!</p>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Главная</a></li>
                    <li><a href="#about">О приложении</a></li>
                    <li><a href="#settings">Настройки</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
