<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';
</script>
<template>
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="p-4 sm:ml-64">
        <div class="p-4  mt-14">
            <slot></slot>
        </div>
    </div>
    <Footer></Footer>
</template>