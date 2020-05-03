<template>
  <div>
    <h2>Editar producto</h2>
    <FormularioNuevoProducto
      :getProducto="getProducto"
      @getInfoFormProducto="triggerPutProducto"
    />
  </div>
</template>

<script>
import FormularioNuevoProducto from '../../components/formularios/FormularioNuevoProducto';
export default {
  components: {
    FormularioNuevoProducto
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.$store.dispatch('productosModule/getProducto', this.id);
  },
  computed: {
    getProducto() {
      return this.$store.state.productosModule.producto;
    }
  },
  methods: {
    triggerPutProducto({ nombre, precio }) {
      console.log('hola');
      const { id } = this;
      this.$store.dispatch('productosModule/putProducto', {
        nombre,
        precio,
        id,
      });

      this.$router.push({
        path: '/productos'
      });
    }
  }

}
</script>