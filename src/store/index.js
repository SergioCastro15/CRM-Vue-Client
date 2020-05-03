import Vue from 'vue'
import Vuex from 'vuex'
import productos from './modules/productos';
import clientes from './modules/clientes';
import pedidos from './modules/pedidos';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    clientesModule: clientes,
    productosModule: productos,
    pedidosModule: pedidos,
  },
})
