<template>
    <div id="fleet" class="container col-xxl-8 px-4 py-5">
        <div class="pricing-header pb-md-4 mx-auto ">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Our fleet</h1>
            <p class="fs-5 lead">Discover a diverse selection of reliable vehicles in our fleet, tailored to suit your every
                need.</p>
        </div>
        <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
            <div class="container">
                <div class="offcanvas offcanvas-end" tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
                    <div class="offcanvas-body">
                        <ul class="navbar-nav flex-grow-1 justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <svg class="bi" width="24" height="24">
                                        <use xlink:href="#aperture"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-item dropdown ms-5">
                                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">Sort by price</button>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a @click="sortByPrice('asc')" class="dropdown-item" href="#fleet">ASC</a></li>
                                    <li><a @click="sortByPrice('desc')" class="dropdown-item" href="#fleet">DESC</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown ms-2">
                                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">Brand</button>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="#fleet">Audi</a></li>
                                    <li><a class="dropdown-item" href="#fleet">BMW</a></li>
                                    <li><a class="dropdown-item" href="#fleet">BYD</a></li>
                                    <li><a class="dropdown-item" href="#fleet">Tesla</a></li>
                                    <li><a class="dropdown-item" href="#fleet">Toyota</a></li>
                                    <li><a class="dropdown-item" href="#fleet">Volvo</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown ms-2">
                                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">Color</button>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="#fleet">Black</a></li>
                                    <li><a class="dropdown-item" href="#fleet">Blue</a></li>
                                    <li><a class="dropdown-item" href="#fleet">Grayness</a></li>
                                    <li><a class="dropdown-item" href="#fleet">Green</a></li>
                                    <li><a class="dropdown-item" href="#fleet">Red</a></li>
                                    <li><a class="dropdown-item" href="#fleet">White</a></li>
                                    <li><a class="dropdown-item" href="#fleet">Yellow</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="#"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div id="fleet" class="row row-cols-1 row-cols-md-3 mb-3 text-center">
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

    methods: {
        sortByPrice(order) {
            const url = `http://localhost:3000/api/v1/cars/price/${order}`;
            axios.get(url).then((response) => {
                this.cars = response.data;
            });
        },
    },
};
</script>

<style scoped>
.container {
    scroll-margin-top: 100px;
}
</style>
