import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
          <img src="people-missions-outline.png"
            alt="Grant with missions group"
            className="people-img" />
          </Carousel.Item>
        <Carousel.Item>
          <img src="people-missions.png"
            alt="Grant with missions group"
            className="people-img" />
          </Carousel.Item>
        </Carousel>
    )
};

export default ImageCarousel;