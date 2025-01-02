import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardList from './components/CardList/CardList';
import List from "./components/list/List";
import Game from "./components/Game/Game";

const words = [
    { "word": "Star", "transcription": "/stɑːr/", "translation": "Звезда", "topic": "Космос" },
    { "word": "Moon", "transcription": "/muːn/", "translation": "Луна", "topic": "Космос" },
    { "word": "Galaxy", "transcription": "/ˈɡæləksi/", "translation": "Галактика", "topic": "Космос" },
];

function App() {
    return (
        <Router> {/* Оборачиваем в Router */}
            <div className="App">
                <Header />
                <div className="main-container">
                    <Routes>
                        <Route path="/card" element={<CardList words={words} />} /> {/* Основной путь с компонентом CardList */}
                        <Route path="/" element={<List words={words} />} /> {/* Путь для компонента List */}
                        <Route path="/game" element={<Game words={words} />} /> {/* Путь для компонента Game */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
