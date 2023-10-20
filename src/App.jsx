import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <main>

      <div className='left-container'>
        <Header/>
        <NavBar/>
      </div>

      <div className='right-container'>
        <Card/>
        <List/>
      </div>

    </main>


    </>
  )
}

export default App
