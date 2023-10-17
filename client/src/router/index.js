import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index';
import { getToken } from '../utils/auth'

import HomeView from '../views/HomeView.vue'
import BookingView from '../views/BookingView.vue'
import LoginView from '../views/LoginView.vue'
import ManagerView from '../views/ManagerView.vue'
import ManagerInform from '../components/ManagerInform.vue'
import PostCar from '../components/PostCar.vue'
import ManageCars from '../components/ManageCars.vue'
import RegisterView from '../views/RegisterView.vue'
import UserAccountView from '../views/UserAccountView.vue'

import BookingConfirmation from '../components/BookingConfirmation.vue'
import LogIn from '../components/LogIn.vue'
import DatePicker from '../components/DatePicker.vue'
import ConfirmData from '../components/ConfirmData.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            // Modify when finishing up booking process
            path: '/booking',
            component: BookingView,
            children: [{
                path: '',
                components: {
                    BookingWizard: LogIn
                },
                beforeEnter: (to, from, next) => {
                    if (getToken()) {
                        next('/booking/date');
                    } else {
                        next();
                    }
                }
            }, {
                path: 'date', 
                components: {
                    BookingWizard: DatePicker
                },
                beforeEnter: (to, from, next) => {
                    if (!store.state.bookingData.car) {
                        next('/#fleet');
                    } else {
                        next();
                    }
                }
            }, {
                path: 'confirm-data',
                components: { 
                    BookingWizard: ConfirmData
                },
                beforeEnter: (to, from, next) => {
                    if (!store.state.bookingData.car) {
                        next('/#fleet');
                    } else if(!store.state.bookingData.bookingDates) {
                        next('date');
                    } else {
                        next();
                    }
                }
            }, {
                path: 'confirmation',
                components: {
                    BookingWizard: BookingConfirmation
                },
                beforeEnter: (to, from, next) => {
                    if (!store.state.bookingData.car) {
                        next('/#fleet');
                    } else if(!store.state.bookingData.bookingDates) {
                        next('date');
                    } else if(!store.state.finalBooking) {
                        next('confirm-data');
                    } else {
                        next();
                    }
                }
            }]
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            

        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterView

        },
        {
            path: '/useraccount',
            name: 'UserAccount',
            component: UserAccountView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/manager',
            name: 'manager',
            component: ManagerView,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/manager/inform',
            name: 'managerInform',
            component: ManagerInform,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/manager/post',
            name: 'postCar',
            component: PostCar,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/manager/manage',
            name: 'manageCars',
            component: ManageCars,
            meta: {
                requiresAuth: true
            }
        },


    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // Check if the user is authenticated
        const token = getToken();

        if (!token) {
            return next('/login'); // Redirect to the login page if not authenticated
        }

        // Continue to the protected route
        next();
    } else {
        next(); // Allow access to public routes
    }
});

function isUserLoggedIn(to, from, next) {
    if (!getToken()) {
        next();
    } else {
        next('/useraccount');
    }
}

export default router
