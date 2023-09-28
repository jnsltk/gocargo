<script setup>
    import HeroComponent from '../components/HeroComponent.vue'
    import CarFleet from '../components/CarFleet.vue'
    import LandingPageNav from '../components/LandingPageNav.vue'
    import AboutComponent from '../components/AboutComponent.vue'
</script>

<template>
    <LandingPageNav />
    <main data-bs-spy="scroll" data-bs-target="#mainNav">
        <HeroComponent />
        <AboutComponent />
        <CarFleet />
        <CarSelection />
    </main>
</template>
