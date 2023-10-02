<template>
    <div id="fleet" class="container  px-4">
        <div class="pricing-header pb-md-4 mx-auto ">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Manage cars</h1>
        </div>
        <div id="fleet" class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col mb-3" v-for="(car, index) in cars" :key="car._id">
                <div class="h-100">
                    <div class="card mb-4 rounded-3 shadow-sm h-100"  :car="car" :isLastCard="index === car.length - 1">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">{{ car.brand }}</h4>
                            <img :src="car.image" class="card-img-top" :alt="car.brand">
                        </div>

                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">{{ car.price }} SEK<small
                                    class="text-body-secondary fw-light">/day</small></h1>

                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Color: {{ car.color }}</li>
                                <li>{{ car.description }}</li>
                            </ul>
                            
                            <button type="button" class="w-100 btn btn-lg btn-primary">Delete</button>

                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showNoResultsMessage" class="alert alert-warning" role="alert">
                No results found.
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    components: {
    },

    data() {
        return {
            cars: [],
            showNoResultsMessage: false,
        }
    },

    mounted() {
        axios.get("http://localhost:3000/api/v1/cars").then((response) => {
            this.cars = response.data;
        });
    },

}

</script>