<script setup lang="ts">
// import { errorMessages } from 'vue/compiler-sfc';
</script>

<template>
    <!-- LOGIN PAGE -->
    <div class="login-container">
        <h1>Login</h1>

        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>


<script>
    export default {
        data() {
            return{
                email: '',
                password: '',
                errorMessage: ''
            };
        },
        methods: {
            handleLogin(){
                // Validation
                // if(this.email === 'this@email.com' && this.password === '1234'){ // Replace this with your email and password
                if(this.email === '' || this.password === ''){
                    alert('Please fill in all fields');
                }
                else{
                    this.errorMessage = 'Invalid Email or Password';
                }
            }
        }
    }
</script>
<style scoped>
.login-container{
    max-width: 300px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.error{
    color: red;
}

</style>