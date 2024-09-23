<template>
    <div class="flex justify-center items-center h-screen bg-gray-900">
        <div class="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-lg">
            <h1 class="text-3xl font-bold text-center text-white mb-8">Login</h1>

            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <div class="relative">
                        <font-awesome-icon icon="envelope" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input 
                            type="email" 
                            id="email"
                            v-model="email"
                            @input="validateEmailField" 
                            placeholder="example123@gmail.com*"
                            :class="['w-full p-3 pl-10 bg-gray-700 text-white rounded-lg border focus:outline-none focus:border-blue-500', errors.email ? 'border-red-500' : 'border-gray-600', shakeStatus.email ? 'animate-shake' : '']"
                            @animationend="removeShake('email')"
                        />
                    </div>
                    <p :class="errors.email ? 'text-red-500 text-sm mt-1 ' : 'invisible'">{{ errors.email }}</p>
                    </div> 
                <div class="mb-4"> 
                    <div class="relative"> 
                        <font-awesome-icon icon="lock" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/> 
                        <input 
                            :type="showPassword ? 'text' : 'password'"  
                            id="password" 
                            v-model="password" 
                            @input="validatePasswordField" 
                            placeholder="Password*" 
                            :class="['w-full p-3 pl-10 bg-gray-700 text-white rounded-lg border focus:outline-none focus:border-blue-500', errors.password ? 'border-red-500' : 'border-gray-600', shakeStatus.password ? 'animate-shake' : '']" 
                            @animationend="removeShake('password')"  
                        /> 
                        <font-awesome-icon 
                            :icon="showPassword ? 'eye-slash' : 'eye'" 
                            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                            @click="togglePasswordVisibility"
                        />
                    </div>
                    <p :class="errors.password ? 'text-red-500 text-sm mt-1' : 'invisible'">{{ errors.password }} </p>
                    </div>
                <div class="btn">
                    <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">Login</button>
                </div>
            </form>
            <p :class="succMessage ? 'text-green-500 text-center mt-4' : 'text-red-500 text-center mt-4'"> 
                {{ succMessage ? succMessage : errorMessage }} 
            </p>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-">

            <p class="text-white text-center mt-4">
                No Account? <router-link to="/register" class="text-blue-500 underline"> Click Here to Register. </router-link>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);
const errorMessage = ref('');
const succMessage = ref('');
const errors = ref({
    email: '',
    password: '',
});
const shakeStatus =  ref({
    email: false,
    password: false,
});
// Toggle password visibility
const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

// Function to reset shake class after animation ends
const removeShake = (field: string) => {
    setTimeout(() => {
        shakeStatus.value[field] = false;
    }, 500); // Remove the shake class affter animation duration (0.5s)
}

// Field by Field Validation
const validateEmailField = () => {
    if (!email.value) {
        errors.value.email = 'Email is Required';
        shakeStatus.value.email = true;
    } else if (!validatedEmail(email.value)) {
        errors.value.email = 'Valid Email is Required';
        shakeStatus.value.email = true;
    } else {
        errors.value.email = ''; // Clear the error if valid
    }
};

const validatePasswordField = () => {
    if (!password.value) {
        errors.value.password = 'Password is Required';
        shakeStatus.value.password = true;
    } else if (password.value.length < 6) {
        errors.value.password = 'Password must be at least 6 characters';
        shakeStatus.value.password = true;
    } else {
        errors.value.password = ''; // Clear the error if valid
    }
};

const handleLogin = () => {
    // Run final validation on submit
    validateEmailField();
    validatePasswordField();

    if (!errors.value.email && !errors.value.password) {
        succMessage.value = 'Login Successfully';
        errorMessage.value = '';  // Clear any error message
    } else {
        errorMessage.value = 'Wrong Credentials. Please try again.';
        succMessage.value = ''; // Clear any success message
    }
};

// Email Validation function
const validatedEmail = (email: string) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
};
</script>

