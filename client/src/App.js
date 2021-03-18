import React from 'react'
import './index.css'

const App = () => {
  return (
    <div className="main">
      <h1>Some Form:</h1>
      <form>
        <input type="text" name="firstname" placeholder="Firstname" />
        <input type="text" name="lastname" placeholder="Lastname" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default App
