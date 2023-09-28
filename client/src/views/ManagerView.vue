<template>
    <div class="container px-4 py-5">
        <div class="sidebar">
            <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark account-sidebar">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg class="bi pe-none me-2" width="40" height="32">
                        <use xlink:href="#bootstrap"></use>
                    </svg>

                    <span class="fs-4">Manager</span>
                </a>
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li @click="showContent('information')" class="nav-item">
                        <a href="#" class="nav-link active" aria-current="page">
                            Information
                        </a>
                    </li>
                    <li @click="showContent('postCar')">
                        <a href="#" class="nav-link text-white">
                            Post car
                        </a>
                    </li>
                    <li>
                        <a @click="showContent('manageCars')" href="#" class="nav-link text-white">
                            Manage cars
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            Log out
                        </a>
                    </li>
                </ul>
                <hr>
            </div>
        </div>


        <div class="content">
            <div class="child" v-if="currentContent === 'information'">
                <ManagerInform />
            </div>
            <div  class="child" v-if="currentContent === 'postCar'">
                <PostCar />
            </div>
            <div  class="child" v-if="currentContent === 'manageCars'">
                <ManageCars />
            </div>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue'
import ManagerInform from '../components/ManagerInform.vue'
import PostCar from '../components/PostCar.vue'
import ManageCars from '../components/ManageCars.vue'

export default {
    components: {
        ManagerInform,
        PostCar,
        ManageCars,
    },

    setup() {
        const currentContent = ref('information');
        const showContent = (contentName) => {
            currentContent.value = contentName;
        };

        return {
            currentContent,
            showContent,
        };
    },


}

</script>

<style>
.account-sidebar {
    height: 100vh;
    width: 20%;
    position: fixed;
    top: 0;
    left: 0;
}


.sidebar {
    flex: 1;
}

.content {
    flex: 4;
}

.child {
    position: relative;
    left: 6%;
}

</style>