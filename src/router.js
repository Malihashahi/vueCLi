import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponet.vue'
import User from './components/UserComponent.vue'
import Post from './components/PostComponent.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/users', component: User },
    { path: '/posts', component: Post },
    { path: '/users/:id', component: User },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;