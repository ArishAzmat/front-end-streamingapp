import React from "react";
import Header from "./Header";
import Movies  from "./movies";
import Watch from "./watch";
const Home = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="images/4f3d399a-3763-4246-a1cd-260cfd18d2ca._UR3000,600_SX1500_FMwebp_.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="images/9cac7433-226d-4386-b03c-7845dded29f9._UR3000,600_SX1500_FMwebp_.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="images/8e35e161-29aa-4026-a720-186cecc58d07._UR3000,600_SX1500_FMwebp_.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    <Movies/>
    </>
  );
};

export default Home;
