<template>
    <form @submit.prevent="submitPaymentInfo">
        <div class="mb-3">
            <label for="cardNumber" class="form-label">Card Number</label>
            <input
            type="text"
            class="form-control"
            id="cardNumber"
            v-model="paymentData.cardNumber"
            required
            />
        </div>
        <div class="mb-3">
            <label for="cardHolder" class="form-label">Cardholder's Name</label>
            <input
            type="text"
            class="form-control"
            id="cardHolder"
            v-model="paymentData.cardHolder"
            required
            />
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="expiryDate" class="form-label">Expiry Date</label>
                <input
                type="text"
                class="form-control"
                id="expiryDate"
                placeholder="MM/YY"
                v-model="paymentData.expiryDate"
                required
                />
            </div>
            <div class="col-md-6 mb-3">
                <label for="cvv" class="form-label">CVV</label>
                <input
                type="text"
                class="form-control"
                id="cvv"
                v-model="paymentData.cvv"
                required
                />
            </div>
        </div>
        <button @click="previousStep" class="btn btn-secondary">Previous</button>
        <button type="submit" class="btn btn-primary">Submit Payment</button>
    </form>
</template>

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
                        startDate: '2023-10-01', // Replace with actual start date
                        endDate: '2023-10-07',   // Replace with actual end date
                        status: 'payed',         // Set the status to 'payed'
                        content: 'Booking content placeholder', // Replace with actual content
                        carRegistration: 'ABC129', // Replace with actual car registration
                    };  

                    try {
                        // Make a POST request to create a booking
                        console.log(bookingData);
                        const response = await axios.post(`http://localhost:3000/api/v1/users/${bookingData.userEmail}/bookings`, bookingData);

                        // Handle the response (e.g., show confirmation message)
                        console.log('Booking created:', response.data);

                        // Now you can navigate to the final confirmation step
                        this.$router.push('/confirmation');
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

