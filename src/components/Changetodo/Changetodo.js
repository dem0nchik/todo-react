import React from 'react'
import style from './Changetodo.module.css'

class Changetodo extends React.Component {
  render() {
    return (
      <div className={style.changetodo}>
          <input type="text" value="Купить книгу"/>
          <button>Удалить</button>
          <button>Применить</button>
      </div>
    )
  }
}

export default Changetodo
