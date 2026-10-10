import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className="mycarousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/test.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Featured collabs</h3>
            <p>Sign up to Print your designs </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/Mission.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Mission statement</h3>
            <p>We started this company not to be another trendy streetwear site but one promotes artists and their works through clothing and social media presence</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/blur.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Contact us</h3>
            <p>
              Email us at zodiacculture@live.com to reach us
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel