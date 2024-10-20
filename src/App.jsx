import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'
import Friend from './friend'


function App() {
  function handleClick(){
    alert('button clicked');
  }
  function handleClick2(){
    alert('button2 clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React core concepts 2</h3>

      <Friends></Friends>


      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>click me1</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() => {alert('third clicked ')}}>click3</button>
     <button onClick={()=> addToFive(3)}>click4</button>
    </>
  )
}

export default App
