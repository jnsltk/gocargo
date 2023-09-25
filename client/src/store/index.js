import { createStore } from 'vuex';

const store = createStore({
    state: {
        userInfo: {},
        paymentDetails: {},
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setPaymentDetails(state, paymentDetails) {
            state.paymentDetails = paymentDetails;
        },
    },
    getters: {
        isUserInfoSubmitted: (state) => {
            return Object.keys(state.userInfo).length > 0;
        },
        isPaymentDetailsSubmitted: (state) => {
            return Object.keys(state.paymentDetails).length > 0;
        },
    }
});

export default store;
