import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    srcSet="https://www.sevenstarwebsolutions.com/wp-content/uploads/2019/06/react-js-banner.png"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    srcSet="https://www.paragyte.com/img/JavaScript_Banner.png"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    srcSet="https://www.sevenstarwebsolutions.com/wp-content/uploads/2019/06/html-css-banner.png"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;