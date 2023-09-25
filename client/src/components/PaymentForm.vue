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
            submitPaymentInfo() {
                // Submit payment info data to Vuex store
                this.$store.commit('setPaymentDetails', this.paymentData);
                // Implement payment processing logic here (e.g., API request)
                // After successful payment, you can navigate to the confirmation step
                this.$router.push('/booking/confirmation');
            },
            previousStep() {
                this.$router.push('/booking/user-info');
            },
        },
    };
</script>

