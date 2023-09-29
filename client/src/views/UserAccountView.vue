<template>
    <!--<NavBar />-->
    <UserAccount />
</template>

<style scoped>
.container {
    margin-top: 100px;
}
</style>

<script>
    import NavBar from '@/components/NavBar.vue';
    import UserAccount from '@/components/UserAccount.vue';

    export default {
        components: {
            NavBar,
            UserAccount
        },
    };
</script>

