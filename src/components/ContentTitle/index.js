import React from 'react'

function ContentTitle({ textTop, textBottom }) {
    return (
        <div>
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
                    {textTop}
                </h3>
                <h2
                    className="fw-bold"
                    style={{
                        color: '#CC171B',
                        marginBottom: '2rem',
                        fontSize: '2.5rem'
                    }}
                >
                    {textBottom}
                </h2>
            </div>
        </div>
    )
}

export default ContentTitle
