import React from "react";

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
          src="./images/image_card_1r.png"
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
          src="./images/image_card_2r.png"
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
          src="./images/image_card_3r.png"
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
