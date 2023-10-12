<template>
    <div v-if="!isUpdateCar" class="container  px-4 text-center">
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

                            <button type="button" @click="goUpdateCarPage(car)"
                                class="w-100 btn btn-lg btn-primary mb-2">Update</button>
                            <button type="button" @click="deleteCar(car.registration)"
                                class="w-100 btn btn-lg btn-outline-primary">Delete</button>

                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showNoResultsMessage" class="alert alert-warning pricing-header pb-md-4 mx-auto" role="alert">
                No results found.
            </div>
        </div>
    </div>

    <main v-if="isUpdateCar" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="py-4">
            <h1>Update the car</h1>
        </div>
        <form>
            <div class="row g-3">
                <div class="col-md-7 col-lg-8">
                    <form class="needs-validation" novalidate="">
                        <div class="row g-3">

                            <div class="col-12">
                                <label for="registraction" class="form-label fs-5">Registraction</label>
                                <input type="text" class="form-control" id="registraction" placeholder=""
                                    v-model="updateCarData.registration" required>
                                <div class="invalid-feedback">
                                    Valid registration is required.
                                </div>
                            </div>

                            <div class="col-12">
                                <div><label for="image" class="form-label fs-5">Image</label></div>
                                <img :src="updateCarData.image" class="max-image-size">
                                <input type="file" class="form-control" id="image" @change="handleImageUpload"
                                    aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                            </div>

                            <div class="col-12">
                                <label for="brand" class="form-label fs-5">Brand</label>
                                <select class="form-select" id="state" v-model="updateCarData.brand" required>
                                    <option value="">Choose...</option>
                                    <option>Audi</option>
                                    <option>BMW</option>
                                    <option>BYD</option>
                                    <option>Mercedes</option>
                                    <option>Tesla</option>
                                    <option>Toyota</option>
                                    <option>Volvo</option>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="color" class="form-label fs-5">Color</label>
                                <div class="input-group has-validation">
                                    <select class="form-select" id="state" v-model="updateCarData.color" required>
                                        <option value="">Choose...</option>
                                        <option>Black</option>
                                        <option>Blue</option>
                                        <option>Grayness</option>
                                        <option>Green</option>
                                        <option>Red</option>
                                        <option>White</option>
                                        <option>Yellow</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="price" class="form-label fs-5">Price </label>
                                <input type="text" class="form-control" id="price" placeholder=""
                                    v-model="updateCarData.price" required>
                                <div class="invalid-feedback">
                                    Please enter a valid price.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="address" class="form-label fs-5">Description</label>
                                <textarea type="text" class="form-control" id="description" rows="4"
                                    placeholder="Give a discription of the car..." v-model="updateCarData.description"
                                    required></textarea>
                                <div class="invalid-feedback">
                                    Please enter a valid description.
                                </div>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </form>
        <button class="w-50 btn btn-primary btn-lg" @click="updateCar" style="margin-top: 5%; margin-left: 7%;">Update
            Car</button>
    </main>
</template>

<script>
import axios from 'axios';
import { getToken, decodeToken } from '../utils/auth'

const token = getToken();
const manager = (token) ? decodeToken(token) : 'logged_out';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: ' + token
    },
});

export default {
    components: {
    },

    data() {
        return {
            cars: [],
            showNoResultsMessage: false,
            isUpdateCar: false,
            updateCarRegistration: '',
            updateCarData: {},

        }
    },

    mounted() {
        this.displayCars();

    },

    methods: {
        displayCars() {
            axiosInstance.get(`/managers/${manager.managerEmail}/cars`).then((response) => {
                this.cars = response.data;
                if (this.cars.length === 0) {
                    this.showNoResultsMessage = true;
                }
            }).catch(error => {
                console.error('Error:', error);
                window.location.reload();
            });
        },

        goUpdateCarPage(carData) {
            this.isUpdateCar = true;
            this.updateCarData = carData;
            this.updateCarRegistration = carData.registration;
        },

        updateCar() {
            axios.put(`http://localhost:3000/api/v1/cars/${this.updateCarRegistration}`, this.updateCarData).then(() => {
                alert('Information of car update successfully!');
                this.isUpdateCar = false;
            }).catch(error => {
                alert('Information of car update failed. You must modify all fields.');
                console.error('Error:', error);
            });
        },

        deleteCar(registration) {
            const deleteConfirm = window.confirm(`Are you sure you want to delete car ${registration}?`);
            if (deleteConfirm) {
                axiosInstance.delete(`/managers/${manager.managerEmail}/cars/${registration}`).then(() => {
                    this.displayCars();
                }).catch(error => {
                    alert('Failed to delete car.');
                    console.error('Error:', error);
                });
            }

        },
        handleImageUpload(event) {
            const uploadedFile = event.target.files[0];
            if (uploadedFile) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    this.updateCarData.image = e.target.result;
                };

                reader.readAsDataURL(uploadedFile);
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

.max-image-size {
    max-width: 100%;
    max-height: 100%;
}
</style>