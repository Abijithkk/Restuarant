import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <div>
        <>
      
     
          
      <Navbar className="Header">
        <Container>
          <Navbar.Brand id='head'>
<Link to={"/"}>
            <img
              alt=""
              src="https://i.postimg.cc/wvGjGKQ1/51gvpa5e3gsscptl1cjidosibr.png"
              width="30"
              height="30"
              className="d-inline-block align-top" 
            />{' '}
            <span>Find Best</span>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
    </div>
  )
}

export default Header