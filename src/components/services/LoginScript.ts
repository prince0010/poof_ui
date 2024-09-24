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

export {
    email,
    password,
    showPassword,
    errorMessage,
    succMessage,
    errors,
    shakeStatus,
    validateEmailField,
    validatePasswordField,
    togglePasswordVisibility,
    removeShake,
    handleLogin,
}