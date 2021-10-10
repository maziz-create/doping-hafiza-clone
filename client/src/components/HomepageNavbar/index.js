import { useState } from 'react'

import './style.css'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import { useDispatch } from 'react-redux'
import { changeBackgroundHeightForMobile } from '../../redux/backgrounds/backgroundsSlice'

import logo from '../../assets/images/logo.svg'

function HomepageNavbar() {
    const dispatch = useDispatch();

    const [style, setStyle] = useState({ display: 'none'})

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
                <Navbar.Toggle onClick={() => dispatch(changeBackgroundHeightForMobile('65rem'))} aria-controls="navbarScroll" />
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
                        <Nav.Link
                            className="mx-2"
                            style={{
                                textAlign: 'end',
                                position: 'relative',
                                paddingBottom: '12px',
                                cursor: 'default'
                            }}
                            href="#home"
                            onMouseOver={e => {
                                setStyle({ display: 'block' });
                            }}
                            onMouseLeave={e => {
                                setStyle({ display: 'none' })
                            }}
                        >
                            <div style={{ cursor: 'pointer' }}>Eğitim Paketlerimiz</div>
                            <ul style={style} className="hiddenDropdown">
                                <li className="hiddenDropdownLi">
                                    <a className="hiddenDropdownLink" href="#">YKS 2022</a>
                                </li>
                                <li className="hiddenDropdownLi">
                                    <a className="hiddenDropdownLink" href="#">YKS 2022</a>
                                </li>
                                <li className="hiddenDropdownLi">
                                    <a className="hiddenDropdownLink" href="#">YKS 2022</a>
                                </li>
                                <li className="hiddenDropdownLi">
                                    <a className="hiddenDropdownLink" href="#">YKS 2022</a>
                                </li>
                                <li className="hiddenDropdownLi">
                                    <a className="hiddenDropdownLink" href="#">YKS 2022</a>
                                </li>
                                <li className="hiddenDropdownLi">
                                    <a className="hiddenDropdownLink" href="#">YKS 2022</a>
                                </li>
                                <li className="hiddenDropdownLi">
                                    <a className="hiddenDropdownLink" href="#">YKS 2022</a>
                                </li>
                            </ul>
                        </Nav.Link>
                        <Nav.Link className="mx-2" href="#features">Örnek Videolar</Nav.Link>
                        <Nav.Link className="mx-2 d-none d-lg-inline" href="#pricing">Yorumlar & Başarılarımız</Nav.Link>
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
