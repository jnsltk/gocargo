<template>
    <div class="container  px-4 text-center">
        <div class="pricing-header pb-md-4 mx-auto ">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Manage cars</h1>
        </div>
        <div id="cars" class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col mb-3" v-for="(car, index) in cars" :key="car._id">
                <div class="h-100">
                    <div class="card mb-4 rounded-3 shadow-sm h-100" :car="car" :isLastCard="index === car.length - 1">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">{{ car.brand }}</h4>
                            <img :src="car.image" class="card-img-top" :alt="car.brand">
                        </div>

                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">{{ car.price }} SEK<small
                                    class="text-body-secondary fw-light">/day</small></h1>

                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Color: {{ car.color }}</li>
                                <li class="description-ellipsis">{{ car.description }}</li>
                            </ul>

                            <button type="button" @click="deleteCar(car.registration)"
                                class="w-100 btn btn-lg btn-primary">Delete</button>

                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showNoResultsMessage" class="alert alert-warning pricing-header pb-md-4 mx-auto" role="alert">
                No results found.
            </div>
        </div>
    </div>
</template>

<script>
import { getToken, decodeToken } from '../utils/auth'
import { Api } from '@/Api'

const token = getToken();
const manager = (token) ? decodeToken(token) : 'logged_out';

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
      this.displayCars();  

    },

    methods: {
        displayCars(){
            Api.get(`/managers/${manager.managerEmail}/cars`).then((response) => {
                this.cars = response.data;
                if (this.cars.length === 0) {
                    this.showNoResultsMessage = true;
                }
            });
        },
        deleteCar(registration) {
            const deleteConfirm = window.confirm(`Are you sure you want to delete car ${registration}?`);
            if (deleteConfirm) {
                Api.delete(`/managers/${manager.managerEmail}/cars/${registration}`).then(() => {
                    this.displayCars();
                });
            }

        },
    }

}

</script>

<style scoped>
#cars {
    background-color: #f0f0f0;
    padding: 20px;
    border: 1px solid #ccc;
}

.description-ellipsis {
  white-space: nowrap;      
  overflow: hidden;          
  text-overflow: ellipsis;   
  max-width: 100%;           
}
</style>