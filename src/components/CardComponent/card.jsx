import PropTypes from 'prop-types';
import React from 'react';

export default function Card ({ word, transcription, translation}) {
    return(
        <div className="cardWord">
            <h4 className="word">{word}</h4>
            <p className="transcription">{transcription}</p>
            <p className="translation">{translation}</p>
        </div>
    );
}

Card.propTypes = {
    word: PropTypes.string.isRequired,
    transcription: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
};