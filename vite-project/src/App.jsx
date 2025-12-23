import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import MyComponent from './myc'
import Example from './obj'
import Hw from './hw'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
     <Hw/>
  </div>

=======
import MyComponent from './MyComponent' 
import Cards from './Cards'
import Header from './Header'

function App() {
   const[tasks,Usetasks]=useState([
        { id: 1, title: 'Мой проект', description: 'Описание проекта' },
        { id: 2, title: 'Учеба', description: 'Домашние задания' },
        { id:3, title: 'Спорт', description: 'Тренировки' },
        { id:4, title: 'Книга', description: 'Читать' },
        { id:5, title: 'Программирование', description: 'Учиться' },    
    ])

  return (
    <div>
    <Header/>
  <Cards tasks={tasks} />

    </div>
>>>>>>> 6db5db5 (day15)
  )
}

export default App
