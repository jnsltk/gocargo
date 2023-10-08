<template>
    <div class="row flex-lg-row-reverse align-items-center py-5 mb-2">
        <div class="col-10 col-sm-8 col-lg-6">
            <img :src="carInfo.image" :alt="carInfo.description" class="d-block mx-lg-auto img-fluid">
        </div>
        <div class="col-10 col-sm-8 col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis">Your Order</h1>
            <p class="lead">Please make sure all information below is correct.</p>
            <h2 class="fw-bold text-body-emphasis">User details</h2>
            <p class="lead"><strong>User email: </strong> {{ userInfo.email }}</p>
            <p class="lead"><strong>First name: </strong>{{ userInfo.firstName }}</p>
            <p class="lead"><strong>Last name:</strong> {{ userInfo.lastName }}</p>
            <p class="lead"><strong>Phone number:</strong> {{ userInfo.phoneNumber }}</p>
            <h2 class="fw-bold text-body-emphasis">Booking</h2>
            <p class="lead"><strong>Start date:</strong> {{ bookingInfo.startDate }}</p>
            <p class="lead"><strong>End date:</strong> {{ bookingInfo.endDate }}</p>
            <h2 class="fw-bold text-body-emphasis">Car</h2>
            <p class="lead"><strong>Brand:</strong> {{ carInfo.brand }}</p>
            <p class="lead"><strong>Color:</strong> {{ carInfo.color }}</p>
            <p class="lead"><strong>Description:</strong> {{ carInfo.description }}</p>
            <p class="lead">
                <strong>You may also like: </strong>
                 <a :href="carsHref">Click here to view other cars</a>
            </p>
        </div>
    </div>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button @click="prevStep" class="btn btn-outline-secondary">Previous</button>
        <button @click="nextStep" class="btn btn-primary">Confirm and continue to payment</button>
    </div>
</template>

<script>
import { decodeToken, getToken } from '../utils/auth'
import axios from 'axios'

const token = getToken();

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
            userInfo: {
                email: '',
                firstName: '',
                lastName: '',
                phoneNumber: ''
            },
            bookingInfo: {
                car: '',
                startDate: '',
                endDate: ''
            },
            carInfo: {},
            carsHref: '',
        }
    },
    async mounted() {
        const userEmail = decodeToken(token).userEmail;
        try {

            const response = await axiosInstance.get(`/users/${userEmail}`)

            this.userInfo = {
                email: response.data.email,
                firstName: response.data.fname,
                lastName: response.data.lname,
                phoneNumber: response.data.phonenumber,
            }

            this.bookingInfo = {
                car: this.$store.state.bookingData.car,
                startDate: this.$store.state.bookingData.bookingDates.startDate,
                endDate: this.$store.state.bookingData.bookingDates.endDate,
            }

            const carRes = await axiosInstance.get(`/cars/${this.bookingInfo.car}`);

            this.carInfo = carRes.data;
            this.carsHref = this.carInfo.links.cars.href;

            this.$store.commit('setUserInfo', this.userInfo);

        } catch (err) {
            console.log(err);
        }

    },
    methods: {
        nextStep() {
            this.$router.push('/booking/payment');
        },
        prevStep() {
            this.$router.push('/booking/date');
        }
    }
}
</script>

