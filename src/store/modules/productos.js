import axios from 'axios';

export default {
  namespaced: true,
  state: {
    productos: [],
    producto: {},
    productosNombre: [],
    total: 0,
  },
  mutations: {
    SET_PRODUCTOS(state, productos) {
      state.productos = productos;
    },
    SET_PRODUCTO(state, producto) {
      state.producto = producto;
    },
    DELETE_PRODUCTOS(state, idProducto) {
      state.productos = state.productos.filter(({ _id }) => _id !== idProducto);
    },
    SET_PRODUCTO_BY_NAME(state, response) {
      const productoResultado = {
        ...response,
        producto: response[0]._id,
        cantidad: 0
      };
      state.productosNombre = [...state.productosNombre, productoResultado];
    },
    UPDATE_PRODUCTOS(state, producto) {
      state.productosNombre = state.productosNombre.map(item => {
        if(item.producto === producto.producto) {
          item = producto;
        }
        return item;
      });
    },
    UPDATE_TOTAL(state) {
      state.total = state.productosNombre.reduce((acc, item) => {
        return acc + (item.cantidad * item[0].precio);
      }, 0);
    },
    DELETE_PRODUCTOS_BY_NAME(state, producto) {
      state.productosNombre = state.productosNombre.filter(
        item => item.producto !== producto.producto
      );
    },
    RESET_PRODUCTOS_BY_NAME(state) {
      state.productosNombre = [];
    }
  },
  actions: {
    async getProductos({ commit }) {
      try {
        const productos = await axios.get('/getProductos');
        commit('SET_PRODUCTOS', productos.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getProducto({ commit }, id) {
      try {
        const producto = await axios.get(`/getProducto/${id}`);
        commit('SET_PRODUCTO', producto.data);
      } catch (error) {
        console.log(error);
      }
    },
    async postProductos(_, payload) {
      const { nombre, precio } = payload;
      try {
        await axios.post('/postProducto', {
          nombre,
          precio
        });
      } catch (error) {
        console.log(error);
      }
    },
    async putProducto(_, payload) {
      const { nombre, precio, id } = payload;
      try {
        await axios.put(`/putProducto/${id}`, {
          nombre,
          precio
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProducts({ commit }, idProducto) {
      try {
        await axios.delete(`/deleteProducto/${idProducto}`);
        commit('DELETE_PRODUCTOS', idProducto);
      } catch (error) {
        console.log(error);
      }
    },
    async getProductByname({ commit }, query) {
      try {
        const productos = await axios.post(`/productos/busqueda/${query}`)
        commit('SET_PRODUCTO_BY_NAME', productos.data);
      } catch(error) {
        console.log(error);
      }
    }
  },
}