<template>
    <div class="container">
        <div class="sidebar">
            <ManagerSidebar/>
        </div>
        <div class="content">
            <ManagerInform/>
        </div>

    </div>
    
</template>

<script setup>
    import ManagerSidebar from '../components/ManagerSidebar.vue'
    import ManagerInform from '../components/ManagerInform.vue'

</script>

<style>
    .account-sidebar {
        height: 100vh;
        width: 20%;
        position: fixed;
        top: 0;
        left: 0;
    }

    .container{
        display: flex;
    }
    
    .sidebar{
        flex: 1;
    }

    .content{
        flex: 4;
    }
    
</style>