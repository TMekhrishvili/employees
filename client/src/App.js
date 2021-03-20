import React, { useState } from 'react'
import './index.css'
import { employeeSave } from './services'

const App = () => {
  const [input, setinput] = useState({ firstname: '', lastname: '' })
  const handleChange = e => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }
  console.log(input)
  const handleClick = e => {
    e.preventDefault()
    employeeSave(input)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="main">
      <h1>Some Form:</h1>
      <form>
        <input type="text" name="firstname" placeholder="Firstname" onChange={handleChange} />
        <input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>Send</button>
      </form>
    </div>
  )
}

export default App
