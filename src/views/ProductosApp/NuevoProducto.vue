<template>
  <div>
    <h2>Nuevo Producto</h2>
    <FormularioNuevoProducto
      @getInfoFormProducto="triggerPostProducto"
    />
  </div>
</template>

<script>
import FormularioNuevoProducto from '../../components/formularios/FormularioNuevoProducto';
export default {
  components: {
    FormularioNuevoProducto,
  },
  methods: {
    triggerPostProducto({ nombre, precio }){
      this.$store.dispatch('productosModule/postProductos', {
        nombre,
        precio
      });

      this.$router.push({
        path: '/productos'
      });
    }
  }
}
</script>