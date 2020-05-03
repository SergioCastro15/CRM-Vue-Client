<template>
  <form>
    <legend>Busca un Producto y agrega una cantidad</legend>

    <div class="campo">
        <label>Productos:</label>
        <input
          type="text"
          placeholder="Nombre Productos"
          name="productos"
          v-model="producto"
        >
    </div>

    <input
      type="submit"
      class="btn btn-azul btn-block"
      value="Buscar productos"
      @click.prevent="onSubmitFunction"
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      producto: '',
    };
  },
  methods: {
    onSubmitFunction() {
      this.$emit('buscarProducto', this.producto);
      this.producto = '';
    }
  }
}
</script>
