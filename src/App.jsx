import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Slider from './components/Slider'
import Header2 from './components/header2/Header2'
import Production from './components/production/Production'
import Genre from './components/genre/Genre'

function App() {

  return (
    <>
      <Header />
      <Slider/>
      {/* <Header2/>
      <Slider /> */}

      <Production/>
      <Genre/>
    </>
  )
}

export default App
