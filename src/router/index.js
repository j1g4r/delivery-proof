import {createWebHistory, createRouter} from "vue-router";

const Delivery = () => import('../components/Delivery.vue');
const CameraBox = () => import('../components/CameraBox.vue');
const SignBox = () => import('../components/SignBox.vue');
const Login = () => import('../components/Login.vue');
const Home = () => import('../components/Home.vue');

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/delivery',
        name: 'Delivery',
        component: Delivery
    },
    {
        path: '/camera',
        name: 'CameraBox',
        component: CameraBox
    },
    {
        path: '/sign',
        name: 'SignBox',
        component: SignBox
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;