import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdMenu, MdCancel} from "react-icons/md"
// import { useState } from "react/cjs/react.development";
// import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
// import AdSense from 'react-adsense';
// import {Adsense} from '@ctrl/react-adsense';

import TableData from "./TableData";
// import Map from "./Map";
var data = require('../LocationRecent.js')







function Main({ searchedText, onAdd, countriesAF, SetcountriesAF }){
  // const [ continents, Setcontinents ] = useState([
  //     'Africa',
  //     'Asia', 
  //     'Europe', 
  //     'North America', 
  //     'Oceania', 
  //     'South America'
  //   ])
    const [ continents ] = useState([
      {'name' : 'Asia', 'sym' : 'AFC'}, 
      {'name' : 'Africa', 'sym' : 'CAF'},
      {'name' : 'North America', 'sym' : 'CONCACAF'}, 
      {'name' : 'South America', 'sym' : 'CONMEBOL'},
      {'name' : 'Oceania', 'sym' : 'OFC'}, 
      {'name' : 'Europe', 'sym' : 'UEFA'}, 
    ])

  const [open, setOpen] = useState(true);
  // const [ textOpen, SettextOpen] = useState(false);
  // const [AFopen, setAFopen] = useState(true);
  // const [GLopen, setGLopen] = useState(true);
  // const [MRopen, setMRopen] = useState(true);
  // const [SZopen, setSZopen] = useState(true);
    
  // const [ currentContinentCountrys, SetcurrentContinentCountrys ] = useState([])
  const [ currentContinent, SetcurrentContinent ] = useState('asia')
  const [ toogleContinent, SettoogleContinent ] = useState(false)
  // const [ menuNotShow, SetmenuNotShow ] = useState(false)

  const [ countriesGL, SetcountriesGL ] = useState(false)
  const [ countriesMR, SetcountriesMR ] = useState(false)
  const [ countriesSZ, SetcountriesSZ ] = useState(false)

  const primaryColor = '#4DAAA7';
  const secondaryColor = '#3F8F8B'
  const tetiaryColor = '#583c1f'

  const filterCountries = () => {
    return (
      data.filter((item) => {
        // console.log('okay')
        // console.log(item.continent)
        // !item.continent ? console.log("*********", item.name) : console.log("**") 
        const continent = item.continent
        // .toLowerCase()
        if (continent) {
          // console.log(continent)
          // console.log(currentContinent)
          // console.log(currentContinent && continent.toLowerCase() === currentContinent)
          // var re = /[a-b]/g
          return currentContinent && continent.toLowerCase() === currentContinent
        }
        return null
      })
    )
  }
  return(
      <>   
          {/* <Map /> */}
        <div className="main">
         <div className="select--country" id="select">
              <div className="toogle-continent" onClick={ ()  => {
                setOpen(!open)
                SettoogleContinent(!toogleContinent)
              }}
              style={{padding : '5px 0'}}>
                
                { toogleContinent ? <MdMenu style={{fontSize: '25px'}} /> :<MdCancel style={{fontSize: '25px'}} /> }
              </div>

              <Collapse in={open}>
                <div className="header">
                { 
                // !toogleContinent && 
                continents.map((item, index) => {
                  return (
                    <p key={index}
                    className='header--item'
                      onClick={() => {
                        SetcurrentContinent(item.name.toLowerCase())
                        // console.log(currentContinent)
                      }}
                      style={{
                              fontWeight : 'bold',
                              color : tetiaryColor,
                              'border': `${currentContinent === item.name.toLowerCase() ? `1px solid ${primaryColor}` : 0 }`,
                              // 'borderBottom': `1px solid ${primaryColor} `,
                              'borderBottom': `${currentContinent === item.name.toLowerCase() ? 0 : `1px solid ${primaryColor}` }`,
                              }}>{item.sym}</p>
                  )
                  })
                  }
                  <p className="header--last"></p>
              </div>
              </Collapse>
 
             <div className="group">
                <div style={{'paddingBottom': '.75rem'}}></div>
                  <div className="countries">
                    <div className="countries--header"
                      onClick={() => {
                        SetcountriesAF(!countriesAF)
                      }}
                      style={{
                        'borderBottom' : `${countriesAF ? '1px solid #ddd' : 0}`
                      }}
                      >
                      { countriesAF ? <MdKeyboardArrowUp style={{fontSize: '25px'}}/> : <MdKeyboardArrowDown style={{fontSize: '25px'}} /> }
                      <h5> Countries A to F</h5>
                    </div>
                    
                    <Collapse in={countriesAF}>
                      <div className="move"
                      // style={{
                      //   'height' : `${countriesAF ? 'auto' : 0}`,
                      //   'opacity' : `${countriesAF ? 1 : 0}`
                      // }}
                      >
                      {
                        // data.filter((item) => {
                        //   // console.log('okay')
                        //   // console.log(item.continent)
                        //   // !item.continent ? console.log("*********", item.name) : console.log("**") 
                        //   const continent = item.continent
                        //   // .toLowerCase()
                        //   if (continent) {
                        //     console.log(continent)
                        //     console.log(currentContinent)
                        //     console.log(currentContinent && continent.toLowerCase() === currentContinent)
                        //     var re = /[a-b]/g
                        //     return currentContinent && continent.toLowerCase() === currentContinent
                        //   }
                          
                        // })
                        filterCountries()
                        .map((itm) => {
                          // console.log('okay')
                          // console.log("********************************",itm)
                          if (/^[A-F]/i.exec(itm.name)) {
                            return (
                              // <a href="#select">Select country</a>
                              <a  href="#result" key={itm.id} className="a-f"
                              onClick={ () => {
                                onAdd(itm.name)
                              } }>{itm.name}</a>
                            )
                          }
                          return null
                        })
                      }
                      </div>
                    </Collapse>
                  </div>
               
                <div className="countries">
                  <div className="countries--header"
                  onClick={() => {
                    SetcountriesGL(!countriesGL)
                  }}
                  style={{
                    'borderBottom' : `${countriesGL ? '1px solid #ddd' : 0}`
                  }}
                  >
                    { countriesGL ? <MdKeyboardArrowUp style={{fontSize: '25px'}}/> : <MdKeyboardArrowDown style={{fontSize: '25px'}} /> }
                    <h5>Countries G to L</h5>
                  </div>
                  <Collapse in={countriesGL}>
                    <div className="move">
                      {
                      filterCountries()
                      .map((itm) => {
                        // console.log('okay')
                        // console.log("********************************",itm)
                        if (/^[G-L]/i.exec(itm.name)) {
                          return (
                            <a href="#result" key={itm.id} className="g-l"
                            onClick={ () => {
                              onAdd(itm.name)
                            }
                          }
                            >{itm.name}</a>
                          )
                        }
                        return null
                        // return (
                        //       <div className="g-l"
                        //       // style={{'padding' : '0 .5rem',
                        //       //         'border' : '1px solid red',
                        //       //         'cursor' : 'pointer'
                        //       //       }}
                        //       >
                        //         {/^[G-L]/i.exec(itm.name)  && itm.name}
                        //       </div>
                        // )
                      })
                    }
                    </div>
                  </Collapse>
                  
                </div>
               

                <div className="countries">
                  <div className="countries--header"
                   onClick={() => {
                    SetcountriesMR(!countriesMR)
                  }}
                  style={{
                    'borderBottom' : `${countriesMR ? '1px solid #ddd' : 0}`
                  }}
                  >
                    { countriesMR ? <MdKeyboardArrowUp style={{fontSize: '25px'}}/> : <MdKeyboardArrowDown style={{fontSize: '25px'}} /> }
                    <h5>Countries M to R</h5>
                  </div>
                  
                  <Collapse in={countriesMR}>
                    <div className="move">
                        { countriesMR &&
                      filterCountries()
                      .map((itm) => {
                        // console.log('okay')
                        // console.log("********************************",itm)
                        if (/^[M-R]/i.exec(itm.name)) {
                          return (
                            <a href="#result" key={itm.id} className="m-r"
                            onClick={ () => {
                              onAdd(itm.name)
                            }
                          }>{itm.name}</a>
                          )
                        }
                        return null
                      })
                    }

                    </div>
                  </Collapse>
                  
                </div>

                <div className="countries">
                  <div className="countries--header"
                    onClick={() => {
                      SetcountriesSZ(!countriesSZ)
                    }}
                    style={{
                      'borderBottom' : `${countriesSZ ? '1px solid #ddd' : 0}`
                    }}
                    >
                      { countriesSZ ? <MdKeyboardArrowUp style={{fontSize: '25px'}}/> : <MdKeyboardArrowDown style={{fontSize: '25px'}} /> }
                    <h5>Countries S to Z</h5>
                  </div>
                  <Collapse in={countriesSZ}>
                    <div className="move">
                        { countriesSZ &&                 
                      filterCountries()
                      .map((itm) => {
                        // console.log('okay')
                        // console.log("********************************",itm)
                        if (/^[S-Z]/i.exec(itm.name)) {
                          return (
                            <a href="#result" key={itm.id} className="s-z"
                            onClick={ () => {
                              onAdd(itm.name)
                            }
                          }>{itm.name}</a>
                          )
                        }
                        return null
                      })
                      
                    }
                    </div>
                  </Collapse>
                 
                </div>

             </div>
         </div>
         <div id='result' className="table--header">
            <TableData searchedText={searchedText}/>
          </div>

      </div>
     
      {/* <Adsense
            client="ca-pub-4623857559563435" // Good
            slot="5139739246" // Good
            style={{ display: 'block'}} // Good
            format='fluid' // Good
            // responsive='true' // Good
            layout='in-article'
            
          /> */}
        <div className="content">
            <p>
              Deadlinedays.com will provide you with the football trasfer window dates and registration periods for every country.
              In soccer transfer window is the only time when players who are under contract are able to make a transfer.
              You might have heard about the news that Ronaldo is linked with a transfer this transfer window.
              From the elite to the amateurs, we enable everyone to have access to transfer windows dates and to this information with ease.
              Our transfer window dates are updated very regularly and provide information about transfer windows for professional, amateur and female football players.
              Soccer players transfer windows are different for every country and each association has different dates for each type of player.
              Deadline days categorizes transfer days by each continent, country and type of player, male professional, female or amateur.
              Providing accurate transfer window information to players, coaches, agents, clubs and everyone involved in the football or soccer environment, we make sure everyone knows their deadline day!
            </p>
      </div>
      </>
     
     
  );
}
export default Main;