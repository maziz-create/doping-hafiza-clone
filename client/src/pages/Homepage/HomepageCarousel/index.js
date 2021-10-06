import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import { useDispatch } from 'react-redux'
import { changeActiveBackground } from '../../../redux/backgrounds/backgroundsSlice'

import './style.css'

import home_slider_one from '../../../assets/images/home-slider-1.png'
import home_slider_two from '../../../assets/images/home-slider-2.png'
import home_slider_three from '../../../assets/images/home-slider-3.webp'
import home_slider_four from '../../../assets/images/home-slider-4.png'

function HomepageCarousel() {
    const dispatch = useDispatch();

    const handleOnSlide = (slideNumber) => {
        // console.log(slideNumber);
        // console.log('its type => ', typeof(slideNumber));
        setTimeout(() => {
            if (slideNumber === 0) {
                dispatch(changeActiveBackground('tytayt'));
            } else if (slideNumber === 1) {
                dispatch(changeActiveBackground('egitim'));
            } else if (slideNumber === 2) {
                dispatch(changeActiveBackground('yks2022'));
            } else if (slideNumber === 3) {
                dispatch(changeActiveBackground('yks2021'));
            }
        }, 400);
    }

    return (
        <Carousel
            className="w-100 position-relative"
            variant="light"
            touch="true"
            onSlide={(e) => handleOnSlide(e)}
            interval={null}
            keyboard={false}
        >
            <Carousel.Item
                style={{ height: '80vh' }}
            >
                <div className="position-absolute homepage-carousel-1-div" style={{
                    color: '#fff',
                }}>
                    <h3 className="homepage-carousel-1-div-heading">
                        TYT - AYT Kaç Günde Biter?
                    </h3>
                    <p className="homepage-carousel-1-div-text">
                        Doping Hafıza eğitimleri ile{' '}
                        <strong>
                            TYT-AYT'yi kaç günde
                        </strong>
                        bitirebileceğinizi hesaplayabilirsiniz!
                    </p>
                    <Button variant="light px-4 py-3 homepage-carousel-1-div-button">
                        Hemen Hesaplayın!
                    </Button>
                </div>
                <img
                    className="d-block ms-auto me-5"
                    style={{ height: '20rem' }}
                    src={home_slider_one}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item
                style={{ height: '80vh' }}
            >
                <img
                    className="d-block ms-auto me-5"
                    style={{ height: '20rem' }}
                    src={home_slider_two}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item
                style={{ height: '80vh' }}
            >
                <img
                    className="d-block ms-auto me-5"
                    style={{ height: '20rem' }}
                    src={home_slider_three}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item
                style={{ height: '80vh' }}
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
