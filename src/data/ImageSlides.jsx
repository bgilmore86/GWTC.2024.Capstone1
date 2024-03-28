import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Attractions.css'; // Import your custom CSS

import stone from '../images/stone.jpg';
import machu from '../images/machu.jpg';
import pyramids from '../images/pyramids.jpg';
import colosseum from '../images/colosseum.jpg';
import redeem from '../images/redeem.jpg';
import sphinx from '../images/sphinx.jpg';
import wall from '../images/wall.jpg';
import eiffle from '../images/eiffle.jpg';
import pisa from '../images/pisa.jpg';

function ImageSlides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  const images = [
    {src: stone, alt: "Stonehenge", location: "England"},
    {src: machu, alt: "Machu Picchu", location: "Peru"},
    {src: pyramids, alt: "Pyramids of Giza", location: "Egypt"},
    {src: colosseum, alt: "Colosseum", location: "Italy"},
    {src: redeem, alt: "Christ the Redeemer", location: "Brazil"},
    {src: sphinx, alt: "The Sphinx", location: "Egypt"},
    {src: wall, alt: "Great Wall of China", location: "China"},
    {src: eiffle, alt: "Eiffel Tower", location: "France"},
    {src: pisa, alt: "Leaning Tower of Pisa", location: "Italy"}
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, i) => (

        <Carousel.Item key={i}>
          <img
            className="carousel-image"
            src={image.src}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h2>{image.alt}</h2>
            <p>{image.location}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlides;
