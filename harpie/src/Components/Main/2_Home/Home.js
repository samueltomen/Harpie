import React from "react";

export default function Home() {
  return (
    <div class="main_container">
      <h1 id="h1"class="main_slogan screenLoad" onLoad={effectLoadScreen}>#ensemble, construisons un monde meilleur</h1>
      <div id="p1" class="card screenLoad">
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

// Scroll Animation

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes (){
  const boxes = document.querySelectorAll('.box')
  const triggerBottom = (window.innerHeight / 11 * 8 )
  boxes.forEach(box => {

    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom){
      box.classList.add('show');
    }else{
      box.classList.remove('show')
    }
  })
}


// window.addEventListener('load', screenLoad)

// function screenLoad (){
//   const boxes = document.querySelectorAll('.screenLoad')
//   const triggerBottom = window.innerHeight/1*1
//   boxes.forEach(box => {

//     const boxTop = box.getBoundingClientRect().top

//     if(boxTop < triggerBottom){
//       box.classList.add('loading');
//     }else{
//       box.classList.remove('loading');
//     }
//   })
// }

 
// On load animation


function effectLoadScreen(){

  const loadScreen = document.querySelectorAll('.screenLoad')
  const loadAnimation = (e)=>{
    const id = e.target.id
    const idArray = ["h1","p1"]

    idArray.forEach((element)=> {
        document.getElementById(element).classList.remove("loading")
    });
    document.getElementById(id).classList.add("loading")
}
}