<template>
    <div class="container  col-xxl-8 px-4 py-5">
        <div class="sidebar">
            <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark account-sidebar">
                <span class="fs-3 right-align">User</span>
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="/" class="nav-link fs-5" aria-current="page">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a @click="showContent('myBookings')" href="#" class="nav-link fs-5" aria-current="page">
                            My bookings
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/#fleet" class="nav-link fs-5">
                            Create booking
                        </a>
                    </li>
                    <li class="nav-item">
                        <a @click="showContent('setting')" href="#" class="nav-link fs-5">
                            Setting
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" @click="logout" class="nav-link fs-5">
                            Sign out
                        </a>
                    </li>
                    <li class="nav-item">
                        <a @click="accountCancellation" href="#" class="nav-link fs-5">
                            Delete account
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
import { getToken, decodeToken } from '../utils/auth'
import { Api } from '@/Api'

const token = getToken();

const user = (token) ? decodeToken(token) : 'logged_out';

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
                Api.delete(`/users/${user.userEmail}`).then((response) => {
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

<style scoped>
.account-sidebar {
    height: 100vh;
    width: 25%;
    position: fixed;
    top: 0;
    left: 0;
}

@media (max-width: 767.98px) {

.account-sidebar .fs-3 {
    font-size: 1.0rem !important;
}

.account-sidebar .fs-5 {
    font-size: 0.8rem !important;
}
}

a {
    color: #ffffff;
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
 