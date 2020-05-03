<template>
  <div>
    <form action="/productos" method="POST">
        <legend>Llena todos los campos</legend>

        <div class="campo">
          <label>Nombre:</label>
          <input v-model="getProducto.nombre" type="text" placeholder="Nombre Producto" name="nombre">
        </div>

        <div class="campo">
          <label>Precio:</label>
          <input v-model="getProducto.precio" type="number" name="precio" min="0.00" step="0.01" placeholder="Precio" >
        </div>

        <div class="enviar">
          <input
            @click.prevent="sendInfoFormProducto"
            type="submit"
            class="btn btn-azul"
            :value="valueInput"
          >
        </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    getProducto: {
      type: Object,
      default: () => {
        return {
          nombre: '',
          precio: '',
        };
      },
    },
  },
  computed: {
    valueInput() {
      const value = Object.keys(this.getProducto);
      let currentValueButton;
      value.forEach(element => {
        currentValueButton = this.getProducto[element].length === 0 ? 'Agregar Producto' : 'Editar Producto'
      });

      return currentValueButton;
    }
  },
  methods: {
    sendInfoFormProducto() {
      const { nombre, precio } = this.getProducto;
      this.$emit('getInfoFormProducto', {
        nombre,
        precio,
      });
    }
  }
}
</script>