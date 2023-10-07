<script setup>
import Layout from '../components/Layout.vue';
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router';

 
onMounted(() => {
    getdata();
})

const route = useRoute();
let id =route.params.id

const data = ref([]);

async function getdata() {
    fetch('https://dummyjson.com/products/'+id)
.then(res => res.json())
.then(json => data.value = json)
}
 
</script>
<template>
    <Layout>
        <!-- {{ data }} -->
        <div class="col-6">
            <div>
                <img class="card-img-top" :src="data.thumbnail" :alt="data.title">
            </div>
            <div>
                <table>
                    <tr>
                        <td  v-for="img in data.images"> 
                            <img class="img img-thumbnail" :src="img" style="width: 90%;border:2px solid #ddd;padding:2px;cursor: pointer;"></td>
                    </tr>
                </table>
            </div>
            </div>


            <div class="col-6">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white"> {{ data.title }} </h1>
        <p> {{ data.description }} </p>
        <p> 
            <span v-if="data.stock>0" class="text-green"> In Stock </span>
            <span v-else class="text-red"> Out of Stock </span>
         </p>
        <p class="text-green"> Price : {{ data.price }} </p>
        <p class="text-green"> Brand : {{ data.brand }} </p>
        <p class=""> Category : {{ data.category }} </p>
            </div>
    </Layout>
</template>

<style scoped>
.col-6{
    width: 50%;
    float: left;
}
.col-6 > div > table{
    margin-top: 30px;
}
.card-img-top{
    width: 90%;
}
</style>