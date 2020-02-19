<template>
  <div>
    <add-product :title="'edit product `'+this.data.name+'`'" :data="data"/>
  </div>
</template>

<script>
import addProduct from "./addProduct";

export default {
  name: "Detail",
  components: {
    addProduct
  },
  created() {
    this.data = this.$store.getters.findProductById(this.$route.params.id);
  },
  mounted() {},
  data() {
    return {
      data: null
    };
  }
};
</script>

<style>
</style>