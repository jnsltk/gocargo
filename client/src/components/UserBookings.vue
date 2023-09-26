<template>
    <h1>hello</h1>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                bookings: [],
            };
        },
        mounted() {
            axios.get("http://localhost:3000/api/v1/users/lingwang@126.com/bookings")
                .then((response) => {
                    this.bookings = response.data;
                    console.log(this.bookings);
                })
                .catch((err) => {
                    // Add proper error handling <later></later>;
                    console.log("hello", err);
                });
        },

    }
</script>

