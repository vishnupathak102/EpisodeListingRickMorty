import React from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';



const Header=({handleChange,search,onSearch})=>{


    return(
        <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Rick and Morty</Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <div className="custom">
    <Form inline style={{flexWrap:'nowrap'}}>
      
      <FormControl  size={'sm'} onChange={handleChange} value={search} type="text" placeholder="Search" className="mr-sm-2" />
      <Button size={'sm'} onClick={onSearch} variant="outline-primary">Search</Button>
      
    </Form>
    </div>
  </Navbar>
  </div>
  )
}

export default Header