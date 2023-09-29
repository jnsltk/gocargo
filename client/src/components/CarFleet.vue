<template>
    <div id="fleet" class="container col-xxl-8 px-4 py-5">
        <div class="pricing-header pb-md-4 mx-auto ">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Our fleet</h1>
            <p class="fs-5 lead">Discover a diverse selection of reliable vehicles in our fleet, tailored to suit your every
                need.</p>
        </div>
        <GetSortFilterCars />
    </div>
</template>

<script>
import GetSortFilterCars from './GetSortFilterCars.vue'

export default {
    components: {
        GetSortFilterCars,
    }
}

</script>
