import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import User from './components/user/User.vue'
import ShowUser from './components/user/ShowUser.vue'
import Post from './components/Post.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    {
        path: '/users', name: 'users', component: User, children: [
            { path: ':id',  name: 'showUser', component: ShowUser }
        ]
    },
    { path: '/posts', component: Post },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;