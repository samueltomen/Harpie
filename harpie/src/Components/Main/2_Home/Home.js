import React from "react";

export default function Home() {
  return (
    <div class="main_container">
      <h1 class="main_slogan">#ensemble, construisons un monde meilleur</h1>
      <div class="card">
        <div class="card-header">LA SOLUTION</div>
        <div class="card-body">
          <h4 class="card-title">
            Financer chaque mois un projet qui change la vie, grace à une idée
            simple
          </h4>
          <a href="#">
            <p class="card-text">En savoir plus à propos de notre solution</p>
          </a>
        </div>
      </div>
    </div>
  );
}

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes (){
  const boxes = document.querySelectorAll('.box')
  const triggerBottom = (window.innerHeight / 8 * 7 )
  boxes.forEach(box => {

    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom){
      box.classList.add('show')
    }else{
      box.classList.remove('show')
    }
  })
}


 