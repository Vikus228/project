import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./main.module.css";

const Main = ({ word, transcription, translation, topic, onSave, onCancel }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ word, transcription, translation, topic });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData({ word, transcription, translation, topic });
        onCancel();
        setIsEditing(false);
    };

    return (
        <tr className={styles.tableRow}>
            {isEditing ? (
                <>
                    <td className={styles.wordList}>
                        <input
                            type="text"
                            name="word"
                            value={formData.word}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </td>
                    <td className={styles.wordList}>
                        <input
                            type="text"
                            name="transcription"
                            value={formData.transcription}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </td>
                    <td className={styles.wordList}>
                        <input
                            type="text"
                            name="translation"
                            value={formData.translation}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </td>
                    <td className={styles.wordList}>
                        <input
                            type="text"
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </td>
                    <td className={styles.buttons}>
                        <button className={styles.btn} onClick={handleSave}>Сохранить</button>
                        <button className={styles.btn} onClick={handleCancel}>Отмена</button>
                    </td>
                </>
            ) : (
                <>
                    <td className={styles.wordList}>{word}</td>
                    <td className={styles.wordList}>{transcription}</td>
                    <td className={styles.wordList}>{translation}</td>
                    <td className={styles.wordList}>{topic}</td>
                    <td className={styles.buttons}>
                        <button className={styles.btn} onClick={() => setIsEditing(true)}>Редактировать</button>
                        <button className={styles.btn}>Удалить</button>
                    </td>
                </>
            )}
        </tr>
    );
};

Main.propTypes = {
    word: PropTypes.string.isRequired,
    transcription: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default Main;
