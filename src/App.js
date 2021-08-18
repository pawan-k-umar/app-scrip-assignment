import React from 'react'
import './App.css'
import Header from './components/Header'
import Details from './components/Details'
import Listing from './components/Listing'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="list_details">
        <Listing />
        <Details />
      </div>
    </div>
  )
}

export default App
