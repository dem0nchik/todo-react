import React from 'react'
import style from './Todolist.module.css'
import Activelist from './Activelist/Activelist'
import Actions from './Actions/Actions'
import {connect} from 'react-redux'

class Todolist extends React.Component{

  renderList = () => {
    const tasks = this.props.tasks
    let todos  = tasks.map((item) =>
          <label key={item.id}><input type='checkbox'/> {item.text}</label>
    )
    return todos
  }

  render() {
    return (
      <div className={style.todo_wrapper}>
          <Activelist />

          <div className={style.list}>
            {this.renderList()}
          </div>
          
          <Actions />
      </div>
    )
  }
}

export default connect(state => ({
  tasks: state.tasks,
}))(Todolist)
