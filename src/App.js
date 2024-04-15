import React, { useState } from 'react'

import './bootstrap.min.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// var data = require('./LocationRecent.js')
// console.log(data)

const App = () => {

    // const [ countryData, setCountryData ] = useState("")
    const [ inputText, setInputText ] = useState("");
    const [ searchBarText , SetsearchBarText ] = useState('');

    const [ countriesAF, SetcountriesAF ] = useState(false)
    const inputHandler = (text) => {

      setInputText(text);
      // console.log(countryData)
    };

    
  return (
    <div>
      <Header onAdd = {inputHandler} Text={searchBarText} setText={SetsearchBarText}/>
      <Main searchedText = {inputText} onAdd = {inputHandler} countriesAF={countriesAF} SetcountriesAF = {SetcountriesAF}/>
      <Footer searchText = {SetsearchBarText} selectCountry = {SetcountriesAF} /> 
    </div>
  )
}

export default App
