import styles from './post.module.css'

import { FaRegCircle } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from 'react';



// eslint-disable-next-line react/prop-types
export function Post({ text, onRemove }) {
    const [isCompleted, setIsCompleted] = useState(false);

    function toggleCompleted() {
        setIsCompleted(!isCompleted);
    }

    const textStyle = isCompleted ? styles.textCompleted : '';

    return (
        <div className={styles.page} onClick={toggleCompleted}>
            {isCompleted ? <FaCircle className={styles.Icon}/> : <FaRegCircle className={styles.Icon}/>}
            <p className={textStyle}>
                {text}
            </p>
            <FaRegTrashAlt onClick={onRemove}/>
        </div>
    );
}