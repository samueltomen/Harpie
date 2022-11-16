import React from "react";
import card1 from '../../../assets/image_card_1r.png'
import card2 from '../../../assets/image_card_2r.png'
import card3 from '../../../assets/image_card_3r.png'


export default function Projets() {
  return (
    <div class="projects">
      <h2>Nos Projets</h2>
      <h3>
        Our mission is to create sustainable work for women in developing
        nations while helping to slow climate change.
      </h3>
      <div class="card">
        <img
          class="card-img-top"
          src={card1}
          alt="lycéen africain"
        />
        <div class="card-body">
          <h4 class="card-title">Lorem ipsum dolor sit.</h4>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            id!
          </p>
          <a href="./our_projects.html" class="card-link">
            En savoir plus
          </a>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src={card2}
          alt="ecolier africain"
        />
        <div class="card-body">
          <h4 class="card-title">Lorem ipsum dolor sit.</h4>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            alias!
          </p>
          <a href="#" class="card-link">
            En savoir plus
          </a>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src={card3}
          alt="Card image"
        />
        <div class="card-body">
          <h4 class="card-title">Lorem ipsum dolor sit.</h4>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            sequi.
          </p>
          <a href="#" class="card-link">
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}
