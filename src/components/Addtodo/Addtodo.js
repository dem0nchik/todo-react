import React from 'react'
import style from './Addtodo.module.css'



const Addtodo = (props) => {
    return (
      <div className={style.addtodo}>
        <input onChange={props.onChange} value={props.value} type="text" placeholder="Введите текст"/>
        <button onClick={props.onClick}>Добавить</button>
      </div>
    )
}

export default Addtodo
