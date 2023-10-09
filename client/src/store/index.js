import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

const store = createStore({
    state: {
        userInfo: {},
        paymentDetails: {},
        bookingData: {
            car: '',
            bookingDates: {},
        },
        finalBooking: {}
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setPaymentDetails(state, paymentDetails) {
            state.paymentDetails = paymentDetails;
        },
        setBookingDate(state, bookingDates) {
            state.bookingData.bookingDates = bookingDates;
        },
        setCar(state, carRegistration) {
            state.bookingData.car = carRegistration;
        },
        setFinalBooking(state, finalBooking) {
            state.finalBooking = finalBooking;
        }
    },
    getters: {
        isUserInfoSubmitted: (state) => {
            return Object.keys(state.userInfo).length > 0;
        },
        isPaymentDetailsSubmitted: (state) => {
            return Object.keys(state.paymentDetails).length > 0;
        },
    },
    plugins: [vuexLocal.plugin]
});

export default store;

