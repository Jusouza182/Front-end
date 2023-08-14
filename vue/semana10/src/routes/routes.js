import {createRouter, createWebHistory} from 'vue-router'

import LoginInstagran from "../views/Login/LoginInstagran.vue";
import HomeInstagran from "../views/Home/HomeInstagran.vue";
import SignUp from "../views/SignUp/SingUp.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Login",
            component: LoginInstagran
        },
        {
            path: "/cadastro",
            name: "SignUp",
            component: SignUp
        },
        {
            path: '/home',
            name: 'Home',
            component: HomeInstagran
        }
    ]
})

export default router

