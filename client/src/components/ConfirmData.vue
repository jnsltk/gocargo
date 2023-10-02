<template>
    <h1>Order data</h1>
    <p>Please check and confirm your order</p>
    <h2>User details</h2>
    <p>User email: {{ userInfo.email }}</p>
    <p>First name: {{ userInfo.firstName }}</p>
    <p>Last name: {{ userInfo.lastName }}</p>
    <h2>Booking</h2>
    <p>Start date: {{ bookingInfo.startDate }}</p>
    <p>End date: {{ bookingInfo.endDate }}</p>
    <h2>Car</h2>
    <img :src="carInfo.image" :alt="carInfo.description" class="car-image">
    <p>Brand: {{ carInfo.brand }}</p>
    <p>Color: {{ carInfo.color }}</p>
    <p>Description: {{ carInfo.description }}</p>

    <button @click="previousStep" class="btn btn-secondary">Previous</button>
    <button @click="nextStep" class="btn btn-primary">Confirm and continue to payment</button>
</template>

<style scoped>
    .car-image {
        width: 300px;
    }
</style>

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
                carInfo: {}
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
                    phoneNumber: response.data.phoneNo,
                }

                this.bookingInfo = {
                    car: this.$store.state.bookingData.car,
                    startDate: this.$store.state.bookingData.bookingDates.startDate,
                    endDate: this.$store.state.bookingData.bookingDates.endDate,
                }

                const carRes = await axiosInstance.get(`/cars/${this.bookingInfo.car}`);

                this.carInfo = carRes.data;

                console.log(this.carInfo);

                this.$store.commit('setUserInfo', this.userInfo);

            } catch (err) {
                console.log(err);
            }

        },
        methods: {
            nextStep() {
                this.$router.push('/booking/payment');
            }
        }
    }
</script>

