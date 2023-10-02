<template>
    <!--
        <div class="container-fluid">
        <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <i class="fs-2  bi-person-circle"></i><span class="fs-5 d-none d-sm-inline">User Account</span>

        </a>
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="useraccount">
        <li class="nav-item">
        <a href="#" class="nav-link align-middle px-0">
        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
        </a>
        </li>
        <li>
        <a href="#sub1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
        <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
        <ul class="collapse show nav flex-column ms-1" id="sub1" data-bs-parent="#useraccount">
        <li class="w-100">
        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
        </li>
        <li>
        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
        </li>
        </ul>
        </li>
        <li>
        <a href="#" class="nav-link px-0 align-middle">
        <i class="fs-4 bi-cash-coin"></i> <span class="ms-1 d-none d-sm-inline">Balance</span></a>
        </li>
        <li>
        <a href="#sub2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
        <i class="fs-4 bi-cart-check"></i> <span class="ms-1 d-none d-sm-inline">Bookings</span></a>
        <ul class="collapse nav flex-column ms-1" id="sub2" data-bs-parent="#useraccount">
        <li class="w-100">
        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
        </li>
        <li>
        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
        </li>
        </ul>
        </li>

        <li>
        <a href="#" class="nav-link px-0 align-middle">
        <i class="fs-4 bi bi-person-lines-fill"></i> <span class="ms-1 d-none d-sm-inline">Profile</span> </a>
        </li>
        </ul>
        <hr>
        <div class="dropdown pb-4">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="@/assets/gocargo.png" alt="hugenerd" width="40" height="40" class="rounded-circle">
        <span class="d-none d-sm-inline mx-1">luhui930@126.com</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">

        <li><a class="dropdown-item" @click='logout'>Sign out</a></li>
        </ul>
        </div>
        </div>
        </div>
        <div class="col py-3">
        <UserBookings />
        </div>
        </div>
        </div>
    -->
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </symbol>

    </svg>
    <header class="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="light">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/">GoCarGo</a>

        <ul class="navbar-nav flex-row d-md-none">
            <li class="nav-item text-nowrap">
                <button class="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
                    <svg class="bi"><use xlink:href="#search"/></svg>
                </button>
            </li>
            <li class="nav-item text-nowrap">
                <button class="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <svg class="bi"><use xlink:href="#list"/></svg>
                </button>
            </li>
        </ul>
    </header>

    <div class="container-fluid">
        <div class="row">
            <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="sidebarMenuLabel">GoCarGo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                            <span>Signed in as $user</span>
                        </h6>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2" href="#">
                                    <svg class="bi"><use xlink:href="#file-earmark"/></svg>
                                    My bookings
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                                    <svg class="bi"><use xlink:href="#house-fill"/></svg>
                                    Create new booking
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2" href="#">
                                    <svg class="bi"><use xlink:href="#gear-wide-connected"/></svg>
                                    User Settings
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2" href="#" @click="logout" >
                                    <svg class="bi"><use xlink:href="#door-closed"/></svg>
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">User Dashboard</h1>
                </div>
                <UserBookings />
            </main>
        </div>
    </div>

</template>

<style scoped>
.bi {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    fill: #fff;
}

                                      /*
                                       * Sidebar
                                       */

                                      @media (min-width: 768px) {
                                          .sidebar .offcanvas-lg {
                                              position: -webkit-sticky;
                                              position: sticky;
                                              top: 48px;
                                          }
                                          .navbar-search {
                                              display: block;
                                          }
                                      }

                                      .sidebar .nav-link {
                                          font-size: .875rem;
                                          font-weight: 500;
                                      }

                                      .sidebar .nav-link.active {
                                          color: #2470dc;
                                      }

                                      .sidebar-heading {
                                          font-size: .75rem;
                                      }

                                      /*
                                       * Navbar
                                       */

                                      .navbar-brand {
                                          padding-top: .75rem;
                                          padding-bottom: .75rem;
                                          background-color: rgba(0, 0, 0, .25);
                                          box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
                                      }

                                      .navbar .form-control {
                                          padding: .75rem 1rem;
                                      }
</style>

<script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import UserBookings from '@/components/UserBookings.vue'
    import { logout } from '@/utils/auth'

    export default {
        components: {
            UserBookings
        },
        methods: {
            logout() {
                logout();
            }
        }
    }

</script>
