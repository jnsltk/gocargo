<template>
    <div class="container  col-xxl-8 px-4 py-5">
        <div class="sidebar">
            <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark account-sidebar">
                <span class="fs-3 right-align">User</span>
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="/" class="nav-link text-white fs-5" aria-current="page">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a @click="showContent('myBookings')" href="#" class="nav-link text-white fs-5" aria-current="page">
                            My bookings
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/#fleet" class="nav-link text-white fs-5">
                            Create booking
                        </a>
                    </li>
                    <li class="nav-item">
                        <a @click="accountCancellation" href="#" class="nav-link text-white fs-5">
                            Cancellation
                        </a>
                    </li>
                    <li class="nav-item">
                        <a @click="showContent('setting')" href="#" class="nav-link text-white fs-5">
                            Setting
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/" @click="logout" class="nav-link text-white fs-5">
                            Sign out
                        </a>
                    </li>
                </ul>
                <hr>
            </div>
        </div>


        <div class="content">
            <div class="child" v-if="currentContent === 'myBookings'">
                <UserBookings />
            </div>

            <div class="child" v-if="currentContent === 'setting'">
                <UserInfoForm />
            </div>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue'
import UserBookings from '../components/UserBookings.vue'
import UserInfoForm from '../components/UserInfoForm.vue'
import { logout } from '@/utils/auth'
import axios from 'axios'
import { getToken, decodeToken } from '../utils/auth'

const token = getToken();

const user = (token) ? decodeToken(token) : 'logged_out';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: ' + token
    },
});

export default {
    components: {
        UserBookings,
        UserInfoForm,
    },

    setup() {
        const currentContent = ref('myBookings');
        const showContent = (contentName) => {
            currentContent.value = contentName;
        };

        

        return {
            currentContent,
            showContent,
        };
    },


    methods: {

        accountCancellation() {
            const deleteConfirm = window.confirm(`Are you sure you want to cancel your account?`);
            if (deleteConfirm) {
                this.logout();
                axiosInstance.delete(`/users/${user.userEmail}`).then((response) => {
                    console.log(response.data);
                })
            }
            
        },

        logout() {
            logout();
        }
    }



}

</script>

<style>
.account-sidebar {
    height: 100vh;
    width: 23%;
    position: fixed;
    top: 0;
    left: 0;
}


.sidebar {
    flex: 1;
}


.content {
    margin-left:20%;
    margin-right :6%;
}
.child {
    position: relative;
    left: 8%;
}
</style>
 