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

    const [styleOrnekVideolar, setStyleOrnekVideolar] = useState({ display: 'none' });
    const [styleBizeUlasin, setStyleBizeUlasin] = useState({ display: 'none' });
    const visibilityHiddenDropdown = window.innerWidth > 991 ? true : false;

    // navbarCollapse aktif olduktan sonra text align sıkıntı oluşturuyor.
    const navLinkStyle = visibilityHiddenDropdown ? {
        textAlign: 'end',
        position: 'relative',
        paddingBottom: '12px',
        cursor: 'default'
    } : {
        textAlign: 'center',
        position: 'relative',
        paddingBottom: '12px',
        cursor: 'default'
    }

    //window width değiştiği an yeni değerini dispatch etmek istiyoruz.
    const updateSize = () => {
        if (window.innerWidth > 1200) {
            // console.log("update ediliyor 47 rem");
            dispatch(changeBackgroundHeightForMobile('38.5rem'))
        } else if (window.innerWidth > 991 && window.innerWidth < 1200) {
            dispatch(changeBackgroundHeightForMobile('35rem'))
        } else {
            // console.log("update ediliyor 38.5 rem");
            dispatch(changeBackgroundHeightForMobile('46rem'))
        }
    }
    //window.onresize = functionRef;
    window.onresize = updateSize;

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
                        {/* EĞİTİM PAKETLERİMİZ VE HİDDEN NAVBAR */}
                        <Nav.Link
                            className="mx-2"
                            style={navLinkStyle}
                            href="#home"
                            onMouseOver={e => {
                                setStyleOrnekVideolar({ display: 'block' });
                            }}
                            onMouseLeave={e => {
                                setStyleOrnekVideolar({ display: 'none' })
                            }}
                        >
                            <div style={{ cursor: 'pointer' }}>Eğitim Paketlerimiz</div>
                        </Nav.Link>
                        {
                            visibilityHiddenDropdown &&
                            (
                                <ul
                                    style={styleOrnekVideolar}
                                    className="hiddenDropdown positionForOrnekVideolar"
                                    onMouseOver={e => {
                                        setStyleOrnekVideolar({ display: 'block' });
                                    }}
                                    onMouseLeave={e => {
                                        setStyleOrnekVideolar({ display: 'none' })
                                    }}
                                >
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
                            )
                        }

                        <Nav.Link className="mx-2" href="#features">Örnek Videolar</Nav.Link>
                        <Nav.Link className="mx-2 d-none d-lg-inline" href="#pricing">Yorumlar & Başarılarımız</Nav.Link>
                        <Nav.Link className="mx-2 d-md-none d-lg-inline" href="#x">Yardım</Nav.Link>
                        {/* BİZ KİMİZ VE HİDDEN NAVBAR */}
                        <Nav.Link
                            className="mx-2 d-md-none d-lg-inline"
                            style={navLinkStyle}
                            href="#gg"
                            onMouseOver={e => {
                                setStyleBizeUlasin({ display: 'block' });
                            }}
                            onMouseLeave={e => {
                                setStyleBizeUlasin({ display: 'none' })
                            }}
                        >
                            <div style={{ cursor: 'pointer' }}>Biz Kimiz</div>
                        </Nav.Link>
                        {
                            visibilityHiddenDropdown &&
                            (
                                <ul
                                    style={styleBizeUlasin}
                                    className="hiddenDropdown positionForBizeUlasin"
                                    onMouseOver={e => {
                                        setStyleBizeUlasin({ display: 'block' });
                                    }}
                                    onMouseLeave={e => {
                                        setStyleBizeUlasin({ display: 'none' })
                                    }}
                                >
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
                            )
                        }
                        <Nav.Link className="mx-2 d-md-none d-xl-inline" href="#z">Bize Ulaşın</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HomepageNavbar
