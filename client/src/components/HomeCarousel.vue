<template>
  <div class="container" id="mainContainer">
    <div class="row mt-5 mb-5">
      <div class="col-sm-12">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
              aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/32.png" alt="car" class="bottom-image img-fluid">

              <div class="container">
                <div class="carousel-caption  d-flex flex-column ">
                  <div class="text-start">
                    <h1 class="display-6 display-sm-5" style="color: rgb(255, 255, 255);">Discover Freedom </h1>
                    <h1 class="display-6 display-sm-5" style="color: rgb(255, 255, 255);">on Wheels!</h1>
                    <h2 class="display-6 display-sm-5" style="color: rgb(255, 255, 255);">Unlock adventure with </h2>
                    <h2 class="display-6 display-sm-5 " style="color: black;">GoCarGo</h2>
                  </div>
                  <p><router-link to="/login" class="btn btn-lg btn-primary">Sign up today</router-link></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="@/assets/car4.png" alt="car" class="bottom-image img-fluid">

              <div class="container">
                <div class="carousel-caption ">
                  <div class="text-start">
                    <h1 class="display-6 display-sm-4" style="color: black;">It is time to book now</h1>
                    <h3 class="display-6 display-sm-4 ">Choose from our diverse fleet, </h3>
                    <h3 class="display-6 display-sm-4 ">book with ease,and hit the road confidently.</h3>
                    <h3 class="display-6 display-sm-4 ">Your journey starts here!.</h3>
                  </div>
                  <button type="button" class="btn btn-lg btn-primary" @click="redirectToBooking">BOOK NOW</button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="@/assets/5.png" alt="car" class="bottom-image img-fluid">

              <div class="container">
                <div class="carousel-caption text-start">
                  <h1 class="display-6 display-sm-4" style="color: white;">READ MORE</h1>
                  <p></p>
                  <p class="text-start"><a class="btn btn-lg btn-primary " href="#about">ABOUT US</a></p>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev " type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon " aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import * as Bootstrap from 'bootstrap';




export default {


  mounted() {
    var myCarousel = document.querySelector('#myCarousel')
    new Bootstrap.Carousel(myCarousel)
  },


  methods: {
    redirectToBooking() {

      this.$router.push('/booking');
    }
  }
}
</script> 
        
<style>
#mainContainer {

  padding: 20px;
}

.carousel-item {
  height: 48rem;
  background-size: cover;
  background-position: center;
}

.bottom-image {
  position: absolute;
  bottom: 0;

}

.img-fluid {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media (max-width: 767.98px) {
  .carousel-item {
    height: 300px;
  }
}



@media (max-width: 767.98px) {
  .carousel-caption h1 {
    font-size: 0.5rem;
  }

  .carousel-caption h2,
  .carousel-caption h3 {
    font-size: 0.3rem;
  }

  .btn-primary.btn-lg {
    font-size: 0.6rem;
    padding: 4px 6px;
  }
}

@media (max-width: 767.98px) {

  .carousel-control-prev,
  .carousel-control-next {
    font-size: 0.2rem;
  }
}</style>
