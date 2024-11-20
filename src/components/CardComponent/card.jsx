import PropTypes from 'prop-types';
import React from 'react';
import styles from './card.module.css'

export default function Card ({ word, transcription, translation, topic}) {
    return(
        <div className={styles.card}>
            <h4 className={styles.word}>{word}</h4>
            <p className={styles.wordOptions}>{transcription}</p>
            <p className={styles.wordOptions}>{translation}</p>
            <p className={styles.topic}>{topic}</p>
        </div>
    );
}

Card.propTypes = {
    word: PropTypes.string.isRequired,
    transcription: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
};