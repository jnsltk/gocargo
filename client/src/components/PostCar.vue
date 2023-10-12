<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="py-4" style="margin-left: 20%;">
            <h1>Post a new car</h1>
        </div>
        <form>
            <div class="row g-3">
                <div class="col-md-7 col-lg-8">
                    <form class="needs-validation" novalidate="">
                        <div class="row g-3">

                            <div class="col-12">
                                <label for="registraction" class="form-label fs-5">Registraction</label>
                                <input type="text" class="form-control" id="registraction" placeholder=""
                                    v-model="registrationData" required>
                                <div class="invalid-feedback">
                                    Valid registration is required.
                                </div>
                            </div>

                            <div class="col-12">
                                <div><label for="image" class="form-label fs-5">Image</label></div>
                                <img :src="imageData" class="max-image-size">
                                <input type="file" class="form-control" id="image" @change="handleImageUpload"
                                    aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                            </div>

                            <div class="col-12">
                                <label for="brand" class="form-label fs-5">Brand</label>
                                <select class="form-select" id="state" v-model="brandData" required>
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
                                <label for="color" class="form-label fs-5">Color</label>
                                <div class="input-group has-validation">
                                    <select class="form-select" id="state" v-model="colorData" required>
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
                                <label for="price" class="form-label fs-5">Price </label>
                                <input type="text" class="form-control" id="price" placeholder="" v-model="priceData"
                                    required>
                                <div class="invalid-feedback">
                                    Please enter a valid price.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="address" class="form-label fs-5">Description</label>
                                <textarea type="text" class="form-control" id="description" rows="4"
                                    placeholder="Give a discription of the car..." v-model="descriptionData"
                                    required></textarea>
                                <div class="invalid-feedback">
                                    Please enter a valid description.
                                </div>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </form>
        <button class="w-50 btn btn-primary btn-lg" @click="postCar" style="margin-top: 5%; margin-left: 7%;">Post
            Car</button>
    </main>
</template>

<script>
import { getToken, decodeToken } from '../utils/auth'
import { Api } from '@/Api'

const token = getToken();
const manager = (token) ? decodeToken(token) : 'logged_out';

export default {

    data() {
        return {
            managerEmail: manager.managerEmail,
            registrationData: '',
            imageData: '',
            brandData: '',
            colorData: '',
            priceData: '',
            descriptionData: '',
        };
    },
    methods: {
        handleImageUpload(event) {
            const uploadedFile = event.target.files[0];
            if (uploadedFile) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    this.imageData = e.target.result;
                };

                reader.readAsDataURL(uploadedFile);
            }
        },
        postCar() {
            const car = {
                registration: this.registrationData,
                image: this.imageData,
                brand: this.brandData,
                color: this.colorData,
                price: this.priceData,
                description: this.descriptionData,
            };
            const url = `/managers/${this.managerEmail}/cars`;
            Api.post(url, car).then((response) => {
                alert('Car posted successfully!');
                console.log(response.data);
            }).catch(error => {
                console.error('Error:', error);
            });
        },
    }

}

</script>

<style scoped>
.max-image-size {
    max-width: 100%;
    max-height: 100%;
}
</style>