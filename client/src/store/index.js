import { createStore } from 'vuex';

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
    }
});

export default store;

