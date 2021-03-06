import React from 'react'

import './style.css'

import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//icons
import { RiErrorWarningFill } from "react-icons/ri";

function TrainingCards() {
    return (
        <Row>
            <div
                className="col-md-6 col-lg-4 md-4"
                style={{ padding: '0px 15px 0px 15px' }}
            >
                <div style={{ paddingBottom: '50px', height: '100%' }}>
                    <Card
                        style={{
                            width: '350px',
                            border: '1px solid rgba(0,0,0,.05)',
                            boxShadow: '0 3px 2px rgb(0 0 0 / 10%)',
                        }}
                    >
                        <Card.Body
                            style={{
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '10000% 100%',
                                backgroundPosition: 'top right',
                                borderTopLeftRadius: '7px',
                                borderTopRightRadius: '7px',
                                overflow: 'hidden',
                            }}
                            className="p-0 productimage-area d-block position-relative"
                        >
                            <div className="h-100 d-flex align-items-stretch">
                                <div
                                    style={{
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}
                                    className="h-100 d-flex flex-column align-items-end justify-content-start flex-grow-1 product-image"
                                > </div>
                                <div>
                                    <div className="product-iconarea me-2">
                                        <div className="product-icon">
                                            <img src="https://cdn.dopinghafiza.com/files/attribute/product-info-1.png" alt="Doping Haf??za Reflekslerle Matematik" className="mx-auto" />
                                        </div>
                                    </div>
                                    <div className="product-iconarea me-2">
                                        <div className="product-icon">
                                            <img src="https://cdn.dopinghafiza.com/files/attribute/product-info-3.png" alt="Ser??venlerle Fizik-Kimya-Biyoloji" className="mx-auto" />
                                        </div>
                                    </div>
                                    <div className="product-iconarea me-2">
                                        <div className="product-icon">
                                            <img src="https://cdn.dopinghafiza.com/files/attribute/tarih-cografya-icon.webp" alt="Doping Haf??za Tarih Yolculu??u ve Co??rafya Maceras??" className="mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                style={{ top: '0', left: '0', bottom: '0', right: '0' }}
                                href="https://www.dopinghafiza.com/shop/281/tyt-ayt-sayisal-2022.html" className="position-absolute"
                                title="Doping Haf??za TYT T??m Dersler + AYT Say??sal 2022">
                                <span></span>
                            </a>
                        </Card.Body>

                        <Card.Body className="cardBody">
                            <Card.Title className="fw-bold">TYT T??m Dersler + Ayt Say??sal 2022</Card.Title>
                            <Card.Text className="successRate" as="span">%95 Ba??ar?? Oran??</Card.Text>
                            <Card.Text className="mt-2" as="li">3.468 Adet Ders Videosu</Card.Text>
                            <Card.Text as="li">30.056 Adet Video ????z??ml?? Soru</Card.Text>
                            <Card.Text as="li">????zemedi??iniz Sorular?? Sorma Hakk??</Card.Text>
                            <Card.Text as="li">Anlamad??????n??z Yeri ????retmenle Canl?? ve G??r??nt??l?? G??r????me Hakk??</Card.Text>
                            <Card.Text as="li">Rehberlik ????retmenleriyle G??r??nt??l?? G??r????me ve Mesajla??ma Hakk??</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text className="product-price">
                                2799 TL
                            </Card.Text>
                            <Card.Text className="product-old-price">
                                4499 TL
                                <br />
                            </Card.Text>

                            <Card.Text as="span" style={{
                                fontSize: '14px',
                                color: '#E07C10',
                                marginRight: '3px',

                            }}>
                                <RiErrorWarningFill />
                            </Card.Text>
                            <Card.Text
                                as="span"
                                style={{
                                    fontSize: '12px',
                                    color: '#E07C10',

                                }}
                            >
                                Kredi kart??na vade farks??z 9 taksit imkan??
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Row >
    )
}

export default TrainingCards
