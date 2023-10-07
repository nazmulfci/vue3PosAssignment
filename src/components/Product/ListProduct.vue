<script setup>
import 'vue3-easy-data-table/dist/style.css';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import {onMounted, ref} from "vue";

const headers = [
  { text: "title", value: "title" },
  { text: "description", value: "description"},
  { text: "price", value: "price"},
  { text: "discountPercentage", value: "discountPercentage"},
  { text: "rating", value: "rating"},
  { text: "stock", value: "stock", sortable: true},
  { text: "Action", value: "action" },
];

const items = ref([]);

onMounted(async () => {
  const resJson = await fetch('https://dummyjson.com/products').then(resText => {
    return resText.json();
  })
  items.value = resJson.products;
  console.log(items.value)
})


const loading = ref(false)
 
</script>



<template>
  <Vue3EasyDataTable
      show-index
      border-cell
      :loading="loading"
      :headers="headers"
      :items="items">
      <template #item-action="{  id }">
    <router-link :to="`productDetails/${id}`" class="btn"> Details </router-link>
  </template>
  </Vue3EasyDataTable>
</template>
<style scoped>
.btn{
  border: 1px solid #22c55e;
  background-color: #22c55e;
  color: #fff;
  width: 60px;
  padding: 5px;
}
</style>