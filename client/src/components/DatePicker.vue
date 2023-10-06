<template>
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 mb-2">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="@/assets/pickup_stock.jpg" class="d-block mx-lg-auto img-fluid" alt="Volvo" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis ">Date selection</h1>
            <p class="lead">Please take a moment to select the dates you prefer for both the pickup and return of your rental car, ensuring a smooth and convenient booking experience.</p>
        </div>
    </div>
    <form class="form" @submit.prevent="nextStep">
        <div class="row justify-content-md-center my-4">
            <div class="col-md-5 mb-3">
                <label for="start-date" class="form-label lead">Pickup date</label>
                <input 
                type="date"
                class="form-control"
                id="start-date"
                v-model="bookingData.startDate"
                required
                />
            </div>
            <div class="col-md-5 mb-3">
                <label for="end-date" class="form-label lead">Return date</label>
                <input 
                type="date"
                class="form-control"
                id="end-date"
                v-model="bookingData.endDate"
                required
                />
            </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-outline-secondary btn-lg px-4">Previous</button>
            <button type="submit" class="btn btn-primary btn-lg px-4">Next</button>
        </div>
    </form>
</template>

<style scoped>
.form {
    min-height: 50vh;
}
</style>

<script>
    export default {
        data() {
            return {
                bookingData: {
                    startDate: '',
                    endDate: ''
                }
            }
        },
        methods: {
            nextStep() {
                // submit booking dates to the vuex store 
                this.$store.commit('setBookingDate', this.bookingData);

                this.$router.push('/booking/confirm-data');
            }
        }
    }
</script>
