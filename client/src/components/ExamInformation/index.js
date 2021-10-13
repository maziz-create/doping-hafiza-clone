import React from 'react'

import Row from 'react-bootstrap/Row'

//components
import ProductButtons from '../ProductButtons/'
import ContentTitle from '../ContentTitle'

//images
import mockup from '../../assets/images/mockup.webp'

//css
import './style.css'

function ExamInformation() {
    return (
        <div className="d-none d-md-inline-block" style={{ paddingTop: '4.5rem', marginBottom: '1rem' }}>
            <Row>
                <div className="col-lg-6">
                    <ContentTitle textTop="Sınavlara Hazırlanmanın" textBottom="En Etkili Yolu!" />
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
                </div>
            </Row>
        </div>
    )
}

export default ExamInformation
