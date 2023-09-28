<template>
    <NavBar />
    <div class='container'>
        <h1>User Information</h1>
        <UserInfoForm />
    </div>
</template>

<style scoped>
.container {
    margin-top: 100px;
}
</style>

<script>
    import UserInfoForm from '@/components/UserInfoForm.vue';
    import NavBar from '@/components/NavBar.vue';

    export default {
        components: {
            UserInfoForm,
            NavBar
        },
    };
</script>

