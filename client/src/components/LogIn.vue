<template>
    <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="h3 mb-3 fw-bold custom-margin">Please Sign In</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body p-5 pt-0">
                    <form class="" @submit.prevent="login" >

                        <div class="form-floating mb-3">
                            <input type="email" class="form-control rounded-3" v-model="email" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control rounded-3" v-model="password" id="floatingPassword" placeholder="Password" @input="validatePassword">
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="form-check text-start my-3">
                            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                        </div>
                        <button class="btn btn-primary w-100 py-2 custom-margin " type="submit" :disabled="!isPasswordValid">Sign In</button>

                        <!--<router-link class="text-sm mt-6 text-center" :to="{ name: 'Register' }">Or don't have an account? <span class="text-at-light-green"> SignUp here</span>
                            </router-link>-->
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import { login } from '../utils/auth'

    export default {
        data() {
            return {
                email: '',
                password: '',
                isPasswordValid: false,

            };
        },

        methods: {
            validatePassword() {
                if (this.password.length >= 6) {
                    this.isPasswordValid = true;
                } else {
                    this.isPasswordValid = false;
                }
            },
            async login() {
                login(this.email, this.password);
            }
        },
    };
</script>

<style>
.custom-margin {
    margin-bottom: 10px;
}
.small-text {
    font-size: 6px; 
}

</style>



