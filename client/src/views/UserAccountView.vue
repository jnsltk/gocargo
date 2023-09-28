<template>
    <!--<BookingNav />-->
    <UserAccount />
</template>

<style scoped>
.container {
    margin-top: 100px;
}
</style>

<script>
    import BookingNav from '@/components/BookingNav.vue';
    import UserAccount from '@/components/UserAccount.vue';

    export default {
        components: {
            BookingNav,
            UserAccount
        },
    };
</script>

