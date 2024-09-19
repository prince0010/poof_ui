<template>
    <div class="parent-container">
    <div class="login-container">
        <h1 class="title">Login</h1>

        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="email" 
                    id="email"
                    v-model="email"
                    @input="validateEmailField" 
                    >
                <p v-if="errors.email" class="error">{{ errors.email }}</p>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    v-model="password" 
                    @input="validatePasswordField"
                    >
                <p v-if="errors.password" class="error">{{ errors.password }}</p>
            </div>
            <div class="btn">
                <button type="submit" class="login-button">Login</button>
            </div>
        </form>
        <!-- Display error or success message -->
        <p :class="succMessage ? 'success' : 'error'">{{ succMessage? succMessage : errorMessage }}</p>
    </div>
</div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
    
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const succMessage = ref('');
    const errors = ref({
        email: '',
        password: '',
    });
    // Field by Field Validation

    const validateEmailField = () => {
        if(!email.value){
            errors.value.email = 'Email is Required';
        }
        else if(!validatedEmail(email.value)){
            errors.value.email = 'Valid Email is Required';
        }
        else{
            errors.value.email = ''; // Clear the error if valid
        }

    }
    const validatePasswordField = () => {
        if(!password.value){
            errors.value.password = 'Password is Required';
        }
        else if(password.value.length < 6){
            errors.value.password = 'Password must be at least 6 characters';
        }
        else{
            errors.value.password = ''; // Clear the error if valid
        }
    }
    const handleLogin = () => {

    // Run final validation on submit
        validateEmailField();
        validatePasswordField();
        

        // NO API CONNECTED IN THIS ONE YET FROM LARAVEL
        // If no errors, submit the form or do further processing
        if(!errors.value.email && !errors.value.password) {
            succMessage.value = 'Login Successfully'; // Replace or add some with the proper logic later like after logged in it will redirect or something.
            errorMessage.value = '';  // Clear any error message
        }
        else{
            errorMessage.value = 'Wrong Credentials. Please try again.';
            succMessage.value = '' ; // Clear any success message
        }
    }

    // Email Validation function simple regex check
    const validatedEmail = (email: string) =>{
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(email);
    };
</script>

 
<style>

/* Consolidated body styles */
body {
    min-height: 100vh;
    color: #ffffff;
    background: #1d1d1d;
    transition: color 0.5s, background-color 0.5s;
    line-height: 1.6;
    font-family: Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.parent-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.login-container{
    max-width: 300px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.error{
    color: red;
}
.success{
    color: green;
}
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-group{
    margin-bottom: 1rem;
}
label{
    display: block;
    margin-bottom: 0.5rem;
}
input{
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

/* Button Style */

.login-button{
    background-color: rgb(75, 74, 74);
    color: white;/* white text */
    padding: 10px 20px;/* Padding */
    border: none;/* Remove border */
    border-radius: 5px;/* Rounded corners */
    cursor: pointer;/* Pointer cursor on hover */
    font-size: 1rem; /* Font size */
    transition: background-color 0.3s ease;/* Smooth hover effect */
}

/* Button hover and focus state */
.login-button:hover{
    background-color: rgb(37, 37, 37);
}
.login-button:focus{
    outline: none; /* Remove outline on focus */
    background-color: rgb(109, 109, 109);/* Even darker green on focus */
}

/* Disable Button State */
.login-button:disabled{
    background-color: #cccccc;/* Gray background for disabled state */
    cursor: not-allowed;/* Disabled cursor */
}
</style>