<template>
    <!-- REGISTER PAGE -->
    <div class="register-container">
        <h1>Register</h1>
        <form @submit.prevent="handleRegister">
            <div class="form-group">
                <div class="input-group relative">
                    <label for="fname">First Name</label>
                    <input
                        type="text" 
                        id="fname" 
                        v-model="fname"
                        @input="validatedFirstName"
                        @animationend="removeShakeStatus('fname')"
                        >
                </div>
                </div>
            <div class="form-group">
                <div class="input-group relative">
                    <label for="mname">Middle Name</label>
                    <input
                        type="text" 
                        id="mname" 
                        v-model="mname"
                        @input="validatedMiddleName"
                        @animationend="removeShakeStatus('mname')"
                        >
                </div>
                </div>
            <div class="form-group">
                <div class="input-group relative">
                    <label for="lname">Last Name</label>
                    <input
                        type="text" 
                        id="lname" 
                        v-model="lname"
                        @input="validatedLastName"
                        @animationend="removeShakeStatus('lname')"
                        >
                </div>
                </div>
            <div class="form-group">
                <div class="input-group relative">
                    <!-- <label for="address">Address</label> -->
                    <font-awesome-icon icon="home" class="absolute left-3 text-gray icon-visible" />
                    <input
                        type="text" 
                        id="address
                        "v-model="address"
                        @input="validatedAddress"
                        @animationend="removeShakeStatus('address')"
                        >
                </div>
                </div>
            <div class="form-group">
                <div class="input-group relative">
                    <!-- <label for="phonenum">Phone Number</label> -->
                    <font-awesome-icon icon="phone" class="absolute left-3 text-gray icon-visible" />
                    <input
                        type="text" 
                        id="phonenu
                        m" v-model="phonenum"
                        @input="validatedPhoneNumber"
                        @animationend="removeShakeStatus('phonenum')"
                        >
                </div>
                </div>
            <div class="form-group">
                <div class="input-group relative">
                    <!-- <label for="email">Email</label> -->
                    <font-awesome-icon icon="envelope" class="absolute left-3 text-gray icon-visible" />
                    <input
                        type="email"
                         id="email"
                          v-model="email"
                          @input="validatedEmailField"
                          @animationend="removeShakeStatus('email')"
                          >
                </div>
                </div>
            <div class="form-group">
                <div class="input-group relative">
                    <!-- <label for="passsword">Password</label> -->
                    <font-awesome-icon icon="lock" class="absolute left-3 text-gray icon-visible" />
                    <input
                        type="text" 
                        id="passsword" 
                        v-model="password"
                        @input="validatedPasswordField"
                        @click="togglePassword"
                        @animationend="removeShakeStatus('password')"
                        >
                    <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" class="absolute right-3 text-gray" /> <!-- The Show eye password toggle is not visible to the website yet because the css is not here yet. -->
                </div>
                </div>
            <div class="form-group">
                <div class="input-group relative">
                    <!-- <label for="cpassword">Confirm Password</label> -->
                    <font-awesome-icon icon="lock" class="absolute left-3 text-gray icon-visible" />
                    <input
                        type="text" 
                        id="cpasswo
                        rd" v-model="cpassword"
                        @input="validateConfirmPasswordField"
                        @animationend="removeShakeStatus('cpassword')"
                        >
                    <font-awesome-icon :icon="showPassword ? 'eyes-slash' : 'eye'" class="absolute right-3 text-gray "/>
                </div>
                </div>

            <button type="submit">Register</button>
            
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


    const fname = ref('');
    const mname = ref('');
    const lname = ref('');
    const address = ref('');
    const phonenum = ref('');
    const email = ref('');
    const password = ref('');
    const showPassword = ref(false);
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
    const shakeStatus = ref({
        fname: false,
        mname: false,
        lname: false,
        address: false,
        phonenum: false,
        email: false,
        password: false,
        cpassword: false,
    });

    // Function to reset shake class after animation ends
    const removeShakeStatus = (field:  string) => {
        setTimeout(()=>{
            shakeStatus.value[field] = false;
        }, 500); // Remove the shake class affter animation duration (0.5s)
    }

    const togglePassword = () => {
        showPassword.value = !showPassword.value;
    }

    const validatedFirstName = () => {
        // If the input tag is empty
        if(!fname.value){
            errors.value.fname = 'First Name is Required';
            shakeStatus.value.fname = true;
            }
        else {   
            errors.value.fname = '';
        }
    };

    const validatedMiddleName = () => {
        if(!mname.value){
            errors.value.mname = 'Middle Name is Required';
            shakeStatus.value.mname = true;
        }
        else {
            errors.value.mname = '';
        }
    };

    const validatedLastName = () => {
        if(!lname.value){
            errors.value.lname = 'Last Name is Required';
            shakeStatus.value.lname = true;
        }
        else{
            errors.value.lname = '';
        }
    };

    const validatedAddress = () => {
        if(!address.value){
            errors.value.address = 'Address is Required';
            shakeStatus.value.address = true;
        }
        else{
            errors.value.address = '';
        }
    };

    const validatedPhoneNumber = () => {
        if(!phonenum.value){
            errors.value.phonenum = 'Phone Number is Required';
            shakeStatus.value.phonenum = true;
        }
        else{
            errors.value.phonenum = '';
        }
    };
    const validatedEmailField = () => {
        if(!email.value){
            errors.value.email = 'Email is Required';
            shakeStatus.value.email = true;
        }
        else if(!validatedEmail(email.value))
        {
            errors.value.email = 'Validated Email is Required';
            shakeStatus.value.email = true;
        }
        else {
            errors.value.email = '';
        }
    };
    const validatedPasswordField = () => {
        if(!password.value){
            errors.value.password = 'Password is Required';
            shakeStatus.value.password = true;
        }
        else if(password.value !== cpassword.value){
            errors.value.password = 'Password does not match';
            shakeStatus.value.password = true;
        }
        else {
            errors.value.password = '';
        }
    };

    const validateConfirmPasswordField = () => {
        if(!cpassword.value){
            errors.value.cpassword = 'Confirm Password is Required';
            shakeStatus.value.cpassword = true;
        }
        else if(cpassword.value !== password.value){
            errors.value.cpassword = 'Password does not match';
            shakeStatus.value.cpassword = true;
        }
        else {
            errors.value.cpassword = '';
        }
    }

    // Logic for Register
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