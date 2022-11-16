import React from "react";
import imgCarousel1 from '../../../assets/carousel1.png'
import imgCarousel2 from '../../../assets/carousel2.png'
import imgCarousel3 from '../../../assets/homePage.png'

export default function NosHistoires() {
  return (
    <div class="d-flex align-items-center py-5 mh-100">
      <a
        class="carousel-control-prev text-decoration-none "
        href="#mycarousel"
        role="button"
        data-bs-slide="prev"
      ></a>
      <div class="container_carousel">
        <h2 class="our_stories_title">NOS HISTOIRES</h2>
        <div id="mycarousel" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-bs-target="#mycarousel"
              data-bs-slide-to="0"
              class="active"
            ></li>
            <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="our_stories"></div>
            <div class="carousel-item active">
              <div class="row">
                <div class="col-lg-6 ">
                  <img
                    src={imgCarousel1}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="col-lg-6 ">
                  <div class=" d-flex flex-column justify-content-center my-5 px-3">
                    <p class="review text-center">
                      “I am a person who was helped by this organization. Before
                      they gave me assistance, I was really struggling with this
                      issue, but now my life is better.”
                    </p>
                    <div class="name d-flex align-items-center justify-content-center"></div>
                    <p class="job text-center">
                      Eddy, Manufacter Man In Palestine
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-6 ">
                  <img
                    src={imgCarousel2}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="col-lg-6 ">
                  <div class=" d-flex flex-column justify-content-center my-5 px-3">
                    <p class="review text-center">
                      “I am a person who was helped by this organization. Before
                      they gave me assistance, I was really struggling with this
                      issue, but now my life is better.”
                    </p>
                    <div class="name d-flex align-items-center justify-content-center"></div>
                    <p class="job text-center">
                      Eddy, Manufacter Man In Palestine
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-6 ">
                  <img
                    src={imgCarousel3}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="col-lg-6 ">
                  <div class=" d-flex flex-column justify-content-center my-5 px-3">
                    <p class="review text-center">
                      “I am a person who was helped by this organization. Before
                      they gave me assistance, I was really struggling with this
                      issue, but now my life is better.”
                    </p>
                    <div class="name d-flex align-items-center justify-content-center"></div>
                    <p class="job text-center">
                      Eddy, Manufacter Man In Palestine
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-next text-decoration-none "
        href="#mycarousel"
        role="button"
        data-bs-slide="next"
      ></a>
    </div>
  );
}
