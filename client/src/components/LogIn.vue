<template>
    <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog"
        id="modalSignin">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="h3 mb-3 fw-bold custom-margin">Please Sign In</h1>
                    <BDropdown v-model="dd" variant="white" :text=userType>
                        <BDropdownItem><a @click="chooseUserType('User')" class="dropdown-item" href="#">User</a></BDropdownItem>
                        <BDropdownItem><a @click="chooseUserType('Manager')" class="dropdown-item" href="#">Manager</a></BDropdownItem>
                    </BDropdown>
                </div>

                <div class="modal-body p-5 pt-0">
                    <form class="" @submit.prevent="login">

                        <div class="form-floating mb-3">
                            <input type="email" class="form-control rounded-3" v-model="email" id="floatingInput"
                                placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control rounded-3" v-model="password" id="floatingPassword"
                                placeholder="Password" @input="validatePassword">
                            <label for="floatingPassword">Password</label>
                        </div>


                        <button class="btn btn-primary w-100 py-2 custom-margin " type="submit"
                            :disabled="!isPasswordValid">Sign In</button>

                        <hr class="my-4">
                        <h2 class="fs-5 fw-normal mb-3">No account yet</h2>

                        <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit"
                            @click="redirectToLogin">
                            <svg class="bi me-1" width="16" height="16"></svg>
                            Sign up with Email
                        </button>
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
import { ref } from 'vue'

export default {
    setup() {
        const dd = ref(false);

        return {
            dd
        }
    },
    data() {
        return {
            email: '',
            password: '',
            isPasswordValid: false,
            userType: 'User',

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
            login(this.email, this.password, this.userType);
        },

        chooseUserType(type) {
            this.userType = type;
        },

        redirectToLogin(){
            this.$router.push('/register');
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



