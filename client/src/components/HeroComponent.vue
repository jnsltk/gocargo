<template>
    <div id="home" class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 mb-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src="@/assets/volvo.png" class="d-block mx-lg-auto img-fluid" alt="Volvo" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Discover Freedom on Wheels!</h1>
                <p class="lead">Unlock adventure with GoCarGo. Choose from our diverse fleet, book with ease, and hit the road confidently. Your journey starts here!</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <a href="/#fleet" class="btn btn-primary btn-lg px-4">Book now</a>
                    <a href="#about" class="btn btn-outline-secondary btn-lg px-4">Read more</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            redirectToBooking() {
                // Change to car selection page later!!
                this.$router.push('/#fleet');
            }
        }
    }

</script>

<style scoped>
    .container {
        margin-top: 150px;
        scroll-margin-top: 150px;
    }

    p {
        color: #333;
    }
</style>

