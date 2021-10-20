import React from 'react'

import './style.css'

import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'

const TrainingButtons = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            className="mb-5 trainingsButtons"
        >
            <Button
                style={{ fontSize: '.81rem' }}
                className="px-4 py-3"
                size="lg"
            >
                YKS 2022
            </Button>
            <Button
                style={{ fontSize: '.81rem' }}
                className="px-4 py-3"
                size="lg"
            >
                YKS 2023
            </Button>
            <Button
                style={{ fontSize: '.81rem' }}
                className="px-4 py-3"
                size="lg"
            >
                9. ve 10. Sınıf
            </Button>
            <Button
                style={{ fontSize: '.81rem' }}
                className="px-4 py-3 d-none d-md-block"
                size="lg"
            >
                LGS & 7. 6. 5. 4. Sınıf
            </Button>
            <Button
                style={{ fontSize: '.81rem' }}
                className="px-4 py-3 d-none d-lg-block"
                size="lg"
            >
                DGS 2022
            </Button>
            <Button
                style={{ fontSize: '.81rem' }}
                className="px-4 py-3 d-none d-lg-block"
                size="lg"
            >
                ALES 2021
            </Button>
            <Button
                style={{ fontSize: '.81rem' }}
                className="px-4 py-3 d-none d-xl-block"
                size="lg"
            >
                ALES 2021
            </Button>
            <Button
                style={{ fontSize: '.81rem' }}
                className="px-4 py-3 d-none d-xl-block"
                size="lg"
            >
                ALES 2021
            </Button>
        </div>
    )
}

export default TrainingButtons
