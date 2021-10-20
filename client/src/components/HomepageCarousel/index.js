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
        <div style={{ marginBottom: '1rem' }}>
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
                        {
                            window.innerWidth > 550 && (
                                <div>
                                    <h3 className="carouselItemDiv-heading-letter4">
                                        TYT - AYT Kaç Günde Biter?
                                    </h3>
                                    <p className="carouselItemDiv-text">
                                        Doping Hafıza eğitimleri ile{' '}
                                        <strong>
                                            TYT-AYT'yi kaç günde
                                        </strong>
                                        {' '}bitirebileceğinizi hesaplayabilirsiniz!
                                    </p>
                                    <Button
                                        className="carouselItemDivButton px-4 py-3"
                                        style={{ color: 'purple' }}
                                        variant="light">
                                        Hemen Hesaplayın!
                                    </Button>
                                </div>
                            )
                        }
                        {
                            window.innerWidth < 550 && (
                                <div className="carousel-1-Content">
                                    <h3 className="carouselItemDiv-heading-letter4">
                                        TYT - AYT <br /> Kaç Günde Biter?
                                    </h3>
                                    <p className="carouselItemDiv-text">
                                        Doping Hafıza eğitimleri ile <br />
                                        <strong>
                                            TYT-AYT'yi kaç günde
                                        </strong>
                                        {' '}bitirebileceğinizi hesaplayabilirsiniz!
                                    </p>
                                    <Button
                                        className="carouselItemDivButton px-4 py-3"
                                        style={{ color: 'purple' }}
                                        variant="light">
                                        Hemen Hesaplayın!
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                    <div className="carouselItem-1-ImgDiv">
                        <img
                            className="d-block"
                            src={home_slider_one}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                {/* Carousel 2 */}
                <Carousel.Item className="carouselItem">
                    <div className="carouselItemDiv-26" style={{
                        color: '#fff',
                    }}>
                        <div className="carousel-2-Content">
                            <h3 className="carouselItemDiv-heading-letter0">
                                Eğitimlerimizde Hangi Methodları Kullanıyoruz?
                            </h3>
                            <p className="carouselItemDiv-text">
                                Örnek eğitim videolarımızı inceleyerek <br />
                                Doping Hafıza Yeni Nesil Online Eğitim Platformu'nda <br />
                                sizi neler bekliyor görebilirsiniz!
                            </p>
                            <Button variant="primary" className="px-4 py-3 carouselItemDivButton">
                                Örnek Eğitim Videolarını İzleyin!
                            </Button>
                        </div>
                    </div>
                    <div className="carouselItem-2-ImgDiv">
                        <img
                            className="d-block me-5"
                            src={home_slider_two}
                            alt="Second slide"
                        />
                    </div>
                </Carousel.Item>
                {/* Carousel 3 */}
                <Carousel.Item className="carouselItem">
                    <div className="carouselItemDiv-28" style={{
                        color: '#fff',
                    }}>
                        <div className="carousel-3-Content">
                            <h3 className="carouselItemDiv-heading-letter0">
                                2022 YKS'de Erken Kayıt Avantajları!
                            </h3>
                            <p className="carouselItemDiv-text">
                                Doping Hafıza ile <br />
                                Sınav Sonuçlarınızda Fark Yaratın!
                            </p>
                            <Button variant="primary" className="px-4 py-3 carouselItemDivButton">
                                Detayları İnceleyin!
                            </Button>
                        </div>
                    </div>
                    <div className="carouselItem-3-ImgDiv">
                        <img
                            className="d-block me-5"
                            src={home_slider_three}
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
                {/* Carousel 4 */}
                <Carousel.Item className="carouselItem">
                    <div className="carouselItemDiv-28" style={{
                        color: '#fff',
                    }}>
                        {
                            window.innerWidth > 550 && (
                                <div>
                                    <h3 className="carouselItemDiv-heading-letter0">
                                        2021 YKS Sonuçları Açıklandı!
                                    </h3>
                                    <p className="carouselItemDiv-text">
                                        Öğrencilerimiz her sene Türkiye <br />
                                        derecelerine imza atıyor!
                                    </p>
                                </div>
                            )
                        }
                        {
                            window.innerWidth < 550 && (
                                <div className="carousel-4-Content">
                                    <h3 className="carouselItemDiv-heading-letter0">
                                        2021 YKS Sonuçları <br /> Açıklandı!
                                    </h3>
                                    <p className="carouselItemDiv-text">
                                        Öğrencilerimiz her sene Türkiye <br />
                                        derecelerine imza atıyor!
                                    </p>
                                </div>
                            )

                        }

                        <Button variant="primary" className="px-4 py-3 carouselItemDivButton">
                            Derece Yapan Öğrencilerimiz
                        </Button>
                    </div>
                    <div className="carouselItem-4-ImgDiv">
                        <img
                            className="d-block me-5"
                            src={home_slider_four}
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomepageCarousel
