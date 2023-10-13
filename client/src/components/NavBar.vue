<template>
    <nav id="mainNav" class="sticky-top">
        <BNavbar toggleable="lg" variant="dark" v-b-color-mode="'dark'" placement="fixed">
        <BNavbarBrand href="/"><RouterLink class="navbar-brand" to='/'>GoCarGo</RouterLink></BNavbarBrand>

        <BNavbarToggle target="navbar-toggle-collapse">
        </BNavbarToggle>

        <BCollapse id="navbar-toggle-collapse" is-nav>
        <BNavbarNav class="ml-auto">
        <BNavItem href="/#home">Home</BNavItem>
        <BNavItem href="/#about">Why us?</BNavItem>
        <BNavItem href="/#fleet" >Our fleet</BNavItem>
        </BNavbarNav>
        <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavForm v-if="!isUserLoggedIn" class="d-flex">
        <button type="button" @click="redirectToLogin" class="btn btn-primary me-2">Login</button>
        <button type="button" @click="redirectToSignUp" class="btn btn-outline-primary me-2">Sign-up</button>
        </BNavForm>
        <BNavForm v-else class="d-flex">
        <a href="/useraccount" class="btn btn-primary me-2">Account</a>
        <button @click="logout" class="btn btn-outline-primary">Log out</button>
        </BNavForm>
        </BNavbarNav>
        </BCollapse>
        </BNavbar>
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


