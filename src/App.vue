<template>
  <div>
   <!-- <Login />  -->
   <!-- <Register/> -->
   <router-view />
  </div>
</template>



<script>
  import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';


  export default {
    // components: {
    //   Login
    //   // Register
    // }
    name: 'App',
  };
</script>