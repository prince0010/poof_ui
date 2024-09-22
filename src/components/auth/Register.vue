<template>
    <!-- REGISTER PAGE -->
    <div class="flex justify-center items-center h-screen bg-gray-900">
        <div class="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-lg">
            <h1 class="text-3xl font-bold text-center text-white mb-8">Register</h1>
            <form @submit.prevent="handleRegister">
                <div class="mb-4">
                    <div class="relative">
                        <font-awesome-icon icon="user" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                        type="text" 
                        id="fname" 
                        v-model="fname"
                        @input="validatedFirstName"
                        @animationend="removeShakeStatus('fname')"
                        placeholder="First Name*"
                        :class="['w-full p-3 pl-10 bg-gray-700 text-white rounded-lg border focus:outline-none focus:border-blue-500', errors.fname ? 'border-red-500' : 'border-gray-600', shakeStatus.fname ? 'animate-shake' : '']"
                        />
                    </div>
                    <p :class="[errors.fname ? 'text-red-500 text-sm mt-1' : 'invisible']">{{ errors.fname }}</p>
                </div>
                
                <div class="mb-4">
                    <div class="relative">
                        <input
                        type="text" 
                        id="mname" 
                        v-model="mname"
                        @input="validatedMiddleName"
                        @animationend="removeShakeStatus('mname')"
                        placeholder="Middle Name*"
                        :class="['w-full p-3 pl-10 bg-gray-700 text-white rounded-lg border focus:outline-none focus:border-blue-500', errors.mname ? 'border-red-500' : 'border-gray-600', shakeStatus.mname ? 'animate-shake' : '']"
                        />
                        <font-awesome-icon icon="id-card" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <p :class="[errors.mname ? 'text-red-500 text-sm mt-1' : 'invisible']">{{ errors.mname }}</p>
                </div>
                
                <div class="mb-4">
                    <div class="relative">
                        <input
                            type="text" 
                            id="lname" 
                            v-model="lname"
                            @input="validatedLastName"
                            @animationend="removeShakeStatus('lname')"
                            placeholder="Last Name*"
                            :class="['w-full p-3 pl-10 bg-gray-700 text-white rounded-lg border focus:outline-none focus:border-blue-500', errors.lname ? 'border-red-500' : 'border-gray-600', shakeStatus.lname ? 'animate-shake' : '']"
                            />
                        <font-awesome-icon icon="user" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <p :class="[errors.lname ? 'text-red-500 text-sm mt-1' : 'invisible']">{{ errors.lname }}</p>
                </div>

                <div class="mb-4">
                    <div class="relative">
                        <font-awesome-icon icon="home" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text" 
                            id="address" 
                            v-model="address"
                            @input="validatedAddress"
                            @animationend="removeShakeStatus('address')"
                            placeholder="Address*"
                            :class="['w-full p-3 pl-10 bg-gray-700 text-white rounded-lg border focus:outline-none focus:border-blue-500', errors.address ? 'border-red-500' : 'border-gray-600', shakeStatus.address ? 'animate-shake' : '']"
                        />
                        <font-awesome-icon icon="map-marker-alt" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                    </div>
                    <p :class="[errors.address ? 'text-red-500 text-sm mt-1' : 'invisible']">{{ errors.address }}</p>
                </div>

                <div class="mb-4">
                    <div class="relative">
                        <font-awesome-icon icon="phone" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text" 
                            id="phonenum" 
                            v-model="phonenum"
                            @input="validatedPhoneNumber"
                            @animationend="removeShakeStatus('phonenum')"
                            placeholder="Phone Number*"
                            :class="['w-full p-3 pl-10 bg-gray-700 text-white rounded-lg border focus:outline-none focus:border-blue-500', errors.phonenum ? 'border-red-500' : 'border-gray-600', shakeStatus.phonenum ? 'animate-shake' : '']"
                        />
                    </div>
                    <p :class="[errors.phonenum ? 'text-red-500 text-sm mt-1' : 'invisible']">{{ errors.phonenum }}</p>
                </div>

                <div class="mb-4">
                    <div class="relative">
                        <font-awesome-icon icon="envelope" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email" 
                            id="email" 
                            v-model="email"
                            @input="validatedEmailField"
                            @animationend="removeShakeStatus('email')"
                            placeholder="Email*"
                            :class="['w-full p-3 pl-10 bg-gray-700 text-white rounded-lg border focus:outline-none focus:border-blue-500', errors.email ? 'border-red-500' : 'border-gray-600', shakeStatus.email ? 'animate-shake' : '']"
                        />
                    </div>
                    <p :class="[errors.email ? 'text-red-500 text-sm mt-1' : 'invisible']">{{ errors.email }}</p>
                </div>

                <div class="mb-4">
                    <div class="relative">
                        <font-awesome-icon icon="lock" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            :type="showPassword ? 'text' : 'password'"  
                            id="password" 
                            v-model="password"
                            @input="validatedPasswordField"
                            @click="togglePassword"
                            @animationend="removeShakeStatus('password')"
                            placeholder="Password*"
                            :class="['w-full p-3 pl-10 bg-gray-700 text-white rounded-lg border focus:outline-none focus:border-blue-500', errors.password ? 'border-red-500' : 'border-gray-600', shakeStatus.password ? 'animate-shake' : '']"
                        />
                        <font-awesome-icon 
                            :icon="showPassword ? 'eye-slash' : 'eye'" 
                            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                            @click="togglePassword"
                        />
                    </div>
                    <p :class="[errors.password ? 'text-red-500 text-sm mt-1' : 'invisible']">{{ errors.password }}</p>
                </div>

                <div class="mb-6">
                    <div class="relative">
                        <font-awesome-icon icon="lock" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password" 
                            id="cpassword" 
                            v-model="cpassword"
                            @input="validateConfirmPasswordField"
                            @animationend="removeShakeStatus('cpassword')"
                            placeholder="Confirm Password*"
                            :class="['w-full p-3 pl-10 bg-gray-700 text-white rounded-lg border focus:outline-none focus:border-blue-500', errors.cpassword ? 'border-red-500' : 'border-gray-600', shakeStatus.cpassword ? 'animate-shake' : '']"
                        />
                    </div>
                    <p :class="[errors.cpassword ? 'text-red-500 text-sm mt-1' : 'invisible']">{{ errors.cpassword }}</p>
                </div>

                <div class="text-center">
                    <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
                        Register
                    </button>
                </div>
            </form>
            <p :class="succMessage ? 'text-green-500 text-center mt-4' : 'text-red-500 text-center mt-4'">
                {{ succMessage ? succMessage : errMessage }}
            </p>
        </div>
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
    const succMessage = ref('');
    const errMessage = ref('');
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
            errors.value.password = 'Enter Your Password First';
            shakeStatus.value.password = true;
        }
        // else if(password.value !== cpassword.value){
        //     errors.value.password = 'Password does not match';
        //     shakeStatus.value.password = true;
        // }
        else {
            errors.value.password = '';
        }
    };

    const validateConfirmPasswordField = () => {
        if(!cpassword.value){
            errors.value.cpassword = 'Enter the Same Exact Password';
            shakeStatus.value.cpassword = true;
        }
        else if(cpassword.value !== password.value){
            errors.value.cpassword = 'Password does not match. Try Again.'; 
            shakeStatus.value.cpassword = true;
        }
        else {
            errors.value.cpassword = '';
        }
    }

    // Logic for Register form
    const handleRegister = () => {

    validatedFirstName();
    validatedMiddleName();
    validatedLastName();
    validatedAddress();
    validatedPhoneNumber();
    validatedEmailField();
    validatedPasswordField();
    validateConfirmPasswordField();

    if(!errors.value.fname && !errors.value.mname && !errors.value.lname && !errors.value.address && !errors.value.phonenum && !errors.value.email && !errors.value.password && !errors.value.cpassword){
        succMessage.value = 'Register Successfully';
        errMessage.value = '';
    }
    else{
        errMessage.value = 'Something went wrong. Please try again.';
        succMessage.value = '';
    }
};

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