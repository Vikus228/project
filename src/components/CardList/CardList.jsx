import React from "react";
import Card from "../Card/Card"
import PropTypes from 'prop-types';

export default function CardList({ words }) {
    return(
        <>
            {words.map((item, index) => {
                    return ( 
                        <Card
                                key={index}
                                word={item.word}
                                transcription={item.transcription}
                                translation={item.translation}
                                topic={item.topic}
                        />
                    )
                })}
        </>
    );
};

CardList.propTypes = {
    words: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            transcription: PropTypes.string.isRequired,
            translation: PropTypes.string.isRequired,
            topic: PropTypes.string.isRequired,
        })
    ).isRequired,
};
