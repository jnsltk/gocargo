import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index';
import { getToken } from '../utils/auth'

import HomeView from '../views/HomeView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import PaymentView from '../views/PaymentView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'
import LoginView from '../views/LoginView.vue'
import ManagerView from '../views/ManagerView.vue'
import ManagerInform from '../components/ManagerInform.vue'
import PostCar from '../components/PostCar.vue'
import ManageCars from '../components/ManageCars.vue'
import RegisterView from '../views/RegisterView.vue'
import UserAccountView from '../views/UserAccountView.vue'

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
            path: '/booking/user-info',
            component: UserInfoView
        },
        {
            path: '/booking/payment',
            component: PaymentView,
            beforeEnter: (to, from, next) => {
                const userInfoCompleted = store.getters.isUserInfoSubmitted;

                if (!userInfoCompleted) {
                    next('/booking/user-info');
                } else {
                    next();
                }
            }
        },
        {
            path: '/booking/confirmation',
            component: ConfirmationView,
            // Use a beforeEnter guard to prevent access if previous steps are incomplete
            beforeEnter: (to, from, next) => {
                const userInfoCompleted = store.getters.isUserInfoSubmitted;
                const paymentCompleted = store.getters.isPaymentDetailsSubmitted;

                if (!userInfoCompleted || !paymentCompleted) {
                    // Redirect to the appropriate step if previous steps are incomplete
                    next(userInfoCompleted ? '/booking/payment' : '/booking/user-info');
                } else {
                    // Allow access to the ConfirmationView
                    next();
                }
            },
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            beforeEnter: isUserLoggedIn

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
            meta: { requiresAuth: true }
        },
        {
            path: '/manager',
            name: 'manager',
            component: ManagerView
        },
        
        {
            path: '/manager/inform',
            name: 'managerInform',
            component: ManagerInform
        },
        {
            path: '/manager/post',
            name: 'postCar',
            component: PostCar
        },
        {
            path: '/manager/manage',
            name: 'manageCars',
            component: ManageCars
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
