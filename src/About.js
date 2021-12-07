
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';


function About() {
  return (
    <Container>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="pic15.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="pic13.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      src="pic10.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="pic8.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
</Container> 
  );
}

export default About;
