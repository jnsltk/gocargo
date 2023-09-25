<template>
    <BookingNav />
    <div class='container'>
        <h1>Payment Details</h1>
        <PaymentForm />
    </div>
</template>

<style scoped>
.container {
    margin-top: 100px;
}
</style>

<script>
    import PaymentForm from '@/components/PaymentForm.vue';
    import BookingNav from '@/components/BookingNav.vue';

    export default {
        components: {
            PaymentForm,
            BookingNav
        },
    };
</script>

