<template>
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
                                <li><a @click="sortByPrice('Recommend')" class="dropdown-item" href="#fleet">Recommend</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown ms-2">
                            <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">Brand</button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a @click="filterByBrand('All')" class="dropdown-item" href="#fleet">All</a></li>
                                <li><a @click="filterByBrand('Audi')" class="dropdown-item" href="#fleet">Audi</a></li>
                                <li><a @click="filterByBrand('BMW')" class="dropdown-item" href="#fleet">BMW</a></li>
                                <li><a @click="filterByBrand('BYD')" class="dropdown-item" href="#fleet">BYD</a></li>
                                <li><a @click="filterByBrand('BYD')" class="dropdown-item" href="#fleet">Mercedes</a>
                                </li>
                                <li><a @click="filterByBrand('Tesla')" class="dropdown-item" href="#fleet">Tesla</a>
                                </li>
                                <li><a @click="filterByBrand('Toyota')" class="dropdown-item" href="#fleet">Toyota</a>
                                </li>
                                <li><a @click="filterByBrand('Volvo')" class="dropdown-item" href="#fleet">Volvo</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown ms-2">
                            <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">Color</button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a @click="filterByColor('All')" class="dropdown-item" href="#fleet">All</a></li>
                                <li><a @click="filterByColor('Black')" class="dropdown-item" href="#fleet">Black</a>
                                </li>
                                <li><a @click="filterByColor('Blue')" class="dropdown-item" href="#fleet">Blue</a></li>
                                <li><a @click="filterByColor('Grayness')" class="dropdown-item" href="#fleet">Grayness</a>
                                </li>
                                <li><a @click="filterByColor('Green')" class="dropdown-item" href="#fleet">Green</a>
                                </li>
                                <li><a @click="filterByColor('Red')" class="dropdown-item" href="#fleet">Red</a></li>
                                <li><a @click="filterByColor('White')" class="dropdown-item" href="#fleet">White</a>
                                </li>
                                <li><a @click="filterByColor('Yellow')" class="dropdown-item" href="#fleet">Yellow</a>
                                </li>
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
                <CarCard :car="car" :isLastCard="index === car.length - 1"/>
            </div>
        </div>
        <div v-if="showNoResultsMessage" class="alert alert-warning" role="alert">
            No results found.
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CarCard from '../components/CarCard.vue';

export default {
    components: {
        CarCard,
    },
    data() {
        return {
            cars: [],
            showNoResultsMessage: false,
        };
    },

    mounted() {
        axios.get("http://localhost:3000/api/v1/cars").then((response) => {
            this.cars = response.data;
        });
    },

    methods: {
        sortByPrice(order) {
            let url = null;
            if (order === "Recommend") {
                url = `http://localhost:3000/api/v1/cars`;
            } else {
                url = `http://localhost:3000/api/v1/cars/price/${order}`;
            }
            axios.get(url).then((response) => {
                this.cars = response.data;
            });
        },
        filterByBrand(brand) {
            let url = null;
            if (brand === "All") {
                url = `http://localhost:3000/api/v1/cars`;
            } else {
                url = `http://localhost:3000/api/v1/cars/brand/${brand}`;
            }
            axios.get(url).then((response) => {
                if (response.data.length === 0) {
                    this.showNoResultsMessage = true;
                    this.cars = [];
                } else {
                    this.showNoResultsMessage = false;
                    this.cars = response.data;
                }
            })
        },
        filterByColor(color) {
            let url = null;
            if (color === "All") {
                url = `http://localhost:3000/api/v1/cars`;
            } else {
                url = `http://localhost:3000/api/v1/cars/color/${color}`;
            }
            axios.get(url).then((response) => {
                if (response.data.length === 0) {
                    this.showNoResultsMessage = true;
                    this.cars = [];
                } else {
                    this.showNoResultsMessage = false;
                    this.cars = response.data;
                }
            })
        }
    },
};
</script>

<style scoped>
.container {
    scroll-margin-top: 100px;
}

.alert {
    width: 100%;
    text-align: center;
}
</style>