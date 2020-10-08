import React from 'react'
import './App.css'
import { Spinner } from '../components/Spinner/Spinner'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Spinner visible={true}/>
      </header>
    </div>
  )
}

export default App
