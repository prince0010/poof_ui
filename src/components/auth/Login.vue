<template>
    <div class="flex justify-center items-center h-screen bg-primary">
        <div class="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-lg">
            <p class="text-3xl font-bold text-center text-white mb-8 bg-gradient-to-r from-amber-300 to-red-500 text-transparent bg-clip-text">Login</p>

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
                            :icon="showPassword ? 'eye' : 'eye-slash'" 
                            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                            @click="togglePasswordVisibility"
                        />
                    </div>
                    <p :class="errors.password ? 'text-red-500 text-sm mt-1' : 'invisible'">{{ errors.password }} </p>
                    </div>
                <div class="btn">
                    <button type="submit" class="w-full bg-amber-400 text-black py-2 px-4 rounded-lg font-semibold hover:bg-amber-300 focus:outline-none">Login</button>
                </div>
            </form>
            <p :class="succMessage ? 'text-green-500 text-center mt-4' : 'text-red-500 text-center mt-4'"> 
                {{ succMessage ? succMessage : errorMessage }} 
            </p>

            <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-">

            <p class="text-white text-center mt-4">
                No Account? <router-link to="/register" class="text-blue-500 underline"> Click Here to Register. </router-link>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

import {
   email,
   password,
   showPassword,
   errorMessage,
   succMessage,
   errors,
   shakeStatus,
   togglePasswordVisibility,
   removeShake,
   validateEmailField,
   validatePasswordField,
   handleLogin,
} from '../services/LoginScript';
</script>

