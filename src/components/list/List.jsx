import React from "react";
import Main from "../homePage/Main";
import PropTypes from "prop-types";
import styles from "./list.module.css";

export default function List({ words, onUpdate }) {
    const handleSave = (index, updatedData) => {
        const updatedWords = [...words];
        updatedWords[index] = updatedData;
        onUpdate(updatedWords);
    };

    return (
        <div className={styles.tableWrapper}>
            <h2 className={styles.tableHeader}>Список слов</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Слово</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                    <th>Тема</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {words.map((item, index) => (
                    <Main
                        key={index}
                        word={item.word}
                        transcription={item.transcription}
                        translation={item.translation}
                        topic={item.topic}
                        onSave={(updatedData) => handleSave(index, updatedData)}
                        onCancel={() => console.log("Отмена изменений")}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}

List.propTypes = {
    words: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            transcription: PropTypes.string.isRequired,
            translation: PropTypes.string.isRequired,
            topic: PropTypes.string.isRequired,
        })
    ).isRequired,
    onUpdate: PropTypes.func.isRequired,
};
