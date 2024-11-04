import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './componant/Task';
import Button from './componant/Button';
import Save from './componant/Save';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
 <div className='w-full'>
    <Task  ></Task>
   </div> 
    
    </>
  )
}

export default App
