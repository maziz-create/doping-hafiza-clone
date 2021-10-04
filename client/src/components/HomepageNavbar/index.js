import React from 'react'
import './style.css'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import logo from '../../assets/images/logo.svg'

function HomepageNavbar() {
    return (
        <Navbar bg="transparent" variant="light" expand="md">
            <Container className="justify-content-center justify-content-md-between">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            color="black"
                            style={{
                                fontSize: '.9rem',
                                fontWeight: 'bold',
                            }}
                            className="text-center"
                        >
                            <Nav.Link href="#home">Eğitim Paketlerimiz</Nav.Link>
                            <Nav.Link href="#features">Örnek Videolar</Nav.Link>
                            <Nav.Link href="#pricing">Yorumlar & Başarılarımız</Nav.Link>
                            <Nav.Link className="d-md-none d-lg-inline bg-md-success" href="#x">Yardım</Nav.Link>
                            <Nav.Link className="d-md-none d-lg-inline" href="#y">Biz Kimiz</Nav.Link>
                            <Nav.Link className="d-md-none d-xl-inline" href="#z">Bize Ulaşın</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HomepageNavbar
