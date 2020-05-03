import axios from 'axios';

export default {
  namespaced: true,
  state: {
    clientes: [],
    currentCliente: {},
  },
  mutations: {
    SET_CLIENTES(state, clientes) {
      state.clientes = clientes;
    },
    POST_CLIENTES(state, cliente) {
      state.clientes = [...state.clientes, cliente];
    },
    SET_CLIENTE(state, cliente) {
      state.currentCliente = cliente;
    },
    DELETE_CLIENTE(state, ClienteId) {
      state.clientes = state.clientes.filter(({ _id }) => _id !== ClienteId);
    },
  },
  actions: {
    async getClientes({ commit }){
      const clientes = await axios.get('/getClientes');
      commit('SET_CLIENTES', clientes.data);
    },
    async getCliente({ commit }, id){
      const cliente = await axios.get(`/getCliente/${id}`);
      commit('SET_CLIENTE', cliente.data);
    },
    async postClientes(_, payload) {
      const { nombre, apellido, empresa, email, telefono } = payload;
      try {
        await axios.post('/postCliente', {
          nombre,
          apellido,
          empresa,
          email,
          telefono
        });
      } catch (error) {
        console.log(error);
      }
    },
    async putClientes(_, payload) {
      const { nombre, apellido, empresa, email, telefono, id } = payload;
      try {
        await axios.put(`/putCliente/${id}`, {
          nombre,
          apellido,
          empresa,
          email,
          telefono
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCliente({ commit }, id) {
      try {
        await axios.delete(`/deleteCliente/${id}`)
        commit('DELETE_CLIENTE', id);
      } catch (error) {
        console.log(error);
      }
    },
  },
}