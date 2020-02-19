<template>
  <div>
    <add-product />
    <div v-if="productsDataObj.length">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="objectData in data" :key="objectData.id">
            <td>{{objectData.name}}</td>
            <td>{{objectData.price}}</td>
            <td>{{objectData.address}}</td>
            <td>
              <button class="btn btn-success" @click="gotoEditView(objectData.id)">Edit</button>
              <button class="btn btn-danger" @click="delProduct(objectData)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import addProduct from "./addProduct";

export default {
  components: {
    addProduct
  },
  computed: {
    ...mapGetters(["productsDataObj"]),
    data: {
      set(value) {
        console.log(value);
      },
      get() {
        return this.productsDataObj;
      }
    }
  },
  methods: {
    gotoEditView(id) {
      this.$router.push("/product/" + id);
    },
    delProduct(product) {
      this.$store.commit('DELETE_PRODUCT', product);
    },
    mounted() {
      // console.log(this.productsDataObj);
    }
  }
};
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
</style>