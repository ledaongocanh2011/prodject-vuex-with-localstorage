<template>
  <div id="app">
    <router-link :to="{ name: 'HelloWorld' }">Home</router-link>
    <router-link :to="{ name: 'listProduct' }">List Product</router-link>
    <router-link :to="{ name: 'addProduct' }">Add Product</router-link>
    <router-view />
  </div>
</template>

<script>
import Listproducts from "./components/Listproducts";
export default {
  name: "App",
  components: {
    Listproducts
  }
};
</script>

<style>
</style>
