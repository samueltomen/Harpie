import React from "react";
import {Link} from 'react-router-dom'
import card1 from '../../../assets/image_card_1r.png'
import card2 from '../../../assets/image_card_2r.png'
import card3 from '../../../assets/image_card_3r.png'


export default function Projets() {
  return (
    <div class="projects box">
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
          <Link to='/NosProjets'><a href="#" class="card-link" onClick={activeCardsNosProjets}>
            En savoir plus
          </a></Link>
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
          <Link to='/NosProjets'><a href="#" class="card-link" onClick={activeCardsNosProjets}>
            En savoir plus
          </a></Link>
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
          <Link to='/NosProjets'><a href="#" class="card-link" onClick={activeCardsNosProjets}>
            En savoir plus
          </a></Link>
        </div>
      </div>
    </div>
  );
}


function activeCardsNosProjets() {
  const id = 2;
  const idArray = ["1","2","3"];
  window.scroll(0,0);

  idArray.forEach((element)=> {
      document.getElementById(element).classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}