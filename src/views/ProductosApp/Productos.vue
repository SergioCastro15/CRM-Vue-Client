<template>
  <div>
    <h2>Productos</h2>

    <router-link
      to="/NuevoProducto"
      class="btn btn-verde nvo-cliente">
      <i class="fas fa-plus-circle"></i>
        Nuevo Producto
    </router-link>

    <ul class="listado-productos">
      <Spinner v-if="getProductos.length < 1" />
      <Producto
        v-else
        :infoProducto="getProductos"
        @deleteProduct="triggerDeleteProduct"
      />
    </ul>
  </div>
</template>

<script>
import Spinner from '../../components/layout/Spinner';
import Producto from '../../components/productos/Producto';
export default {
  components: {
    Producto,
    Spinner,
  },
  mounted() {
    this.$store.dispatch('productosModule/getProductos');
  },
  computed: {
    getProductos() {
      return this.$store.state.productosModule.productos;
    }
  },
  methods: {
    triggerDeleteProduct(idProducto) {
      this.$store.dispatch('productosModule/deleteProducts', idProducto);
    }
  }
}
</script>