<template>
    <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog"
        id="modalSignin">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="h3 mb-3 fw-bold custom-margin">Please Sign In</h1>
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">{{userType}}</a>
                        <ul class="dropdown-menu">
                            <li><a @click="chooseUserType('User')" class="dropdown-item" href="#">User</a></li>
                            <li><a @click="chooseUserType('Manager')" class="dropdown-item" href="#">Manager</a></li>
                        </ul>
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

                        <!--<router-link class="text-sm mt-6 text-center" :to="{ name: 'Register' }">Or don't have an account? <span class="text-at-light-green"> SignUp here</span>
                            </router-link>-->
                    </form>
                </div>
            </div>
        </div>
        <div style="height: 15vh;"></div>
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

        chooseUserType(type){
            this.userType = type;
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



