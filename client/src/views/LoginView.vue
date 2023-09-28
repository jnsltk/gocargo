<template>
    <NavBar />
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
    import NavBar from '@/components/NavBar.vue';
    import LogIn from '@/components/LogIn.vue';

    export default {
        components: {
            NavBar,
            LogIn
        },
    };
</script>

