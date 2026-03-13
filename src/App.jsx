import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import Counter from './counter';
import Crecket from './crecket';
import Users from './apiUsers';
import Friends from './friends';

const fetchFriend= async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {

  const friends=fetchFriend();

  const fetchUser=fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  

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

    <Suspense fallback={<h2>Loding....</h2>}>
    <Friends friends={friends}></Friends>
    </Suspense>

     <Suspense fallback={<h2>Loding.....</h2>}>
      <Users fetchUser={fetchUser}></Users>
     </Suspense>
    <Crecket></Crecket>
     <Counter></Counter>
     <button onClick={handelClick}>click me</button>

     <button onClick={() => paramitterHandel(10)}>add click</button>
    </>
  )
}

export default App
