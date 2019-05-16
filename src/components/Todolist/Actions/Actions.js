import React, {useState} from 'react'
import style from './Actions.module.css'
import Addtodo from '../../Addtodo/Addtodo'
import {addTask} from '../../../actions/actionCreator'
import {connect} from 'react-redux'

const Actions = (props) => {
  const [opacity, setOpacity] = useState(false)
  const [taskText, setTaskText] = useState('')

  const handleInputChange = (e) => setTaskText(e.currentTarget.value)
  
  const addTodo = () => {
    if(taskText.length > 3) {
      const {addTask} = props
      addTask(new Date().getTime(), taskText)
      setTaskText('')
    }
  }
  return(
    <div>
      <div className={style.action}>
        <button onClick={() => setOpacity(!opacity)}>New Todo</button>
        <button>Edit</button>
      </div>

      { opacity && <Addtodo onChange={handleInputChange} onClick={addTodo} value={taskText} /> }
    </div>
  )
}

export default connect(state => ({
  tasks: state.tasks
}), {addTask})(Actions)
