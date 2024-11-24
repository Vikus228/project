import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './card.module.css';

export default function Card({ word, transcription, translation, topic }) {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={styles.card}>
            <h2 className={styles.word}>{word}</h2>
            <p className={styles.wordOptions}>{transcription}</p>
            <p className={styles.topic}>{topic}</p>
            {isShow ? (
                <>
                    <p className={styles.wordOptions}>{translation}</p>
                    <button onClick={() => setIsShow(false)} className={styles.btn}>
                        Скрыть перевод
                    </button>
                </>
            ) : (
                <>
                    <button onClick={() => setIsShow(true)} className={styles.btn}>
                        Показать перевод
                    </button>
                </>
            )}
        </div>
    );
}

Card.propTypes = {
    word: PropTypes.string.isRequired,
    transcription: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
};