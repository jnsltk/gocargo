<template>
    <BookingNav />
    <div class='container'>
        <Register />
    </div>
</template>

<style scoped>
.container {
    margin-top: 100px;
}
</style>

<script>
    import BookingNav from '@/components/BookingNav.vue';
    import Register from '@/components/Register.vue';

    export default {
        components: {
            BookingNav,
            Register
        },
    };
</script>
