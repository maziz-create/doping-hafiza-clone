import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import { useDispatch } from 'react-redux'
import { changeActiveBackground } from '../../redux/backgrounds/backgroundsSlice'

import './style.css'

import home_slider_one from '../../assets/images/home-slider-1.png'
import home_slider_two from '../../assets/images/home-slider-2.png'
import home_slider_three from '../../assets/images/home-slider-3.webp'
import home_slider_four from '../../assets/images/home-slider-4.png'

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
        <div>
            <Carousel
                className="w-100 position-relative"
                variant="light"
                touch="true"
                onSlide={(e) => handleOnSlide(e)}
                interval={null}
                keyboard={false}
            >
                {/* Carousel 1 */}
                <Carousel.Item className="carouselItem">
                    <div className="carouselItemDiv-26" style={{
                        color: '#fff',
                    }}>
                        <h3 className="homepage-carousel-div-heading-letter4">
                            TYT - AYT Kaç Günde Biter?
                        </h3>
                        <p className="homepage-carousel-div-text">
                            Doping Hafıza eğitimleri ile{' '}
                            <strong>
                                TYT-AYT'yi kaç günde
                            </strong>
                            {' '}bitirebileceğinizi hesaplayabilirsiniz!
                        </p>
                        <Button variant="light px-4 py-3 homepage-carousel-1-div-button">
                            Hemen Hesaplayın!
                        </Button>
                    </div>
                    <div className="carouselItem-1-ImgDiv">
                        <img
                            className="d-block me-5"
                            src={home_slider_one}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                {/* Carousel 2 */}
                <Carousel.Item
                    style={{ height: '29.05rem' }}
                >
                    <div className="carouselItemDiv-26" style={{
                        color: '#fff',
                    }}>
                        <h3 className="homepage-carousel-div-heading-letter0">
                            Eğitimlerimizde Hangi Methodları Kullanıyoruz?
                        </h3>
                        <p className="homepage-carousel-div-text">
                            Örnek eğitim videolarımızı inceleyerek <br />
                            Doping Hafıza Yeni Nesil Online Eğitim Platformu'nda <br />
                            sizi neler bekliyor görebilirsiniz!
                        </p>
                        <Button variant="primary" className="px-4 py-3 homepage-carousel-2-div-button">
                            Örnek Eğitim Videolarını İzleyin!
                        </Button>
                    </div>
                    <img
                        className="d-block ms-auto me-5"
                        style={{ height: '30rem' }}
                        src={home_slider_two}
                        alt="Second slide"
                    />
                </Carousel.Item>
                {/* Carousel 3 */}
                <Carousel.Item
                    style={{ height: '29.05rem' }}
                >
                    <div className="position-absolute homepage-carousel-div-28rem" style={{
                        color: '#fff',
                    }}>
                        <h3 className="homepage-carousel-div-heading-letter0">
                            2022 YKS'de Erken Kayıt Avantajları!
                        </h3>
                        <p className="homepage-carousel-div-text">
                            Doping Hafıza ile <br />
                            Sınav Sonuçlarınızda Fark Yaratın!
                        </p>
                        <Button variant="primary" className="px-4 py-3 homepage-carousel-2-div-button">
                            Detayları İnceleyin!
                        </Button>
                    </div>
                    <img
                        className="d-block ms-auto me-5"
                        style={{ height: '30rem' }}
                        src={home_slider_three}
                        alt="Third slide"
                    />
                </Carousel.Item>
                {/* Carousel 4 */}
                <Carousel.Item
                    style={{ height: '29.05rem' }}
                >
                    <div className="position-absolute homepage-carousel-div-28rem" style={{
                        color: '#fff',
                    }}>
                        <h3 className="homepage-carousel-div-heading-letter0">
                            2021 YKS Sonuçları Açıklandı!
                        </h3>
                        <p className="homepage-carousel-div-text">
                            Öğrencilerimiz her sene Türkiye <br />
                            derecelerine imza atıyor!
                        </p>
                        <Button variant="primary" className="px-4 py-3 homepage-carousel-2-div-button">
                            Derece Yapan Öğrencilerimiz
                        </Button>
                    </div>
                    <img
                        className="d-block ms-auto me-5"
                        style={{ height: '26rem' }}
                        src={home_slider_four}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomepageCarousel
