<template>
    <!-- REGISTER PAGE -->
    <div class="flex justify-center items-center h-screen bg-primary">
        <div class="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-lg">
            <p class="text-3xl font-bold text-center bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent mb-8">Register</p>
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
                    <button type="submit" class="w-full bg-amber-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-amber-300 focus:outline-none ">
                        Register
                    </button>
                </div>
            </form>
            <p :class="succMessage ? 'text-green-500 text-center mt-4' : 'text-red-500 text-center mt-4'">
                {{ succMessage ? succMessage : errMessage }}
            </p>

            <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-">

            <p class="text-white text-center mt-4">
                Already Have an Account? <router-link to="/" class="text-blue-500 underline"> Click Here to Login</router-link>
            </p>
        </div>
    </div>
</template>


<script setup lang="ts">

    import{
        fname,
        mname,
        lname,
        address,
        phonenum,
        email,
        password,
        cpassword,
        showPassword,
        succMessage,
        errMessage,
        errors,
        shakeStatus,
        removeShakeStatus,
        togglePassword,
        handleRegister,
        validatedFirstName,
        validatedMiddleName,
        validatedLastName,
        validatedAddress,
        validatedPhoneNumber,
        validatedEmailField,
        validatedPasswordField,
        validateConfirmPasswordField,
    } from '../services/RegisterScript';

</script>
