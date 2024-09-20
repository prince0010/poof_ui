<template>
    <div class="parent-container">
        <div class="login-container">
            <h1 class="title">Login</h1>

            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <div class="input-group relative">
                        <font-awesome-icon icon="envelope" class="absolute left-3 text-gray icon-visible" />
                        <input 
                            type="email" 
                            id="email"
                            v-model="email"
                            @input="validateEmailField" 
                            placeholder="example123@gmail.com*"
                            :class="{'input-field': !errors.email, 'error-field': errors.email}"
                            :key="shakeKey.email"
                        />
                    </div>
                    <p :class="errors.email ? 'error show' : 'error'">{{ errors.email }}</p>
                    </div>
                <div class="form-group">
                    <div class="input-group relative">
                        <font-awesome-icon icon="lock" class="absolute left-3 text-gray icon-visible"/>
                        <input 
                            :type="showPassword ? 'text' : 'password'" 
                            id="password" 
                            v-model="password" 
                            @input="validatePasswordField"
                            placeholder="Password*"
                            :class="{'input-field': !errors.password, 'error-field': errors.password}"
                            :key="shakeKey.password"
                        />
                        <font-awesome-icon 
                            :icon="showPassword ? 'eye-slash' : 'eye'" 
                            class="absolute right-3 cursor text-gray"
                            @click="togglePasswordVisibility"
                        />
                    </div>
                    <p :class="errors.password ? 'error show' : 'error'">{{ errors.password }}</p>
                    </div>
                <div class="btn">
                    <button type="submit" class="login-button">Login</button>
                </div>
            </form>
            <p :class="succMessage ? 'success' : 'error show'">{{ succMessage? succMessage : errorMessage }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);
const errorMessage = ref('');
const succMessage = ref('');
const errors = ref({
    email: '',
    password: '',
});

// Toggle password visibility
const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

// Create a shakeKey to reset the animation
const shakeKey = computed(() => ({
    email: errors.value.email ? `${Date.now()}-email` : 'email',
    password: errors.value.password ? `${Date.now()}-password` : 'password', 

}));

// Field by Field Validation
const validateEmailField = () => {
    if (!email.value) {
        errors.value.email = 'Email is Required';
    } else if (!validatedEmail(email.value)) {
        errors.value.email = 'Valid Email is Required';
    } else {
        errors.value.email = ''; // Clear the error if valid
    }
};

const validatePasswordField = () => {
    if (!password.value) {
        errors.value.password = 'Password is Required';
    } else if (password.value.length < 6) {
        errors.value.password = 'Password must be at least 6 characters';
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

<style>

/* Body styles */
body {
    min-height: 100vh;
    color: #ffffff;
    background: #1d1d1d;
    font-family: Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
}

/* Parent container to center the login container */
.parent-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.title{
    margin-top: 0px; /* Removes any extra space above the title */
    padding-top: 0.5rem; /* Adjusts the space inside the element from the top */
    margin-bottom: 3rem; /* Keeps space below the title */
    font-size: 3rem; /* Keeps the large size of the title */
    text-align: center; /* Centers the title text */
}
/* Login container styling */
.login-container {
    max-width: 400px;
    padding: 3rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #2a2a2a;
    width: 100%;
}

/* Error message styling */
.error {
    color: red;
    font-size: 0.85rem;
    margin-top: 5px; /* Add margin to separate from input */
    height: 20px; /* Fixed height to prevent layout shifting */
    visibility: hidden; /* Hide the error message placeholder initially */
}

.error.show {
    visibility: visible; /* Show error messages */
}

/* Success message styling */
.success {
    color: green;
}

/* Button container */
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Form group wrapper */
.form-group {
    /* display: flex;
    align-items: center; */
    margin-bottom: 1.5rem; /* Center vertically */
    position: relative; /* Position icons relative to the input field */
}

/* Input group wrapper for icons and inputs */
.input-group {
    display: flex;
    align-items: center;
    position: relative;
}

/* Input field styling */
.input-field,
.error-field {
    width: 100%;
    padding: 0.75rem 2.5rem; /* Space for icons */
    border: 1px solid #ccc; /* Default border */
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    box-sizing: border-box;
    height: 45px; /* Fixed height for consistency */
    font-size: 1rem;
    line-height: 1.5; /* Ensure line-height matches input height */
    transition: all 0.3s ease;
    position: relative;
}

/* Shake animation */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
}

/* Error field styling */
.error-field {
    border-color: red; /* Red border for error */
    animation: shake 0.5s ease;
}

/* Icon positioning */
.absolute {
    position: absolute;
    top: 50%; /* Vertically center the icon */
    transform: translateY(-50%); /* Ensure vertical centering */
    font-size: 0.875rem; /* Adjust the icon size */
}

.left-3 {
    left: 12px;
}

.right-3 {
    right: 12px;
}

.cursor {
    cursor: pointer;
}

.text-gray {
    color: rgb(156, 163, 175); /* Light gray for the icons */
}

.icon-visible {
    z-index: 2;
    pointer-events: none; /* Ensure icon doesn't interfere with input */
}

/* Button styling */
.login-button {
    background-color: rgb(75, 74, 74);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

/* Button hover and focus states */
.login-button:hover {
    background-color: rgb(37, 37, 37);
}

.login-button:focus {
    outline: none;
    background-color: rgb(109, 109, 109);
}

.login-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}


</style>
