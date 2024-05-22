import { useState } from 'react'
import './App.css'
import Introduce from './components/Introduce'
import Questions from './components/Questions'
import Results from './components/Results'



function App() {
  const[started,setStarted]= useState(false);


  return (
   <div>
 
    <Introduce startTest={()=> setStarted(true)} style={{display: started ? 'none' : 'flex'}}/>
    {started && <Questions/>} 
   
   
   </div>
  )
}

export default App
