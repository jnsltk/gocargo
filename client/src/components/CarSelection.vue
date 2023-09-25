

<template>
    
    <div>
        <!-- <div class="container d-flex justify-content-center align-items-center">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="car in cars" :key="car.id">
                    <div class="card shadow-sm">
                        <img :class="'car-image'" :src="car.image">
                        <div class="card-body">
                            <h3 class="card-title pricing-card-title">{{ car.price }} SEK<small class="text-body-secondary fw-light">/day</small></h3>
                            <p class="car-description">{{ car.descprition }}</p>
                            <button type="button" class="w-100 btn btn-lg btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import axios from 'axios';

// export default {
//   data() {
//     return {
//       cars: [], 
//     };
//   },
//   created() {
//     this.getCars();
//   },
//   methods: {
//     getCars() {
//       axios.get('http://localhost:3000/api/v1/cars').then(response => {
//           this.data = response.data;
//         }).catch(error => {
//           console.error('Error get data:', error);
//         });
//     },
//   },
// };

export default {
    data() {
        return {
            cars: [
                {
                    id: 1,
                    descprition: "SUV: A versatile vehicle with ample cargo space and off-road capabilities.",
                    image: "/src/assets/images/volvo_white.png",
                    price: 960,
                },
                {
                    id: 2,
                    descprition: "Sedan: A four-door car with a spacious interior, suitable for families and business travelers.",
                    image: "/src/assets/images/tesla_black.png",
                    price: 780,
                },
                {
                    id: 3,
                    descprition: "Sedan: A four-door car with a spacious interior, suitable for families and business travelers.",
                    image: "/src/assets/images/byd_red.png",
                    price: 860,
                },
                {
                    id: 4,
                    descprition: "Sedan: A four-door car with a spacious interior, suitable for families and business travelers.",
                    image: "/src/assets/images/audi_white.png",
                    price: 900,
                },
                {
                    id: 5,
                    descprition: "SUV: A versatile vehicle with ample cargo space and off-road capabilities.",
                    image: "/src/assets/images/volvo_blue.png",
                    price: 890,
                },
                {
                    id: 6,
                    descprition: "SUV: A versatile vehicle with ample cargo space and off-road capabilities.",
                    image: "/src/assets/images/bmw_red.png",
                    price: 990,
                },
            ],
        };
    },
};
</script>

<style scoped>
.car {
    max-width: 100%;
    height: auto;
    margin: 10px;
}

.car-image {
    max-width: 100%;
    height: auto;
}
</style>