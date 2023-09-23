<template>
    <div v-if="isLastCard" class="card mb-4 rounded-3 shadow-sm h-100 d-flex flex-column justify-content-between">
        <div class="d-flex flex-grow-1 align-items-center">
            <h1 class="mx-4 mt-5 fw-normal text-center">Sign Up or Log In to see more</h1>
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
            <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary btn-lg px-4 mb-2">Sign Up</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4 mb-4">Log In</button>
            </div>
        </div>
    </div>

   <div v-else class="card mb-4 rounded-3 shadow-sm h-100">
        <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{{ car.brand }}</h4>
            <img :src="car.image" class="card-img-top" :alt="car.brand">
        </div>

        <div class="card-body">
            <h1 class="card-title pricing-card-title">{{ car.price }} SEK<small class="text-body-secondary fw-light">/day</small></h1>

            <ul class="list-unstyled mt-3 mb-4">
                <li>Color: {{ car.color }}</li>
                <li>{{ car.description }}</li>
            </ul>

            <button type="button" class="w-100 btn btn-lg btn-primary">Book Now</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            car: {
                type: Object,
                required: true
            },
            isLastCard: {
                type: Boolean,
                required: true
            },
        },
    };
</script>

