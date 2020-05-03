import axios from 'axios';

export default {
  namespaced: true,
  state: {
    pedidos: [],
  },
  mutations: {
    SET_PEDIDOS(state, pedidos) {
      state.pedidos = pedidos;
    },
    DELETE_PEDIDOS(state, pedidoId) {
      state.pedidos = state.pedidos.filter(({ _id }) => _id !== pedidoId);
    }
  },
  actions: {
    async getPedidos({ commit }) {
      try {
        const pedidos = await axios.get('/getPedidos');
        commit('SET_PEDIDOS', pedidos.data);
      } catch(err) {
        console.log(err);
      }
    },
    async postPedidos(_, { cliente, pedido, total }) {
      try {
        await axios.post('/postPedido', {
          cliente,
          pedido,
          total
        });
      } catch(err) {
        console.log(err);
      }
    },
    async deletePedidos({ commit }, pedidoId) {
      try {
        await axios.delete(`/deletePedido/${pedidoId}`);
        commit('DELETE_PEDIDOS', pedidoId);
      } catch(err) {
        console.log(err);
      }
    }
  },
};