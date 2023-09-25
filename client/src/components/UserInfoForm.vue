<template>
    <form @submit.prevent="nextStep">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
            type="email"
            class="form-control"
            id="email"
            v-model="userInfoData.email"
            required
            />
        </div>
        <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input
            type="text"
            class="form-control"
            id="firstName"
            v-model="userInfoData.firstName"
            required
            />
        </div>
        <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input
            type="text"
            class="form-control"
            id="lastName"
            v-model="userInfoData.lastName"
            required
            />
        </div>
        <div class="mb-3">
            <label for="phoneNumber" class="form-label">Phone Number</label>
            <input
            type="tel"
            class="form-control"
            id="phoneNumber"
            v-model="userInfoData.phoneNumber"
            required
            />
        </div>
        <button type="submit" class="btn btn-primary">Next</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                userInfoData: {
                    email: '',
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                },
            };
        },
        mounted() {
            // Populate form fields with saved data when navigating back
            if (this.$store.state.userInfo) {
                this.userInfoData = { ...this.$store.state.userInfo };
            }
        },
        methods: {
            nextStep() {
                // Submit user info data to Vuex store
                this.$store.commit('setUserInfo', this.userInfoData);

                // Navigate to the next step
                this.$router.push('/booking/payment');
            },
        },
    };
</script>

