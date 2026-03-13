import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './counter'
import Crecket from './crecket'

function App() {

  function handelClick(){
    alert('i am clicked')
  }

  function paramitterHandel(num){
    num=num+5;
    alert( num)
  }
  return (
    <>
     <h1>React Intro Part 2</h1>
    <Crecket></Crecket>
     <Counter></Counter>
     <button onClick={handelClick}>click me</button>

     <button onClick={() => paramitterHandel(10)}>add click</button>
    </>
  )
}

export default App
