<template>
    <div class="container  col-xxl-8 px-4 py-5">
        <div class="sidebar">
            <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark account-sidebar">
                <span class="fs-3 right-align">Manager</span>
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a @click="showContent('manageCars')" href="#" class="nav-link text-white fs-5">
                            Manage cars
                        </a>
                    </li>
                    <li class="nav-item">
                        <a @click="showContent('postCar')" href="#" class="nav-link text-white fs-5">
                            Post car
                        </a>
                    </li>
                    <li class="nav-item">
                        <a @click="showContent('information')" href="#" class="nav-link text-white fs-5"
                            aria-current="page">
                            Setting
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="/" @click="logout" class="nav-link text-white fs-5">
                            Sign out
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
            <div class="child" v-if="currentContent === 'postCar'">
                <PostCar />
            </div>
            <div class="child" v-if="currentContent === 'manageCars'">
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
import { logout } from '@/utils/auth'

export default {
    components: {
        ManagerInform,
        PostCar,
        ManageCars,
    },

    setup() {
        const currentContent = ref('manageCars');
        const showContent = (contentName) => {
            currentContent.value = contentName;
        };

        return {
            currentContent,
            showContent,
        };
    },

    methods: {

        logout() {
            logout();
        }
    }


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