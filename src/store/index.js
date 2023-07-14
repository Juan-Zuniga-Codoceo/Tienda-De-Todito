/*import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mejoresproductos: [],
    tiposproductos: [],
    ropaHombre: [], // Cambia el nombre del estado a "ropaHombre"
    ropaMujer: [], // Cambia el nombre del estado a "ropaMujer"
    electronica: []
  },
  getters: {},
  mutations: {
    SET_MEJORES_PRODUCTOS(state, mejoresproductos) {
      state.mejoresproductos = mejoresproductos;
    },
    SET_TIPOS_PRODUCTOS(state, tiposproductos) {
      state.tiposproductos = tiposproductos;
    },
    SET_ROPA_HOMBRE(state, ropaHombre) {
      state.ropaHombre = ropaHombre; // Actualiza el estado "ropaHombre"
    },
    SET_ROPA_MUJER(state, ropaMujer) {
      state.ropaMujer = ropaMujer; // Actualiza el estado "ropaMujer"
    },
    SET_ELECTRONICA(state, electronica) {
      state.electronica = electronica;
    },
  },
  actions: {
    async fetchInfo({ commit }) {
      try {
        let response = await fetch(`/home.json`);
        let json = await response.json();
        console.log(json);
        let mejoresproductos = json.mejoresproductos;
        let tiposproductos = json.tiposproductos;
        commit('SET_MEJORES_PRODUCTOS', mejoresproductos);
        commit('SET_TIPOS_PRODUCTOS', tiposproductos);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchRopaHombre({ commit }) {
      try {
        let response = await fetch('/ropaHombre.json');
        let json = await response.json();
        console.log(json);
        let ropaHombre = json; // No es necesario acceder a "ropaHombre.ropaHombre"
        commit('SET_ROPA_HOMBRE', ropaHombre);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchRopaMujer({ commit }) {
      try {
        let response = await fetch('/ropaMujer.json');
        let json = await response.json();
        console.log(json);
        let ropaMujer = json; // No es necesario acceder a "ropaMujer.ropaMujer"
        commit('SET_ROPA_MUJER', ropaMujer);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchElectronica({ commit }) {
      try {
        let response = await fetch('/electronica.json');
        let json = await response.json();
        console.log(json);
        let electronica = json.electronica;
        commit('SET_ELECTRONICA', electronica);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {}
});*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mejoresproductos: [],
    tiposproductos: [],
    ropaHombre: [], 
    ropaMujer: [], 
    electronica: [],
    cart: [] 
  },
  getters: {
    cartProducts(state) {
      return state.cart.map(prod => {
        let myProd = { ...prod };
        myProd.total = prod.count * prod.price; 
        return myProd;
      });
    },
    cartCount(state) {
      return state.cart.length;
    },
    cartTotal(state, getters) {
      const subtotal = getters.cartProducts.reduce((total, prod) => {
        return total + prod.total;
      }, 0);
    
      if (subtotal < 500) {
        return Math.round(subtotal * 0.95); 
      } else {
        return Math.round(subtotal * 0.89); 
      }
    }
  },
    
  mutations: {
    SET_MEJORES_PRODUCTOS(state, mejoresproductos) {
      state.mejoresproductos = mejoresproductos;
    },
    SET_TIPOS_PRODUCTOS(state, tiposproductos) {
      state.tiposproductos = tiposproductos;
    },
    SET_ROPA_HOMBRE(state, ropaHombre) {
      state.ropaHombre = ropaHombre; 
    },
    SET_ROPA_MUJER(state, ropaMujer) {
      state.ropaMujer = ropaMujer; 
    },
    SET_ELECTRONICA(state, electronica) {
      state.electronica = electronica;
    },
    ADD_PRODUCT_TO_CART(state, product) {
      const existingProduct = state.cart.find(p => p.id === product.id);
    
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        const cartProduct = {
          id: product.id,
          nombre: product.title,
          price: product.price,
          count: 1
        };
        state.cart.push(cartProduct);
      }
    },
    REMOVE_PRODUCT_FROM_CART(state, idProduct) {
      const index = state.cart.findIndex(p => p.id === idProduct);
      const product = state.cart[index];
    
      if (product) {
        product.count -= 1;
        if (product.count === 0) {
          state.cart.splice(index, 1);
        }
      }
    },
    ADD_STOCK_PRODUCT_CART(state, idProduct) {
      state.cart.forEach(p => {
        if (p.id === idProduct) {
          p.count += 1;
        }
      });
    },
    REMOVE_STOCK_PRODUCT_CART(state, idProduct) {
      state.cart.forEach(p => {
        if (p.id === idProduct && p.count > 1) {
          p.count -= 1;
        }
      });
    },
  },
  actions: {
    async fetchInfo({ commit }) {
      try {
        let response = await fetch('/home.json');
        let json = await response.json();
        let mejoresproductos = json.mejoresproductos;
        let tiposproductos = json.tiposproductos;
        commit('SET_MEJORES_PRODUCTOS', mejoresproductos);
        commit('SET_TIPOS_PRODUCTOS', tiposproductos);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchRopaHombre({ commit }) {
      try {
        let response = await fetch('/ropaHombre.json');
        let json = await response.json();
        let ropaHombre = json; // No es necesario acceder a "ropaHombre.ropaHombre"
        commit('SET_ROPA_HOMBRE', ropaHombre);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchRopaMujer({ commit }) {
      try {
        let response = await fetch('/ropaMujer.json');
        let json = await response.json();
        let ropaMujer = json; // No es necesario acceder a "ropaMujer.ropaMujer"
        commit('SET_ROPA_MUJER', ropaMujer);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchElectronica({ commit }) {
      try {
        let response = await fetch('/electronica.json');
        let json = await response.json();
        let electronica = json;
        commit('SET_ELECTRONICA', electronica);
      } catch (error) {
        console.log(error);
      }
    },
    addProductToCart({ commit }, product) {
      commit('ADD_PRODUCT_TO_CART', product);
    },
    removeProductFromCart({ commit }, idProduct) {
      commit('REMOVE_PRODUCT_FROM_CART', idProduct);
    },
    addStockProductCart({ commit }, idProduct) {
      commit('ADD_STOCK_PRODUCT_CART', idProduct);
    },
    removeStockProductCart({ commit }, idProduct) {
      commit('REMOVE_STOCK_PRODUCT_CART', idProduct);
    }
  },
  modules: {}
});

