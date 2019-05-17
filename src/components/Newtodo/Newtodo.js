import React, {useState} from 'react'
import style from './Newtodo.module.css'
import Addtodo from '../Addtodo/Addtodo'

const Newtodo = (props) => {
  const [opacity, setOpacity] = useState(false)
  const [taskText, setTaskText] = useState('')

  const handleInputChange = (e) => setTaskText(e.currentTarget.value)
  
  const addTodo = () => {
    if(taskText.length > 2) {
      const addTask = props.addTask
      addTask(new Date().getTime(), taskText, false)
      setTaskText('')
    }
  }
  return(
    <React.Fragment>
      <div className={style.action}>
        <button onClick={() => setOpacity(!opacity)}>New Todo</button>
      </div>

      { opacity && <Addtodo onChange={handleInputChange} onClick={addTodo} value={taskText} /> }
    </React.Fragment>
  )
}

export default Newtodo
