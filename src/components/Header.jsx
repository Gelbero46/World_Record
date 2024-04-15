// import { useState } from 'react';


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';

import Logo from "../assets/logoDeadlinedays1.png"

var data = require('../LocationRecent.js')

function Header({onAdd, Text, setText}) {
    // const [Text, setText] = useState('');
    // const [toggler] = useState('collapsed')

    const setSearch = (value) => {
      // console.log(value)
      setText(value)
      onAdd(value)
      setText('')   
      
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     if (!Text) {
    //         alert("Please add a Country");
    //         return -1
    //     }
    //     onAdd(Text);  
    //     setText('')   
    // }
  return (
    <div className='head'>
      <Navbar
       expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Brand  href="#">
            <img src={Logo} 
            style= {{height : '3rem'}}
            alt="" srcSet="" className='navbar--brand'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" 
                          className='justify-content-center'>

          <Form className="d-flex" 
          // onSubmit={onSubmit}
          >
            <div className='search-container'>
              <Form.Control
                type="search"
                placeholder="Search a Country"
                value={Text}
                className="me-2 search--box"
                id = 'search'
                aria-label="Search"
                onChange={ (e) => setText(e.target.value)}
              />
              <div className="dropdown">
                  {data.filter((item) => {
                    const searchTerm = Text.toLowerCase();
                    const countryName = item.name.toLowerCase();

                    return searchTerm && countryName.startsWith(searchTerm) && countryName !== searchTerm
                  }).slice(0,10)
                  .map((item, ) => {
                    return (
                      <a href='#search_result' key={item.id}>
                          <div className="dropdown-row" 
                        onClick={() => setSearch(item.name)}
                        key={item.id}>{item.name}</div>
                      </a>
                      

                    )
                  })}
              </div>
            </div>
            
            {/* <Button type='submit' 
                    variant="outline-success" 
            >
                <i class="bi bi-search"></i>
            </Button> */}
          </Form>
          
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <div className='hero'>
          <div className='hero--text'>
            <h1>Welcome to DeadlineDays.com!</h1>
            {/* <h3>Here you will find all registration periods of all the football federations worldwide.</h3> */}
            <h3>Worldwide transfer window dates made available at your fingertips</h3>
            <div className='search--button' onClick={ () => setText('A') }>
              <a href="#search">Search</a>
            </div>
          </div>

      </div>

    </div>

  );
}

export default Header;