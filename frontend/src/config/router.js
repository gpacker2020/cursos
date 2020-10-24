import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/componentes/home/Home'
import AdminPages from '@/componentes/admin/AdminPages'
import ArticlesByCategory from '@/componentes/article/ArticleByCategory'
import ArticleById from '@/componentes/article/ArticleById'

Vue.use(VueRouter)

const rotas = [{
    name: 'home',
    path: '/',
    component: Home
} , {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages    
}, {
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
}, {
    name: 'articleById',
    path: '/articles/:id',
    component: ArticleById
}
]

export default new VueRouter({
    mode: 'history',
    // rotas abaixo eh o nome da constante criada acima
    routes: rotas 
})
