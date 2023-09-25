import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import PaymentView from '../views/PaymentView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'
import store from '@/store/index';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
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
        }
    ]
})

export default router
