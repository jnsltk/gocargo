<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="py-4" style="margin-left: 20%;">
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
                                <select class="form-select" id="state" required="">
                                    <option value="">Choose...</option>
                                    <option>Audi</option>
                                    <option>BMW</option>
                                    <option>BYD</option>
                                    <option>Mercedes</option>
                                    <option>Tesla</option>
                                    <option>Toyota</option>
                                    <option>Volvo</option>
                                </select>
                        </div>

                        <div class="col-12">
                            <label for="color" class="form-label">Color</label>
                            <div class="input-group has-validation">
                                <select class="form-select" id="state" required="">
                                    <option value="">Choose...</option>
                                    <option>Black</option>
                                    <option>Blue</option>
                                    <option>Grayness</option>
                                    <option>Green</option>
                                    <option>Red</option>
                                    <option>White</option>
                                    <option>Yellow</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="price" class="form-label">Price </label>
                            <input type="text" class="form-control" id="price" placeholder="" value="" required="">
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
        <button class="w-50 btn btn-primary btn-lg" style="margin-top: 5%; margin-left: 7%;">Post Car</button>
    </main>
</template>

<script>


</script>