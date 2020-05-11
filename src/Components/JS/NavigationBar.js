import React from 'react';
import '../CSS/NavigationBar.css';
import logo from '../up-arrow.png'
import Nav from 'react-bootstrap/Navbar'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";


export default class NavigationBar extends React.Component {

    render()
    {
        return(

            <Navbar expand="md" className="navbgcolor" sticky="top">
                <Container>

                    <Navbar.Brand href="/">
                    <img src={logo} alt="" width="50px"/>
                    </Navbar.Brand>
                </Container>

            </Navbar>
            
        );
    }
}