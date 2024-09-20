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
