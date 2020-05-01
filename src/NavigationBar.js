import React from 'react';
import Nav from 'react-bootstrap/Navbar'
import Navbar from 'react-bootstrap/Navbar'


export default class NavigationBar extends React.Component {

    render()
    {
        return(

            <Navbar expand="lg" variant="dark" bg="dark">
                <Navbar.Brand href="/home" className="ml-5">
                    <h3>Stock Quotes</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="lines" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <a className="mr-5">Quotes</a>
                        <a>Charts</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        );
    }
}