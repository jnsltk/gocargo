<template>

   <div class="card mb-4 rounded-3 shadow-sm h-100">
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

            <button type="button" class="w-100 btn btn-lg btn-primary" @click="bookCar">Book Now</button>
            
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
        methods: {
            bookCar() {
                this.$store.commit('setCar', this.car.registration);

                this.$router.push('/booking')
            }
        }
    };
</script>

