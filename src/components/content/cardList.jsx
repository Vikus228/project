import React from "react";
import Card from "../CardComponent/card";
import PropTypes from 'prop-types';

function CardList({ words }) {
    return(
        <>
            {words.map((item, index) => {
                    return ( 
                        <Card
                                key={index}
                                word={item.word}
                                transcription={item.transcription}
                                translation={item.translation}
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
        })
    ).isRequired,
};

export default CardList;