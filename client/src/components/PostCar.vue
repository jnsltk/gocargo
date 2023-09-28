<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="py-5">
            <h2>Post a new car</h2>
        </div>
        <div class="row g-3">
            <div class="col-md-7 col-lg-8">
                <form class="needs-validation" novalidate="">
                    <div class="row g-3">
                        
                        <div class="col-12">
                            <label for="registraction" class="form-label">Registraction</label>
                            <input type="text" class="form-control" id="registraction" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                                Valid registration is required.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="image" class="form-label">Image</label>
                            <input type="file" class="form-control" id="inputGroupFile04"
                                aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                        </div>

                        <div class="col-12">
                            <label for="brand" class="form-label">Brand</label>
                            <input type="text" class="form-control" id="brand" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                                Valid brand is required.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="color" class="form-label">Color</label>
                            <div class="input-group has-validation">
                                <input type="text" class="form-control" id="color" placeholder="" value="" required="">
                                <div class="invalid-feedback">
                                    Valid color is required.
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="price" class="form-label">Price </label>
                            <input type="price" class="form-control" id="email" value="">
                            <div class="invalid-feedback">
                                Please enter a valid price.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="address" class="form-label">Description</label>
                            <textarea type="text" class="form-control" id="description" rows="4"
                                placeholder="Give a discription of the car..." value="" required=""></textarea>
                            <div class="invalid-feedback">
                                Please enter a valid description.
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        </div>
        <button class="w-50 btn btn-primary btn-lg" style="margin-top: 5%;">Post Car</button>
    </main>
</template>

<script>


</script>