<template>
    <NavBar />
    <div class='container'>
        <router-view name="BookingWizard"></router-view>
    </div>
</template>

<style scoped>
.container {
    margin-top: 100px;
}
</style>

<script>
    import NavBar from '@/components/NavBar.vue';
    import { RouterView } from 'vue-router'

    export default {
        components: {
            RouterView,
            NavBar
        },
    };
</script>

