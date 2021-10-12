import React from 'react'

import Button from 'react-bootstrap/Button'

function ProductButtons() {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <Button
                as="a"
                className="w-100 rounded-pill p-3 mt-4"
                variant="danger"
                size="lg"
            >
                Detayları Göster
            </Button>
            <div
                className="d-flex justify-content-between mt-3 rounded-3 w-100"
                style={{ backgroundColor: '#5E6B79', padding: '20px 25px' }}
            >
                <Button variant="secondary">YKS 2022</Button>
                <Button variant="secondary">LGS 2022</Button>
                <Button variant="secondary">KPSS 2022</Button>
                <Button variant="secondary">DGS 2022</Button>
            </div>
        </div>
    )
}

export default ProductButtons
