import React from 'react';
import '../CSS/NavigationBar.css';
import logo from '../up-arrow.png'
import Nav from 'react-bootstrap/Navbar'
import Navbar from 'react-bootstrap/Navbar'


export default class NavigationBar extends React.Component {

    render()
    {
        return(

            <Navbar expand="lg" className="navcolor">
                    <img src={logo} alt="" className="arrowLogo ml-5"/>
                    <h3 className="ml-2">Stock Quotes</h3>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="lines" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <h4 className="mr-5">Quotes</h4>
                        <h4>Charts</h4>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        );
    }
}