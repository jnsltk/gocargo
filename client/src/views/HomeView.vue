<script setup>
    import HeroComponent from '../components/HeroComponent.vue'
    import CarFleet from '../components/CarFleet.vue'
    import NavBar from '../components/NavBar.vue'
    import AboutComponent from '../components/AboutComponent.vue'
    import CarSelection from '../components/CarSelection.vue'
</script>

<template>
    <NavBar />
    <main data-bs-spy="scroll" data-bs-target="#mainNav">
        <HeroComponent />
        <AboutComponent />
        <CarFleet />
        <CarSelection />
    </main>
</template>
