import React from 'react'

import './style.css'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

//components
import ContentTitle from '../ContentTitle'

//icons
import {
    FaTrophy,
    FaPlay,
    FaMicrochip,
    FaFileAlt,
    FaRocketchat,
    FaCuttlefish,
    FaChalkboardTeacher,
    FaChartBar,
    FaMobileAlt,
    FaInfinity
} from "react-icons/fa";

function WhatsIn() {
    return (
        <div style={{
            paddingTop: '4.5rem',
            marginBottom: '1rem',
        }}>
            <Container>
                <Row>
                    <div className="col-lg-12">
                        <ContentTitle textTop="Doping Hafıza'da" textBottom="Neler Var?" />
                        <div style={{ color: '#3A4759' }}>
                            <p>
                                Doping Hafıza’nın klasik eğitim sistemlerinden farkı ne?
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <Row>
                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaTrophy />
                                    </div>
                                    <div className="item-text">
                                        Her Sene Türkiye Dereceleri
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaPlay />
                                    </div>
                                    <div className="item-text">
                                        Animasyon Destekli Ders Anlatımları
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaMicrochip />
                                    </div>
                                    <div className="item-text">
                                        Yapay Zeka Destekli Akıllı Test Paneli
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaPlay />
                                    </div>
                                    <div className="item-text">
                                        Video Çözümlü Soru Bankası
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaFileAlt />
                                    </div>
                                    <div className="item-text">
                                        Kişiselleştirilmiş Ders Çalışma Programı
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaPlay />
                                    </div>
                                    <div className="item-text">
                                        Video Çözümlü Deneme Sınavları
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaRocketchat />
                                    </div>
                                    <div className="item-text">
                                        Şimdi Anladım App (Ekspres Canlı Özel Ders)
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaCuttlefish />
                                    </div>
                                    <div className="item-text">
                                        Çözücü App (Çözemediğiniz Soruları Çözer)
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaChalkboardTeacher />
                                    </div>
                                    <div className="item-text">
                                        Koçum Yanımda - Dijital Rehberlik Servisi
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaChartBar />
                                    </div>
                                    <div className="item-text">
                                        İsabetli Soru Tahminleri
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaMobileAlt />
                                    </div>
                                    <div className="item-text">
                                        Tüm Bilgisayar ve Mobil Cihazlarda Kullanma İmkanı
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="banner-list-item">
                                    <div className="item-icon">
                                        <FaInfinity />
                                    </div>
                                    <div className="item-text">
                                        Sınırsız İzleme Hakkı
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default WhatsIn
