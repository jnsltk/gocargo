<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="py-4" style="margin-left: 20%;">
            <h1>Information</h1>
        </div>
        <div class="row g-3">
            <div class="col-md-7 col-lg-8">
                <form class="needs-validation" novalidate="">
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label for="firstName" class="form-label fs-5">First name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" v-model="manager.fname"
                                required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="lastName" class="form-label fs-5">Last name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" v-model="manager.lname"
                                required>
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="username" class="form-label fs-5">Username</label>
                            <div class="input-group has-validation">
                                <input type="text" class="form-control" id="username" placeholder="" v-model="manager.email"
                                    required>
                                <div class="invalid-feedback">
                                    Your username is required.
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="email" class="form-label fs-5">Email </label>
                            <input type="email" class="form-control" id="email" v-model="manager.email" required>
                            <div class="invalid-feedback">
                                Please enter a valid email address.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="address" class="form-label fs-5">Balance:&nbsp;</label>
                            <span> {{ manager.balance }}</span>
                            <span> SEK</span>
                        </div>

                        <div class="col-12">
                            <label for="address" class="form-label fs-5">Address</label>
                            <input type="text" class="form-control" id="address" v-model="manager.address" required>
                            <div class="invalid-feedback">
                                Please enter a valid address.
                            </div>
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
            managerEmail: 'tomandjerry@gmail.com',
            manager: {},
        };
    },
    mounted() {

        axios.get(`http://localhost:3000/api/v1/managers/${this.managerEmail}`).then((response) => {
            this.manager = response.data;
        });
    },

    methods: {
        updateInformation() {
            axios.patch(`http://localhost:3000/api/v1/managers/${this.manager.email}`, this.manager).then(() => {
                alert('Information update successfully!');
            });
        },
    },

}

</script>

<style></style>