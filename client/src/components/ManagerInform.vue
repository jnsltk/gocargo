<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="py-5">
            <h2>Manager Information</h2>
        </div>
        <div class="row g-3">
            <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Tom Jerry</h4>
                <form class="needs-validation" novalidate="">
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="Tom" required="">
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="lastName" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" value="Jerry" required="">
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="username" class="form-label">Username</label>
                            <div class="input-group has-validation">
                                <input type="text" class="form-control" id="username" placeholder="Username"
                                    value="TomAndJerry" required="">
                                <div class="invalid-feedback">
                                    Your username is required.
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="email" class="form-label">Email </label>
                            <input type="email" class="form-control" id="email" value="tomandjerry@gmail.com">
                            <div class="invalid-feedback">
                                Please enter a valid email address.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="address" value="Gothenburg Lindholmen" required="">
                            <div class="invalid-feedback">
                                Please enter a valid address.
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        </div>
        <button class="w-50 btn btn-primary btn-lg" style="margin-top: 5%;">Update Information</button>
        <div style="height: 10vh;">

        </div>
    </main>
</template>

<script>

</script>

<style></style>