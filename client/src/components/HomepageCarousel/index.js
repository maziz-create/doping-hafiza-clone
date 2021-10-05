import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import './style.css'

import home_slider_one from '../../assets/images/home-slider-1.png'
import home_slider_two from '../../assets/images/home-slider-2.png'
import home_slider_three from '../../assets/images/home-slider-3.webp'
import home_slider_four from '../../assets/images/home-slider-4.png'

function HomepageCarousel() {
    return (
        <Carousel className="w-100" variant="dark" touch="true" fade>
            <Carousel.Item
                style={{ backgroundColor: '#2C95AC', height: '100vh' }}
            >
                <img
                    className="d-block ms-auto me-5"
                    style={{ height: '20rem' }}
                    src={home_slider_one}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item
                style={{ backgroundColor: '#2C95AC', height: '100vh' }}
            >
                <img
                    className="d-block ms-auto me-5"
                    style={{ height: '20rem' }}
                    src={home_slider_two}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item
                style={{ backgroundColor: '#2C95AC', height: '100vh' }}
            >
                <img
                    className="d-block ms-auto me-5"
                    style={{ height: '20rem' }}
                    src={home_slider_three}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item
                style={{ backgroundColor: '#2C95AC', height: '100vh' }}
            >
                <img
                    className="d-block ms-auto me-5"
                    style={{ height: '20rem' }}
                    src={home_slider_four}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default HomepageCarousel
