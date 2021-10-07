import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import logo from '../../assets/images/logo.svg'

function HomepageNavbar() {
    return (
        <Navbar className="bg-transparent" variant="dark" expand="md">
            <Container className="justify-content-center justify-content-md-between">
                <Navbar.Brand href="#home">
                    <img
                        style={{ filter: 'brightness(0) invert(1)' }}
                        alt=""
                        src={logo}
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse
                    id="navbarScroll"
                >
                    <Nav
                        color="black"
                        style={{
                            fontSize: '.9rem',
                            fontWeight: 'bold',
                            width: '100%'
                        }}
                        className="text-center justify-content-end"
                    >
                        <Nav.Link className="mx-2" href="#home">Eğitim Paketlerimiz</Nav.Link>
                        <Nav.Link className="mx-2" href="#features">Örnek Videolar</Nav.Link>
                        <Nav.Link className="mx-2" href="#pricing">Yorumlar & Başarılarımız</Nav.Link>
                        <Nav.Link className="mx-2 d-md-none d-lg-inline" href="#x">Yardım</Nav.Link>
                        <Nav.Link className="mx-2 d-md-none d-lg-inline" href="#y">Biz Kimiz</Nav.Link>
                        <Nav.Link className="mx-2 d-md-none d-xl-inline" href="#z">Bize Ulaşın</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HomepageNavbar
