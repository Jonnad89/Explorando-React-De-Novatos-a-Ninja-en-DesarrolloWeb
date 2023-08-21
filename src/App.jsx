
import { useState } from 'react'
import './App.css'
import ParentComponent from './components/ParentComponent'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: "Hacer la compra"},
    {id: 2, text: "Estudar ReactJs"},
    {id: 3, text: "Ejercicio de programación"}
])
  

  return (
    <div>
     {/* <ParentComponent /> */}
     <h1>Lista de Tareas</h1>
     <TaskList tasks={tasks} />
    </div>
  )
}

export default App
