<template>
    <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row align-items-center g-5 py-5 mb-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis">
                    Almost there!
                </h1>
                <p class="lead">Please provide your card details to continue to the payment.</p>
            </div>
            <div class="col-lg-6">
                <form class="form" @submit.prevent="submitPaymentInfo">
                    <div class="col-md-12 mb-3">
                        <label for="cardNumber" class="form-label lead">Card Number</label>
                        <input
                        type="text"
                        class="form-control"
                        id="cardNumber"
                        v-model="paymentData.cardNumber"
                        required
                        />
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="cardHolder" class="form-label lead">Cardholder's Name</label>
                        <input
                        type="text"
                        class="form-control"
                        id="cardHolder"
                        v-model="paymentData.cardHolder"
                        required
                        />
                    </div>
                    <div class="col-md-12 row mb-5">
                        <div class="col">
                            <label for="expiryDate" class="form-label lead">Expiry Date</label>
                            <input
                            type="text"
                            class="form-control"
                            id="expiryDate"
                            placeholder="MM/YY"
                            v-model="paymentData.expiryDate"
                            required
                            />
                        </div>
                        <div class="col">
                            <label for="cvv" class="form-label lead">CVV</label>
                            <input
                            type="text"
                            class="form-control"
                            id="cvv"
                            v-model="paymentData.cvv"
                            required
                            />
                        </div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button @click="previousStep" class="btn btn-secondary">Previous</button>
                        <button type="submit" class="btn btn-primary">Submit Payment</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-bottom: 50vh;
}
</style>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                paymentData: {
                    cardNumber: '',
                    cardHolder: '',
                    expiryDate: '',
                    cvv: '',
                },
            };
        },
        methods: {
            async submitPaymentInfo() {
                // Submit payment info data to Vuex store
                this.$store.commit('setPaymentDetails', this.paymentData);
                // Implement payment processing logic here (e.g., API request)
                const paymentSuccess = await this.simulatePayment(this.$store.state.paymentDetails);

                // After payment confirmation, the data from the Vuex store is used to create a booking on the back end
                if (paymentSuccess) {
                    // Payment was successful, proceed with booking creation
                    const bookingData = {
                        userEmail: this.$store.state.userInfo.email, // Get user email from Vuex store
                        startDate: this.$store.state.bookingData.bookingDates.startDate,
                        endDate: this.$store.state.bookingData.bookingDates.endDate,
                        status: 'payed',         // Set the status to 'payed'
                        content: 'Booking content placeholder', // Replace with actual content
                        carRegistration: this.$store.state.bookingData.car
                    };  

                    try {
                        // Make a POST request to create a booking
                        console.log(bookingData);
                        const response = await axios.post(`http://localhost:3000/api/v1/users/${bookingData.userEmail}/bookings`, bookingData);

                        // Handle the response (e.g., show confirmation message)
                        console.log('Booking created:', response.data);

                        // Now you can navigate to the final confirmation step
                        this.$router.push('/booking/confirmation');
                    } catch (error) {
                        // Handle any errors (e.g., show an error message)
                        console.error('Error creating booking:', error);
                        this.$router.push('/');
                    }
                }
            },
            previousStep() {
                this.$router.push('/booking/user-info');
            },
            simulatePayment(paymentData) {
                console.log(paymentData);
                return new Promise((resolve) => {
                    // Simulate a successful payment after a short delay
                    setTimeout(() => {
                        resolve(true);
                    }, 1000);
                });
            },
        },
    };
</script>

