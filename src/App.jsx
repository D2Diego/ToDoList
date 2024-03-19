import './global.css'
import styles from './app.module.css'

import { Header } from './components/Header/index'
import { Post } from './components/post/index'
import { useState } from 'react'

function App() {
  const [ tasks, setTasks ] = useState([]);

  const addPost = (text) => {
    if(text.trim() !== ''){
      setTasks([...tasks, { id: Date.now(), text: text, isCompleted: false }])
    }
  }

  const removePost = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
  <div className={styles.page}>
      <Header addPost={addPost}/>

      <div className={styles.titleBar}>
        <div className={styles.created}>Tarefa criada <span className={styles.checked}>5</span> </div>
        <div className={styles.completed}>Concluída <span className={styles.checked}>2 de 5</span> </div>
      </div>

      <div className={styles.tasks}>
        { tasks.map(task => (
          <Post key={task.id} text={task.text} onRemove={() => removePost(task.id)}/>
        ))}
      </div>
  </div>
  )
}

export default App
