import React from 'react';
import './ReactCarousel.css';
import drawing from '../../Folder/draw-2.png';
import drawing2 from '../../Folder/draw.png';
import music from '../../Folder/music.png';
import dance from '../../Folder/dance.png';

const ReactCarousel = () => {

  return (

    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src={drawing} class="img-fluid d-block w-100" alt="" />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src={music} class="img-fluid d-block w-100" alt="" />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src={drawing2} class="img-fluid d-block w-100" alt="" />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src={dance} class="img-fluid d-block w-100" alt="" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ReactCarousel;