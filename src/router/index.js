import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import addProduct from '@/components/addProduct'
import Listproducts from '@/components/Listproducts'
import Detail from '@/components/Detail'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/listProduct',
            name: 'listProduct',
            component: Listproducts
        },
        {
            path: '/addProduct',
            name: 'addProduct',
            component: addProduct
        },
        {
            path: '/product/:id',
            name: 'productDetail',
            component: Detail,
            props: true
        }
    ]
})
