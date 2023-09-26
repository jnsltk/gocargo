<template>
    <BookingNav />
    <div class='container'>
        <h1>User bookings</h1>
        <UserBookings />
    </div>
</template>

<style scoped>
.container {
    margin-top: 100px;
}
</style>

<script>
    import BookingNav from '@/components/BookingNav.vue';
    import UserBookings from '@/components/UserBookings.vue';

    export default {
        components: {
            BookingNav,
            UserBookings
        },
    };
</script>

