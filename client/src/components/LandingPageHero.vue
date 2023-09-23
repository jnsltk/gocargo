<template>
    <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 mb-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src="@/assets/volvo.png" class="d-block mx-lg-auto img-fluid" alt="Volvo" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Discover Freedom on Wheels!</h1>
                <p class="lead">Unlock adventure with GoCarGo. Choose from our diverse fleet, book with ease, and hit the road confidently. Your journey starts here!</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Book now</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Read more</button>
                </div>
            </div>
        </div>
        <div class="pricing-header pb-md-4 mx-auto ">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Our fleet</h1>
            <p class="fs-5 lead">Discover a diverse selection of reliable vehicles in our fleet, tailored to suit your every need.</p>
        </div>

        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
           <div class="col" v-for="car in cars" :key="car._id">
                <CarCard :car="car" />
           </div> 
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import CarCard from './CarCard.vue';

    export default {
        components: {
            CarCard,
        },
        data() {
            return {
                cars: [],
            };
        },
        mounted() {
            axios.get("http://localhost:3000/api/v1/cars").then((response) => {
                this.cars = response.data;
            });
        },
    };
</script>

