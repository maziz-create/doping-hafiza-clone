import { useState } from 'react'

import './style.css'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import { useDispatch, useSelector } from 'react-redux'
import { changeBackgroundHeightForMobile } from '../../redux/backgrounds/backgroundsSlice'

import logo from '../../assets/images/logo.svg'

function HomepageNavbar() {
    const dispatch = useDispatch();
    const activeBackgroundHeight = useSelector(state => state.backgrounds.activeBackgroundHeight);

    const [styleOrnekVideolar, setStyleOrnekVideolar] = useState({ display: 'none' });
    const [styleBizeUlasin, setStyleBizeUlasin] = useState({ display: 'none' });
    const visibilityHiddenDropdown = window.innerWidth > 991 ? true : false;

    // navbarCollapse aktif olduktan sonra text align sıkıntı oluşturuyor.
    const navLinkStyle = visibilityHiddenDropdown ? {
        textAlign: 'end',
        cursor: 'default'
    } : {
        textAlign: 'center',
        cursor: 'default'
    }

    /*
        yeni eklediğim ul-li yapısının style'ını width'e göre ayarlamak için
        mecburen bu şekilde yapıyorum. display:flex eklediğim için toggle zamanında da
        yan yana duruyor linkler...
    */
    const navUlStyle = window.innerWidth > '768' ? {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        marginBottom: '0',
    } : {
        listStyleType: 'none',
        marginBottom: '0',
    }

    //window width değiştiği an yeni değerini dispatch etmek istiyoruz.
    const updateSize = () => {
        if (window.innerWidth > 1200) {
            // console.log("update ediliyor 38.5 rem");
            dispatch(changeBackgroundHeightForMobile('38.5rem'))
        } else if (window.innerWidth > 991 && window.innerWidth < 1200) {
            dispatch(changeBackgroundHeightForMobile('35rem'))
        } else {
            // console.log("update ediliyor 46 rem");
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
                        className="d-inline-block"
                    />
                </Navbar.Brand>
                <Navbar.Toggle onClick={() =>
                    activeBackgroundHeight === '58rem'
                        ? updateSize()
                        : dispatch(changeBackgroundHeightForMobile('58rem'))
                }
                    aria-controls="navbarScroll"
                />
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
                        <ul
                            style={navUlStyle}
                        >
                            {/* EĞİTİM PAKETLERİMİZ VE HİDDEN NAVBAR */}
                            <li style={{ position: 'relative' }}>
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
                                    <span className="navTitle" style={{ cursor: 'pointer' }}>Eğitim Paketlerimiz</span>
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
                            </li>
                            <li>
                                <Nav.Link className="mx-2" href="#features">Örnek Videolar</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link className="mx-2 d-md-none d-lg-inline" href="#pricing">Yorumlar & Başarılarımız</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link className="mx-2 d-md-none d-lg-inline" href="#x">Yardım</Nav.Link>
                            </li>
                            {/* BİZ KİMİZ VE HİDDEN NAVBAR */}
                            <li style={{ position: 'relative' }}>
                                <Nav.Link
                                    className="mx-2 d-md-none d-xl-inline"
                                    style={navLinkStyle}
                                    href="#gg"
                                    onMouseOver={e => {
                                        setStyleBizeUlasin({ display: 'block' });
                                    }}
                                    onMouseLeave={e => {
                                        setStyleBizeUlasin({ display: 'none' })
                                    }}
                                >
                                    <span className="navTitle" style={{ cursor: 'pointer' }}>Biz Kimiz</span>
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
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HomepageNavbar
