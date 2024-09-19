<template>
    <!-- REGISTER PAGE -->
    <div class="register-container">
        <h1>Register</h1>
        <form @submit.prevent="handleRegister">
            <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" id="fname" v-model="fname">
            </div>
            <div class="form-group">
                <label for="mname">Middle Name</label>
                <input type="text" id="mname" v-model="mname">
            </div>
            <div class="form-group">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" v-model="lname">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" v-model="address">
            </div>
            <div class="form-group">
                <label for="phonenum">Phone Number</label>
                <input type="text" id="phonenum" v-model="phonenum">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="passsword">Password</label>
                <input type="text" id="passsword" v-model="passsword">
            </div>
            <div class="form-group">
                <label for="cpassword">Confirm Password</label>
                <input type="text" id="cpassword" v-model="cpassword">
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
    const passsword = ref('');
    const cpassword = ref('');
    
    const handleRegister = () => {

    }

</script>