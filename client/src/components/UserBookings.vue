<template>
    <div id="bookings" class="row row-cols-1 row-cols-md-3 mb-3 text-center">
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

    const user = decodeToken(token)
    
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
            };
        },
        async mounted() {
            axiosInstance.get(`/users/${user.userEmail}/bookings`)
                .then((response) => {
                    this.bookings = response.data;
                    console.log(this.bookings);
                })
                .catch((err) => {
                    // Add proper error handling <later></later>;
                    console.log("hello", err);
                });
        },
    }
</script>

