import React from 'react'
import Removetodo from '../Removetodo/Removetodo'
import style from './Todoitem.module.css'

const Todoitem = (props) => {
    const {id, text, removeTask, completeTask, isComplete} = props
    const styleChange = () => {
        if(isComplete === true) 
            return style.complete
    }
    return(
        <li>
            <Removetodo removeTask={removeTask} id={id}/>
            {!isComplete && <input  type='checkbox' onClick={() => completeTask(id)}/>}
            <label className={styleChange()}> {text}</label>
          </li>
    )
}

export default Todoitem