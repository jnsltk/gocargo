<template>
    <div class="container">
       <div class="row mt-5 mb-5">
         <div class="col-sm-12">
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" >
        <img src="@/assets/volvo.png" alt="car" class="bottom-image" >
       
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#d3d3d3"/></svg>
        <div class="container">
          <div class="carousel-caption text-end d-flex flex-column align-items-end">
            <h1 style="color: black;">Discover Freedom  </h1>
            <h1 style="color: black;">on Wheels!</h1>
            <h2  style="color: black;">Unlock adventure with </h2>
            <h2 style="color: black;">GoCarGo</h2>
            <p>Choose from our diverse fleet, book with ease,</p>
            <p>and hit the road confidently.</p>
            <p>Your journey starts here!.</p>
             
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#d3d3d3"/></svg>

        <div class="container">
            <img src="@/assets/3.png" alt="car" class="bottom-image" >
          <div class="carousel-caption">
            
            <h1 style="color: black;">It is time to Book now.</h1>
            <p></p>
            <p><a class="btn btn-lg btn-primary" href="#">BOOK NOW</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#d3d3d3"/></svg>

        <div class="container">
            <img src="@/assets/car1.png" alt="car" class="bottom-image" >
          <div class="carousel-caption text-end">
            <h1 style="color: black;">READ MORE</h1>
            <p></p>
            <p><a class="btn btn-lg btn-primary" href="#">About Us</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
    
     
    mounted(){
       var myCarousel = document.querySelector('#myCarousel')
          new Bootstrap.Carousel(myCarousel)
    }
   }
   </script>
        
   <style>
.carousel-item{
        height:32rem;
              
        }
 
.bottom-image {
    position: absolute;
    bottom: 0;
}

</style>
