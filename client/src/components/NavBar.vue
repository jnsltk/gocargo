<template>
    <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-xl">
            <RouterLink class="navbar-brand" to='/'>GoCarGo</RouterLink>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse" id="navbarsExample07XL" style="">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/#about">Why us?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#fleet">Our fleet</a>
                    </li>
                </ul>
                <div v-if="!isUserLoggedIn" class="col-md-3 text-md-end">
                    <button type="button" @click="redirectToLogin" class="btn btn-primary me-2">Login</button>
                    <button type="button" @click="redirectToSignUp" class="btn btn-outline-primary me-2">Sign-up</button>
                </div>
                <div v-else class="col-md-3 text-md-end">
                    <a href="/useraccount" class="btn btn-primary me-2">Account</a>
                    <button @click="logout" class="btn btn-outline-primary">Log out</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { getToken, logout } from '../utils/auth'
import { RouterLink } from 'vue-router'




export default {
    data() {
        return {
            isUserLoggedIn: false,
            navbarCollapsed: true
        }
    },
    mounted() {
        this.isUserLoggedIn = (getToken()) ? true : false;
        console.log(this.isUserLoggedIn)
    },
    methods: {
        logout() {
            logout();
        },
        redirectToLogin() {
            this.$router.push('/login');
        },
        redirectToSignUp() {
            this.$router.push('/register');
        },
        redirecToManager() {
            this.$router.push('/manager');
        },

    },
    components: {
        RouterLink
    }
}
</script>

<style scoped>
.gocargo-navbar {
    padding: 10px 25px;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
    .gocargo-navbar {
        height: auto;
        /* Allow the navbar to expand vertically */
    }


}
</style>


