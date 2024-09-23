
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: "/login", //If they try to go to /login, they will be redirected back to /, where the login page is still displayed.
        redirect: "/", // When users access /, they will see the login page.
    },
    {
        path: "/", // When users access /, they will see the login page.
        name: "Login",
        component: Login
    },
    {
        path: "/register", // The registration page can be accessed at /register
        name: "Register",
        component: Register
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;