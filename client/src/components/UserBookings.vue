<template>
    <div class="container  text-center">
        <div class="pricing-header pb-md-4 mx-auto ">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Your Bookings</h1>
        </div>
        <div id="bookings" class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col mb-3" v-for="booking in bookings" :key="booking._id">
                <div class="h-100">
                    <h2>Booking info</h2>
                    <ul>
                        <li>Booking reference: {{ booking.bookingReference }}</li>
                        <li>Starting date: {{ booking.startDate }}</li>
                        <li>Ending date: {{ booking.endDate }}</li>
                        <li>Status: {{ booking.content }}</li>
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
                
            </div>
        </div>
        <div v-if="showNoResultsMessage" style="height: 60vh;"></div>

    </div>
</template>

<style scoped>
.car-image {
    width: 250px;
}

@media (max-width: 767.98px) {
    .car-image {
        width: 210px;

    }
}
</style>

<script>
import { getToken, decodeToken } from '../utils/auth'
import { Api } from '@/Api'

const token = getToken();

const user = (token) ? decodeToken(token) : 'logged_out';

export default {
    data() {
        return {
            bookings: [],
            showNoResultsMessage: false,
        };
    },
    async mounted() {
        try {
            const response = await Api.get(`/users/${user.userEmail}/bookings`)
            console.log(response);
            this.bookings = response.data;
            console.log(this.bookings);
            if (!this.bookings || this.bookings.length === 0) {
                this.showNoResultsMessage = true;
            }
        } catch (err) {
            console.log("Error", err);
            window.location.reload();
        }
    },
}
</script>

<style scoped>
#bookings {
    background-color: #f0f0f0;
    padding: 20px;
    border: 1px solid #ccc;
}

.car-image {
    max-width: 100%;
    max-height: 100%;
}
</style>