<template>
    <nav class="sticky-top" >
        <BNavbar toggleable="lg" variant="dark" v-b-color-mode="'dark'" placement="fixed">
        <BNavbarBrand href=""></BNavbarBrand>
        <BNavbarToggle target="sortbar-toggle-collapse">
        </BNavbarToggle>

        <BCollapse id="sortbar-toggle-collapse" class="flex-grow-1 justify-content-between" is-nav>
                    <BNavItem>
                        <a class="nav-link" href="#">
                        </a>
                    </BNavItem>
                    <BNavItem href="#fleet">
                        <BDropdown v-model="dd1" text="Sort by price" variant="dark">
                            <BDropdownItem><a @click="sortByPrice('asc')" >ASC</a></BDropdownItem>
                            <BDropdownItem><a @click="sortByPrice('desc')" >DESC</a></BDropdownItem>
                            <BDropdownItem><a @click="sortByPrice('Recommend')" >Recommend</a></BDropdownItem>
                        </BDropdown>
                    </BNavItem>
                    <BNavItem href="#fleet">
                        <BDropdown v-model="dd2" text="Filter by brand" variant="dark">
                            <BDropdownItem><a @click="filterByBrand('All')" >All</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByBrand('Audi')" >Audi</a></BDropdownItem>                            
                            <BDropdownItem><a @click="filterByBrand('BMW')" >BMW</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByBrand('BYD')" >BYD</a></BDropdownItem>                            
                            <BDropdownItem><a @click="filterByBrand('BYD')" >Mercedes</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByBrand('Tesla')" >Tesla</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByBrand('Toyota')" >Toyota</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByBrand('Volvo')" >Volvo</a></BDropdownItem>
                        </BDropdown>
                    </BNavItem>
                    <BNavItem href="#fleet">
                        <BDropdown v-model="dd3" text="Filter by color" variant="dark">
                            <BDropdownItem><a @click="filterByColor('All')" >All</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByColor('Black')" >Black</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByColor('Blue')" >Blue</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByColor('Grayness')" >Grayness</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByColor('Green')" >Green</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByColor('Red')" >Red</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByColor('White')" >White</a></BDropdownItem>
                            <BDropdownItem><a @click="filterByColor('Yellow')" >Yellow</a></BDropdownItem>
                        </BDropdown>
                    </BNavItem>
                    <BNavItem ><a class="nav-link" href="#"></a></BNavItem>
        </BCollapse>
        </BNavbar>
    </nav>
    
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col mb-3" v-for="(car, index) in cars" :key="car._id">
            <div class="h-100">
                <CarCard :car="car" :isLastCard="index === car.length - 1" />
            </div>
        </div>
        <div v-if="showNoResultsMessage" class="alert alert-warning" role="alert">
            No results found.
        </div>
    </div>
</template>

<script>
import CarCard from './CarCard.vue';
import { Api } from '@/Api';
import { ref } from 'vue'


export default {
    setup() {
        const dd1 = ref(false);
        const dd2 = ref(false);
        const dd3 = ref(false);

        return {
            dd1,
            dd2,
            dd3
        }
    },
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
        Api.get("/cars").then((response) => {
            this.cars = response.data;
        });
    },

    methods: {
        sortByPrice(order) {
            let url = null;
            if (order === "Recommend") {
                url = `/cars`;
            } else {
                url = `/cars/price/${order}`;
            }
            Api.get(url).then((response) => {
                this.cars = response.data;
            });
        },
        filterByBrand(brand) {
            let url = null;
            if (brand === "All") {
                url = `/cars`;
            } else {
                url = `/cars/brand/${brand}`;
            }
            Api.get(url).then((response) => {
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
                url = `/cars`;
            } else {
                url = `/cars/color/${color}`;
            }
            Api.get(url).then((response) => {
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
