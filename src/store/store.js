import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getter'
import mutations from './mutation'
import actions from './action'


Vue.use(Vuex);


if (!localStorage.getItem('products') || !JSON.parse(localStorage.getItem('products')).length) {
    localStorage.setItem('products', JSON.stringify([
        { id: 1, name: 'bun cha', price: 20000, address: 'duong khue', isUpdate: true },
        { id: 2, name: 'suon xao chua ngot', price: 60000, address: 'hai ba trung', isUpdate: true },
        { id: 3, name: 'kem tuoi', price: 5000, address: 'duong khue', isUpdate: true },
        { id: 4, name: 'ga bo xoi', price: 5000, address: 'su pham ha noi', isUpdate: true },
        { id: 5, name: 'kem chanh', price: 3000, address: 'cho xanh', isUpdate: true },
    ]));
}

export default new Vuex.Store({
    // troi oi. cai doan nay no tra ve mang? ma ====> JSON.parse(localStorage.getItem('products'))
    state: {
        products: JSON.parse(localStorage.getItem('products')),
        isUpdate: false
    },
    getters: {
        productsDataObj(state) {
            // console.log(state);
            return state.products;
        },
        findProductById(state) {
            /**
             * state.products.find(function(item) {
             *  return item.id === id
             * })
             * 
             * this.$store.getters.findProductById(this.$route.params.id)
             */
            return function (id) {
                return state.products.find(item => item.id == id)
            }
        }
    },
    mutations: {
        addProduct: (state, payloads) => {
            state.products.push(payloads)
            localStorage.setItem('products', JSON.stringify(state.products))
        },
        editProduct: (state, payloads) => {
            state.products.forEach((item, index) => {
                if (item.id == payloads.id) {
                    state.products[index] = payloads
                    localStorage.setItem('products', JSON.stringify(state.products))
                }
            })
        },
        // deleteProduct(state, id) {
        //     index = state.products.findIndex(item => item.id == id)
        //     state.products.splice(index, 1)
        // }
        // deleteProduct: (state, payloads) => {
        //     state.products.forEach((item, index) => {
        //         if (item.id == payloads.id) {
        //             state.products[index] = payloads
        //             localStorage.setItem('products', JSON.stringify(state.products))
        //         }
        //     })
        // }
        DELETE_PRODUCT(state, product) {
            var index = state.products.findIndex(p => p.id == product.id);
            state.products.splice(index, 1);

            localStorage.setItem('products', JSON.stringify(state.products))
         }

    },
    actions: {
        ADD: ({ commit }, payloads) => {
            commit('addProduct', payloads)
        },
        EDIT: ({ commit }, payloads) => {
            commit('editProduct', payloads)
        },
        // DELETEPRODUCT:({commit},payloads) =>{
        //     commit('deleteProduct',payloads)
        // }
       


    }
})