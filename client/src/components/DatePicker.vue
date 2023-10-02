<template>
    <h2>Pick the starting and ending date for your rental</h2>
    <form @submit.prevent="nextStep">
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="start-date" class="form-label">Start date</label>
                <input 
                type="date"
                class="form-control"
                id="start-date"
                v-model="bookingData.startDate"
                required
                />
            </div>
            <div class="col-md-6 mb-3">
                <label for="end-date" class="form-label">End date</label>
                <input 
                type="date"
                class="form-control"
                id="end-date"
                v-model="bookingData.endDate"
                required
                />
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Next</button>
    </form>
</template>

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
