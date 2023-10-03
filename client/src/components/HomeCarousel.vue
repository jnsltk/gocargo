<template>
    <div class="container">
       <div class="row mt-5 mb-5">
         <div class="col-sm-12">
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" >
        <img src="@/assets/32.png" alt="car" class="bottom-image img-fluid" >
        
        <div class="container">
          <div class="carousel-caption  d-flex flex-column ">
            <div class= "text-start">
            <h1 style="color: rgb(255, 255, 255);">Discover Freedom  </h1>
            <h1 style="color: rgb(255, 255, 255);">on Wheels!</h1>
            <h2  style="color: rgb(255, 255, 255);">Unlock adventure with </h2>
            <h2 style="color: black;">GoCarGo</h2>
            </div>
            <p><router-link to="/login" class="btn btn-lg btn-primary">Sign up today</router-link></p>
          </div>
        </div>
      </div>
      <div class="carousel-item" >
        <img src="@/assets/3.png" alt="car" class="bottom-image img-fluid" >
        
        <div class="container" >
            
          <div class="carousel-caption">
            
            <h1 style="color: black;">It is time to Book now.</h1>
            <p>Choose from our diverse fleet, book with ease,</p>
            <p>and hit the road confidently.</p>
            <p>Your journey starts here!.</p>
            <p></p>
            <button type="button" class="btn btn-lg btn-primary"  @click= "redirectToBooking">BOOK NOW</button>
          </div>
        </div>
      </div>
      <div class="carousel-item" >
        <img src="@/assets/car1.png" alt="car" class="bottom-image img-fluid" >

        <div class="container">
          <div class="carousel-caption text-start">
            <h1 style="color: black;">READ MORE</h1>
            <p></p>
            <p class="text-start"><a class="btn btn-lg btn-primary " href="#about">About Us</a></p>
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
    },
    

     methods: {
            redirectToBooking(){
                
                this.$router.push('/booking/user-info');
            }
        }
    }
   </script>
        
   <style>
.carousel-item {
    height: 48rem;
    background-size: cover;
    background-position: center;
}
    .bottom-image{
    position: absolute;
    bottom: 0;
    
 }
 .img-fluid {
    object-fit: cover;
    width: 100%;
    height: 100%;
}


</style>
