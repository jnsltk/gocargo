<template>
    <nav id="mainNav" class="gocargo-navbar navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to='/'>GoCarGo</RouterLink>
            <button class="navbar-toggler" type="button" @click="toggleNavbar">
               <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
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
                <div v-if="!isUserLoggedIn" class="col-md-3 text-end">
                    <button type="button" @click="redirectToLogin" class="btn btn-primary me-2">Login</button>
                    <button type="button" @click="redirectToSignUp" class="btn btn-outline-primary me-2">Sign-up</button>
                </div>
                <div v-else class="col-md-3 text-end">
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
                isUserLoggedIn: false ,
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
            toggleNavbar() {  
            this.navbarCollapsed = !this.navbarCollapsed;
            const bsCollapse = new bootstrap.Collapse(document.getElementById('navbarCollapse'), {
                toggle: false
            });
            if (this.navbarCollapsed) {
                bsCollapse.hide();
            } else {
                bsCollapse.show();
            }
        }
            
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
        height: auto; /* Allow the navbar to expand vertically */
    }

    
}

</style>


