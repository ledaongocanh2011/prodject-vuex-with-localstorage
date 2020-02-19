<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <h4 class="text-center text-uppercase mt-5 mb-5">{{title}}</h4>
          <b-form>
            <b-form-group id="input-group-1" label="Product Name:" label-for="name">
              <b-form-input id="name" required placeholder="Enter name" v-model="data.name"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Product price" label-for="price">
              <b-form-input
                id="price"
                required
                placeholder="Enter price"
                type="number"
                v-model="data.price"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Product address" label-for="address">
              <b-form-input
                id="address"
                required
                placeholder="Enter address"
                v-model="data.address"
              ></b-form-input>
            </b-form-group>

            <b-button
              type="submit"
              variant="primary"
              class="mb-5"
              v-on:click="addProductData()"
            >Submit</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uuid from "uuid";

export default {
  props: {
    title: {
      type: String,
      default: "add product"
    },
    data: {
      type: Object,
      default: () => {
        return {
          name: null,
          price: null,
          address: null
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    addProductData: function() {
      if (this.data.hasOwnProperty("id")) {
        this.$store.dispatch("EDIT", this.data);
      } else {
        this.$store.dispatch("ADD", {
          ...this.data,
          id: uuid.v4()
        });
      }
    }
  }
};
</script>

<style>
</style>




