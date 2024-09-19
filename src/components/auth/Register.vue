<template>
    <!-- REGISTER PAGE -->
    <div class="register-container">
        <h1>Register</h1>
        <form @submit.prevent="handleRegister">
            <div class="form-group">
                <label for="fname">First Name</label>
                <input
                    type="text" 
                    id="fname" 
                    v-model="fname"
                    @input="validatedFirstName"
                    >
            </div>
            <div class="form-group">
                <label for="mname">Middle Name</label>
                <input
                    type="text" 
                    id="mname" 
                    v-model="mname"
                    @input="validatedMiddleName"
                    >
            </div>
            <div class="form-group">
                <label for="lname">Last Name</label>
                <input
                    type="text" 
                    id="lname" 
                    v-model="lname"
                    @input="validatedLastName"
                    >
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input
                    type="text" 
                    id="address
                    "v-model="address"
                    @input="validatedAddress"
                    >
            </div>
            <div class="form-group">
                <label for="phonenum">Phone Number</label>
                <input
                    type="text" 
                    id="phonenu
                    m" v-model="phonenum"
                    @input="validatedPhoneNumber"
                    >
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input
                    type="email"
                     id="email"
                      v-model="email"
                      @input="validatedEmailField"
                      >
            </div>
            <div class="form-group">
                <label for="passsword">Password</label>
                <input
                    type="text" 
                    id="passsword" 
                    v-model="password"
                    @input="validatedPasswordField"
                    >
            </div>
            <div class="form-group">
                <label for="cpassword">Confirm Password</label>
                <input
                    type="text" 
                    id="cpasswo
                    rd" v-model="cpassword"
                    @input="validateConfirmPasswordField"
                    >
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
    const password = ref('');
    const cpassword = ref('');
    const errors = ref({
        fname: '',
        mname: '',
        lname: '',
        address: '',
        phonenum: '',
        email: '',
        password: '',
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
        if(!email.value){
            errors.value.email = 'Email is Required';
        }
        else if(!validatedEmail(email.value))
        {
            errors.value.email = 'Validated Email is Required';
        }
        else {
            errors.value.email = '';
        }
    };
    const validatedPasswordField = () => {
        if(!password.value){
            errors.value.password = 'Password is Required';
        }
        else if(password.value !== cpassword.value){
            errors.value.password = 'Password does not match';
        }
        else {
            errors.value.password = '';
        }
    };

    const validateConfirmPasswordField = () => {
        if(!cpassword.value){
            errors.value.cpassword = 'Confirm Password is Required';
        }
        else if(cpassword.value !== password.value){
            errors.value.cpassword = 'Password does not match';
        }
        else {
            errors.value.cpassword = '';
        }
    }
    const handleRegister = () => {

    }

    // Validated Email Validation function simple regex check
    const validatedEmail = (email: string) =>{
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(email);
    };

    // Add a Validation for a phone number field 

    // Add a Validation for a address field

</script>



<!-- CSS STYLE -->
<style>

</style>