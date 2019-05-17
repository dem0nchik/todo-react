import React from 'react'
import Removetodo from '../Removetodo/Removetodo'

const Todoitem = (props) => {
    const {id, text, removeTask, completeTask, isComplete} = props
    return(
        <li>
            <Removetodo removeTask={removeTask} id={id}/>
            {!isComplete && <input type='checkbox' onClick={() => completeTask(id)}/>}
            <label> {text}</label>
          </li>
    )
}

export default Todoitem