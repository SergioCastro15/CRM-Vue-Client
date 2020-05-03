<template>
  <div>
    <h2>Nuevo pedido</h2>
      <div class="ficha-cliente">
          <h3>Datos de Cliente</h3>
          <p>Nombre: {{ getCliente.nombre }} {{ getCliente.apellido }}</p>
          <p>Telefono: {{ getCliente.telefono }}</p>
      </div>
      <form >
        <FormularioBuscarProducto
          @buscarProducto="buscarProductoPorNombre"
        />
        <ul class="resumen">
          <FormularioCantidadProducto
            :productos="getProductosPorNombre"
            :total="getTotal"
          />
        </ul>
        <p class="total">Total a pagar: <span>{{ getTotal }}</span><p/>
        <div class="enviar">
            <input type="submit" class="btn btn-azul" value="Agregar Pedido">
        </div>
      </form>
  </div>
</template>

<script>
import FormularioBuscarProducto from '../../components/formularios/FormularioBuscarProducto';
import FormularioCantidadProducto from '../../components/formularios/FormularioCantidadProducto';
export default {
  components: { FormularioBuscarProducto, FormularioCantidadProducto },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.$store.dispatch(`clientesModule/getCliente`, this.id);
  },
  computed: {
    getCliente() {
      return this.$store.state.clientesModule.currentCliente;
    },
    getProductosPorNombre() {
      return this.$store.state.productosModule.productosNombre;
    },
    getTotal() {
      return this.$store.state.productosModule.total;
    }
  },
  methods: {
    buscarProductoPorNombre(query) {
      this.$store.dispatch('productosModule/getProductByname', query);
    },
  }
}
</script>