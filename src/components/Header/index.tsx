import styles from "./header.module.css";
import Rocket from "../../assets/rocket.png";
import { CiCirclePlus } from "react-icons/ci";

import { useState } from "react";

interface HeaderProps{
  addPost: (text: string) => void
}

export function Header({ addPost }: HeaderProps) {
  const [ inputValue, setInputValue ] = useState('');
  

  return (
    <header className={styles.page}>
      <div className={styles.title}>
        <img src={Rocket} alt="logo do foguetinho" />
        <h1 className={styles.prefix}>To</h1>
        <h1 className={styles.sufix}>Do</h1>
      </div>

      <div className={styles.InputButton}>
        <input 
        type="text" 
        placeholder="Adicione uma nova tarefa aqui" 
        className={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => { addPost(inputValue); setInputValue(''); }}>
          Criar <CiCirclePlus />
        </button>
      </div>

    </header>
  );
}
