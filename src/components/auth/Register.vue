<template>
    <!-- REGISTER PAGE -->
    <div class="register-container">
        <h1>Register</h1>
        <form @submit.prevent="handleRegister">
            <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" id="fname" v-model="fname">
            </div>
            <div class="form-group">
                <label for="mname">Middle Name</label>
                <input type="text" id="mname" v-model="mname">
            </div>
            <div class="form-group">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" v-model="lname">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" v-model="address">
            </div>
            <div class="form-group">
                <label for="phonenum">Phone Number</label>
                <input type="text" id="phonenum" v-model="phonenum">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="passsword">Password</label>
                <input type="text" id="passsword" v-model="passsword">
            </div>
            <div class="form-group">
                <label for="cpassword">Confirm Password</label>
                <input type="text" id="cpassword" v-model="cpassword">
            </div>

            <button type="submit">Register</button>
            
        </form>
    </div>
</template>

<script setup lang="ts">
    import { error } from 'cypress/types/jquery';
import { ref } from 'vue';


    const fname = ref('');
    const mname = ref('');
    const lname = ref('');
    const address = ref('');
    const phonenum = ref('');
    const email = ref('');
    const passsword = ref('');
    const cpassword = ref('');
    const errors = ref({
        fname: '',
        mname: '',
        lname: '',
        address: '',
        phonenum: '',
        email: '',
        passsword: '',
        cpassword: '',
    });
    const validatedFirstName = () => {
        // If the input tag is empty
        if(!fname.value){
            errors.value.fname = 'First Name is Required';
        }
        else {   
            errors.value.fname = '';
        }
    };

    const validatedMiddleName = () => {
        if(!mname.value){
            errors.value.mname = 'Middle Name is Required';
        }
        else {
            errors.value.mname = '';
        }
    };

    const validatedLastName = () => {
        if(!lname.value){
            errors.value.lname = 'Last Name is Required';
        }
        else{
            errors.value.lname = '';
        }
    };

    const validatedAddress = () => {
        if(!address.value){
            errors.value.address = 'Address is Required';
        }
        else{
            errors.value.address = '';
        }
    };

    const validatedPhoneNumber = () => {
        if(!phonenum.value){
            errors.value.phonenum = 'Phone Number is Required';
        }
        else{
            errors.value.phonenum = '';
        }
    };
    const validatedEmailField = () => {
        if(!validatedEmail(email.value))
        {

        }
    };
    const handleRegister = () => {

    }

    const validatedEmail = (email: string) =>{
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(email);
    };

</script>