import React from 'react'

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaTelegramPlane,
    FaWhatsapp,
    FaPhoneVolume,
} from "react-icons/fa";

import { RiEnglishInput } from "react-icons/ri";

import { MdEmail } from "react-icons/md";

import './style.css'


function Topbar() {
    return (
        <div className="topbar mb-3">
            <div className="contacts">
                <div className="contact wp">
                    <p className="icon fs-5 mb-1">
                        <FaWhatsapp />
                    </p>

                    <p>
                        0 533 236 20 05
                    </p>
                </div>
                <div className="contact phone">
                    <div className="icon fs-5 mb-1">
                        <FaPhoneVolume />
                    </div>

                    <p>
                        0 212 236 74 41
                    </p>
                </div>
                <div className="contact email">
                    <div className="icon fs-5 mb-1">
                        <MdEmail />
                    </div>
                    <p>
                        info@dopinghafiza.com
                    </p>
                </div>
            </div>

            <div className="social-medias">
                <div className="social-media-icon">
                    <FaFacebookF />
                </div>
                <div className="social-media-icon">
                    <FaInstagram />
                </div>
                <div className="social-media-icon">
                    <FaTwitter />
                </div>
                <div className="social-media-icon">
                    <FaYoutube />
                </div>
                <div className="social-media-icon">
                    <FaTelegramPlane />
                </div>
                <div className="social-media-icon">
                    <RiEnglishInput />
                </div>
            </div>
        </div>
    )
}

export default Topbar
