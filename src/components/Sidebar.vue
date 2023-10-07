<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                
                <li>
                    <router-link to="/" class="flex items-center p-2 text-dark rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group bg-yellow">
                       Dashboard 
                    </router-link>
                    
                </li>
                <li>
                    <router-link to="/products" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group bg-gren">
                       Products 
                    </router-link>
                    
                </li>
            </ul>
        </div>
    </aside>

</template>

<style scoped>
    .active{
        background-color: #c5c5c5a8;
        border-radius: 7px;
    }
    .bg-gren{
        background-color: #22c55e;
    }
</style>