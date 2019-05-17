import React from 'react'
import style from './Todolist.module.css'
import Activelist from '../Activelist/Activelist'
import Newtodo from '../Newtodo/Newtodo'
import {connect} from 'react-redux'
import {removeTask, addTask, completeTask, changeList} from '../../actions/actionCreator'
import Todoitem from '../Todoitem/Todoitem'

class Todolist extends React.Component{

  renderList = () => {
    const tasks = this.props.tasks
    const list = this.props.list
    const {removeTask,completeTask}= this.props
    
    let todos = null
    if(list.currentList === 'Archive') {
      todos = tasks.map(({id, text, isComplete}) => {
          if(isComplete)
            return  <Todoitem key={id} completeTask={completeTask} removeTask={removeTask} id={id} text={text} isComplete={isComplete} />
        }
      )
    } else {
      todos = tasks.map(({id, text, isComplete}) => {
        if(!isComplete)
          return  <Todoitem key={id} completeTask={completeTask} removeTask={removeTask} id={id} text={text} isComplete={isComplete} />
      }
    )
    }
    
    return todos
  }

  render() {
    const {addTask, changeList} = this.props

    return (
      <div className={style.todo_wrapper}>
          <Activelist changeList={changeList} />
          <div className={style.list}>
            {this.renderList()}
          </div>
          
          <Newtodo addTask={addTask} />
      </div>
    )
  }
}

export default connect(state => ({
  tasks: state.tasks,
  list: state.list
}), {removeTask, addTask, completeTask, changeList})(Todolist)
