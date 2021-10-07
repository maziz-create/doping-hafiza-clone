import React from 'react'

import './style.css'


function Topbar() {
    return (
        <div className="topbar mb-3">
            <div className="contacts">
                <div className="contact wp">
                    <div className="icon">
                        Icon
                    </div>

                    <p>
                        0 533 236 20 05
                    </p>
                </div>
                <div className="contact phone">
                    <div className="icon">
                        Icon
                    </div>

                    <p>
                        0 212 236 74 41
                    </p>
                </div>
                <div className="contact email">
                    <div className="icon">
                        Icon
                    </div>
                    <p>
                        info@dopinghafiza.com
                    </p>
                </div>
            </div>

            <div className="social-medias">
                <div className="social-media-icon">
                    Icon
                </div>
                <div className="social-media-icon">
                    Icon
                </div>
                <div className="social-media-icon">
                    Icon
                </div>
                <div className="social-media-icon">
                    Icon
                </div>
                <div className="social-media-icon">
                    Icon
                </div>
                <div className="social-media-icon">
                    Icon
                </div>
            </div>
        </div>
    )
}

export default Topbar
