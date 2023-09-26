<template>
    <BookingNav />
    <div class='container'>
        <LogIn />
    </div>
</template>

<style scoped>
.container {
    margin-top: 100px;
}
</style>

<script>
    import BookingNav from '@/components/BookingNav.vue';
    import LogIn from '@/components/LogIn.vue';

    export default {
        components: {
            BookingNav,
            LogIn
        },
    };
</script>

