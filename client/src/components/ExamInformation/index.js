import React from 'react'

import Row from 'react-bootstrap/Row'

//components
import ProductButtons from '../ProductButtons/'

//images
import mockup from '../../assets/images/mockup.webp'

//css
import './style.css'

function ExamInformation() {
    return (
        <div style={{ paddingTop: '5.5rem' }}>
            <Row className="col-lg-6">
                <div
                    style={{
                        fontSize: '10rem',
                    }}
                >
                    <h3
                        className="fw-bold"
                        style={{
                            color: '#3A4759',
                        }}
                    >
                        Sınavlara Hazırlanmanın
                    </h3>
                    <h2
                        className="fw-bold"
                        style={{
                            color: '#CC171B',
                            marginBottom: '2rem',
                            fontSize: '2.5rem'
                        }}
                    >
                        En Etkili Yolu!
                    </h2>
                </div>
                <div style={{ color: '#3A4759' }}>
                    <p>
                        YKS, LGS, KPSS, DGS ve ALES'e Doping Hafıza ile sistemli, kapsamlı ve verimli bir şekilde hazırlanmak ister misiniz?
                    </p>
                    <p>
                        Yeni Nesil Online Eğitim Platformumuzda farklı konseptlerle hazırlanmış konu anlatımlarını izledikten sonra video çözümlü testleri çözerek netlerinizi artırabilirsiniz.

                    </p>
                </div>

                <ProductButtons />
                <div className="mockup d-none d-lg-block">
                    <img
                        src={mockup}
                        alt="mockup"
                    />
                </div>
            </Row>
        </div>
    )
}

export default ExamInformation
