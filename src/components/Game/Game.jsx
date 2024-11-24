import React, { useState } from 'react';
import Card from "../Card/Card";
import PropTypes from 'prop-types';
import styles from "./Game.module.css";

export default function Game({ words }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? words.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.Game}>
            <button onClick={handlePrevious} className={styles.btn}>
                Назад
            </button>
            <Card
                word={words[currentIndex].word}
                transcription={words[currentIndex].transcription}
                translation={words[currentIndex].translation}
                topic={words[currentIndex].topic}
            />
            <button onClick={handleNext} className={styles.btn}>
                Дальше
            </button>
        </div>
    );
}

Game.propTypes = {
    words: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            transcription: PropTypes.string.isRequired,
            translation: PropTypes.string.isRequired,
            topic: PropTypes.string.isRequired,
        })
    ).isRequired,
};
