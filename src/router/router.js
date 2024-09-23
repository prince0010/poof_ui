
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/",
        redirect: "/login",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;