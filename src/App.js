import React from 'react'
import './App.css'
import Todolist from './components/Todolist/Todolist'

const App = () => {
    return (
      <div className="App">
        <h2 className="title">To-do list</h2>
        <Todolist />
      </div>
    )
}

export default App;
