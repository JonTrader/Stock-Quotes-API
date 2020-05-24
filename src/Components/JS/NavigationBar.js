import React from 'react';
import '../CSS/NavigationBar.css';
import logo from '../up-arrow.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


export default class NavigationBar extends React.Component {

    render()
    {
        return(

            <Navbar expand="md" className="navbgcolor" sticky="top">
                <Container>

                    <Navbar.Brand href="/">
                    <img src={logo} alt="" width="45px"/>
                    </Navbar.Brand>

                    <Nav className="ml-auto">
                        <Nav.Link href="/quotes">Quotes</Nav.Link>
                    </Nav>

                    
                </Container>

            </Navbar>
            
        );
    }
}