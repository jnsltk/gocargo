<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="py-4" style="margin-left: 20%;">
            <h1>Information</h1>
        </div>
        <div class="row g-3">
            <div class="col-md-7 col-lg-8">
                <form class="needs-validation" novalidate="">
                    <div class="row g-3">
                        <div class="col-12">
                            <label for="email" class="form-label fs-5">Email </label>
                            <input type="email" class="form-control" id="email" v-model="user.email" required>
                            <div class="invalid-feedback">
                                Please enter a valid email address.
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="firstName" class="form-label fs-5">First name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" v-model="user.fname"
                                required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="lastName" class="form-label fs-5">Last name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" v-model="user.lname"
                                required>
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="phoneNumber" class="form-label fs-5">Phone Number</label>
                            <div class="input-group has-validation">
                                <input type="text" class="form-control" id="phoneNumber" placeholder="" v-model="user.phonenumber"
                                    required>
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="address" class="form-label fs-5">Balance:&nbsp;</label>
                            <span> {{ user.balance }}</span>
                            <span> SEK</span>
                        </div>

                    </div>

                </form>
            </div>
        </div>
        <button class="w-50 btn btn-primary btn-lg" @click="updateInformation"
            style="margin-top: 5%; margin-left: 7%;">Update Information</button>
        <div style="height: 10vh;"></div>

        
    </main>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            userEmail: 'anyone@gmail.com',
            user: {},
        };
    },
    mounted() {

        axios.get(`http://localhost:3000/api/v1/users/${this.userEmail}`).then((response) => {
            this.user = response.data;
        });
    },

    methods: {
        updateInformation() {
            axios.patch(`http://localhost:3000/api/v1/users/${this.user.email}`, this.user).then(() => {
                alert('Information update successfully!');
            });
        },
    },

}

</script>

