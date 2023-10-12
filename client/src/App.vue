<script setup>
    import { RouterView } from 'vue-router'
    import Footer from './components/FooterComponent.vue'
    console.log(import.meta.env.VITE_APP_API_ENDPOINT)
</script>

<template>

    <RouterView />
    <Footer />

</template>

