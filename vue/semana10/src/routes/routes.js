import {createRouter, createWebHistory} from 'vue-router'

import LoginInstagran from "../views/Login/LoginInstagran.vue";
import HomeInstagran from "../views/Home/HomeInstagran.vue";
import SignUp from "../views/SignUp/SingUp.vue";
import AboutInstagran from "../views/about/AboutInstagran.vue"
import NewPost from "../views/Post/New/NewPost.vue"
import ListPost from "../views/Post/List/ListPost.vue"

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
        },
        {
            path: '/about',
            name: 'Sobre',
            component: AboutInstagran
        }, 
        {
            path: '/novopost',
            name: 'NewPost',
            component: NewPost
        }, 
        {
            path: '/listapost',
            name: 'ListPost',
            component: ListPost
        }

    ]
})

export default router

