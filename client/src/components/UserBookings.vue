<template>
    <div id="bookings" class="row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="pricing-header pb-md-4 mx-auto ">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Your Bookings</h1>
        </div>
        <div class="col mb-3" v-for="booking in bookings" :key="booking._id">
            <div class="h-100">
                <h2>Booking info</h2>
                <ul>
                    <li>Booking reference: {{ booking.bookingReference }}</li>
                    <li>Starting date: {{ booking.startDate }}</li>
                    <li>Ending date: {{ booking.endDate }}</li>
                </ul>
                <h3>Car data:</h3>
                <img :src="booking.car.image" :alt="booking.car.brand" class="car-image">
                <ul>
                    <li>Brand: {{ booking.car.brand }}</li>
                    <li>Registration: {{ booking.car.registration }}</li>
                    <li>Description: {{ booking.car.description }}</li>
                </ul>

            </div>
        </div>
        <div v-if="showNoResultsMessage" class="pricing-header pb-md-4 mx-auto">
            <div class="alert alert-warning">
                You haven't booked yet!
            </div>
            <div class="pricing-header pb-md-4 mx-auto">
                <a href="/#fleet">Create a booking now</a>
            </div>
            <div style="height: 60vh;"></div>
        </div>

    </div>
</template>

<style scoped>
.car-image {
    width: 300px;
}
</style>

<script>
import axios from 'axios';
import { getToken, decodeToken } from '../utils/auth'

const token = getToken();

const user = (token) ? decodeToken(token) : 'logged_out';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: ' + token
    },
});

export default {
    data() {
        return {
            bookings: [],
            showNoResultsMessage: false,
        };
    },
    async mounted() {
        axiosInstance.get(`/users/${user.userEmail}/bookings`)
            .then((response) => {
                this.bookings = response.data;
                console.log(this.bookings);
                if (this.bookings.length === 0) {
                    this.showNoResultsMessage = true;
                }
            })
            .catch((err) => {
                // Add proper error handling <later></later>;
                console.log("hello", err);
            });
    },
}
</script>

