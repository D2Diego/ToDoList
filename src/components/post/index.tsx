import styles from './post.module.css'

import { FaRegCircle } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

interface PostProps{
    text: string;
    onRemove: () => void;
    toggleCompleted: () => void;
    isCompleted: boolean;
}


export function Post({ text, onRemove, toggleCompleted, isCompleted }: PostProps) {


    const textStyle = isCompleted ? styles.textCompleted : '';

    return (
        <div className={styles.page}>
            <div onClick={toggleCompleted}>
              {isCompleted ? <FaCircle className={styles.Icon}/> : <FaRegCircle className={styles.Icon}/>}
            </div>
            <p className={textStyle}>
                {text}
            </p>
            <FaRegTrashAlt onClick={(event) => { event.stopPropagation(); onRemove(); }}/>
        </div>
    );
}