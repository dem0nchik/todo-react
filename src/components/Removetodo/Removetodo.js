import React from 'react'
import style from './Removetodo.module.css'

const Removetodo = (props) => {
    const {removeTask} = props
    const id = props.id
    const confirmDelete= () => {
        if(window.confirm("Уверены что хотите удалить?"))
            removeTask(id)
    }
    return(
        <i onClick={() => confirmDelete()} className={style.icon} title='Удалить'>x</i>
    )
}

export default Removetodo