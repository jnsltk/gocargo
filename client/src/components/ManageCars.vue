<template>
    <div id="fleet" class="container  px-4">
        <div class="pricing-header pb-md-4 mx-auto ">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Manage cars</h1>
        </div>
        <GetSortFilterCars  />
    </div>
        

</template>

<script>
import GetSortFilterCars from './GetSortFilterCars.vue'

export default {
    components: {
        GetSortFilterCars,
    },

    data() {
        return{
            userType: 'Manager',
        }
    },

}

</script>