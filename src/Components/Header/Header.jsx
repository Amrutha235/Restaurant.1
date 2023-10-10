import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
     <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="/">
          <i class="fa-solid fa-utensils fa-beat-fade me-3"></i>
            Resto Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header