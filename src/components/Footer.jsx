import React from 'react'

const Footer = ( {searchText, selectCountry} ) => {
  return (
    <>
      <div className='footer'>
        <a href="#search" onClick={ () => searchText('A')}>Search</a>
        <a href="#select" className='select' onClick={ () => selectCountry(true)}>Select country</a>
        {/* <p>&copy; Copyright 2022 Scouthmaster</p> */}
      </div>
      <div style={{
        height : '1.5rem'
      }}>

      </div>

    </>

  )
}

export default Footer
