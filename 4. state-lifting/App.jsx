import React from 'react'
import Card from './components/Card'
import { useState } from 'react'

function App() {
  // ? Child to Parent data passing 
  //! create state
  //! manage state
  //! change state
  //! sabhi child ma state ko sync karwadunga

  const [name,setName] = useState('');
  return (
    <div>
      <Card title="Card1" name={name} setName={setName}/> 
      <Card title="Card2" name={name} setName={setName}/> 
      <h3>Name state variable ki value inside Parent card {name} {}</h3>
    </div>
  )
}

export default App