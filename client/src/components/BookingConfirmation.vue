<template>
    <div class="row flex-lg-row-reverse align-items-center py-5 mb-2">
        <div class="col-10 col-sm-8 col-lg-6">
            <img :src="carInfo.image" :alt="carInfo.description" class="d-block mx-lg-auto img-fluid">
        </div>
        <div class="col-10 col-sm-8 col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis">Order confirmed!</h1>
            <p class="lead">Order details:</p>
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
        </div>
    </div>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="/" class="btn btn-outline-secondary">Go to home page</a>
        <a href="/useraccount" class="btn btn-primary">View my orders</a>
    </div>
</template>

<style scoped>
.container {
    margin-top: 100px;
}
</style>

<script>
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
 
        mounted() {
            this.userInfo.email = this.$store.state.finalBooking.user.email;
            this.userInfo.firstName = this.$store.state.finalBooking.user.fname;
            this.userInfo.lastName = this.$store.state.finalBooking.user.lname;
            this.userInfo.phoneNumber = this.$store.state.finalBooking.user.phonenumber;
            this.bookingInfo.startDate = this.$store.state.finalBooking.startDate.substring(0, 10);
            this.bookingInfo.endDate = this.$store.state.finalBooking.endDate.substring(0, 10);
            this.carInfo = this.$store.state.finalBooking.car;
            localStorage.clear();
        }
    };
</script>

