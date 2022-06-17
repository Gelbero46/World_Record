import { useState } from 'react';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from "../assets/logo4.png"
var data = require('../Location_updated.json')

function Header({onAdd}) {
    const [Text, setText] = useState('');

    const setSearch = (value) => {
      console.log(value)
      setText(value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!Text) {
            alert("Please add a Country");
            return -1
        }
        onAdd(Text);  
        setText('')   
    }
  return (
    <Navbar bg="light" expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={Logo} style= {{width: '40px'}}alt="" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" 
                          className='justify-content-center'>

          <Form className="d-flex" onSubmit={onSubmit}>
            <div className='search-container'>
              <Form.Control
                type="search"
                placeholder="Search"
                value={Text}
                className="me-2 search--box"
                aria-label="Search"
                onChange={ (e) => setText(e.target.value)}
              />
              <div className="dropdown">
                  {data.filter((item) => {
                    const searchTerm = Text.toLowerCase();
                    const countryName = item.name.toLowerCase();

                    return searchTerm && countryName.startsWith(searchTerm) && countryName != searchTerm
                  }).slice(0,10)
                  .map(item => {
                    return <div className="dropdown-row" 
                                onClick={() => setSearch(item.name)}
                                key={item.id}>{item.name}</div>
                  })}
              </div>
            </div>
            
            <Button type='submit' 
                    variant="outline-success" 
            >
                <i class="bi bi-search"></i>
            </Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;