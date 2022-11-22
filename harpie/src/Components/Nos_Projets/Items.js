import React from 'react'


export default function Items(props) {
  return (
        <div class="col-md-4 d-flex justify-content-center">
            <div class="card mb-4">
            <img class="card-img-top" alt="Card image cap" src={props.image}/>
                <div class="card-body">
                    <h5 class="card-title text-center">{ props.titre }</h5>
                    <p class="card-text text-center"><small class="text-muted">{props.date}</small></p>
                    <p class="card-text text-center">{props.text}</p>
                    <p class="card-text text-center"><small class="text-muted">{props.maj}</small></p>
                </div>
            </div>
        </div>
  )
}
