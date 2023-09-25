<template>
    <div id="fleet" class="container col-xxl-8 px-4 py-5">
       <div class="pricing-header pb-md-4 mx-auto ">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Our fleet</h1>
            <p class="fs-5 lead">Discover a diverse selection of reliable vehicles in our fleet, tailored to suit your every need.</p>
        </div>

        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col mb-3" v-for="(car, index) in cars" :key="car._id">
                <div class="h-100">
                    <CarCard :car="car" :isLastCard="index === 5" />
                </div>
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

<style scoped>
.container {
    scroll-margin-top: 100px;
}
</style>
