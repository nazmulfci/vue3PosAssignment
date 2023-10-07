import { createRouter, createWebHistory } from 'vue-router'


const Dashboard = () => import('../views/Dashboard.vue');
const ProductList = () => import('../views/ProductList.vue');
const ProductDetails = () => import('../views/ProductDetails.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    
    {
      path: '/products',
      name: 'products',
      component: ProductList
    },
    {
      path: '/productDetails/:id',
      name: 'productDetails',
      component: ProductDetails
    },
    
  ]
})

export default router
