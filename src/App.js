import React, { useState } from 'react'

import './bootstrap.min.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

var data = require('./Location_updated.json')
console.log(data)

const App = () => {

    const [ countryData, setCountryData ] = useState("")
    const [ inputText, setInputText ] = useState("");
    const inputHandler = (text) => {

      setInputText(text);
      console.log(countryData)
    };

    
  return (
    <div>
      <Header onAdd = {inputHandler}/>
      <Main searchedText = {inputText}/>
      <Footer /> 
    </div>
  )
}

export default App
