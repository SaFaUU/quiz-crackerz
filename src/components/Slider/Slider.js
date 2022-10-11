import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

const Slider = () => {
    return (
        <Carousel fade indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    srcSet="https://www.sevenstarwebsolutions.com/wp-content/uploads/2019/06/react-js-banner.png"
                    alt="First slide"
                />
                <Carousel.Caption className='caption-box shadow-sm bg-dark mb-0 bg-gradient'>
                    <h3 className='fw-bold text-warning'>Join Our Awesome Course Now</h3>
                    <p>Our instructors are world class developers Safa Asgar and Jhankar Mahbub.</p>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    srcSet="https://www.paragyte.com/img/JavaScript_Banner.png"
                    alt="Second slide"
                />
                <Carousel.Caption className='caption-box shadow-sm bg-dark mb-0'>
                    <h3 className='fw-bold text-warning'>Join Our Awesome Course Now</h3>
                    <p>Our instructors are world class developers Safa Asgar and Jhankar Mahbub.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    srcSet="https://www.sevenstarwebsolutions.com/wp-content/uploads/2019/06/html-css-banner.png"
                    alt="Third slide"
                />
                <Carousel.Caption className='caption-box shadow-sm bg-dark mb-0'>
                    <h3 className='fw-bold text-warning'>Join Our Awesome Course Now</h3>
                    <p>Our instructors are world class developers Safa Asgar and Jhankar Mahbub.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;