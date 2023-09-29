<template>
    <NavBar />
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
    import NavBar from '@/components/NavBar.vue';
    import Register from '@/components/Register.vue';

    export default {
        components: {
            NavBar,
            Register
        },
    };
</script>

