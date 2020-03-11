<template>
  <div>
    <form action="/clientes" method="POST">
      <legend>Llena todos los campos</legend>

      <div class="campo">
        <label>Nombre:</label>
        <input v-model="getCliente.nombre" type="text" placeholder="Nombre Cliente" name="nombre">
      </div>

      <div class="campo">
        <label>Apellido:</label>
        <input v-model="getCliente.apellido" type="text" placeholder="Apellido Cliente" name="apellido">
      </div>

      <div class="campo">
        <label>Empresa:</label>
        <input v-model="getCliente.empresa" type="text" placeholder="Empresa Cliente" name="empresa">
      </div>

      <div class="campo">
        <label>Email:</label>
        <input v-model="getCliente.email" type="email" placeholder="Email Cliente" name="email">
      </div>

      <div class="campo">
        <label>Teléfono:</label>
        <input v-model="getCliente.telefono" type="tel" placeholder="Teléfono Cliente" name="telefono">
      </div>

      <div class="enviar">
        <input
          @click.prevent="sendInfoForm"
          :disabled="disabledButton"
          type="submit"
          class="btn btn-azul"
          value="Agregar Cliente"
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    getCliente: {
      type: Object,
      default: () => {
        return {
          nombre: '',
          apellido: '',
          empresa: '',
          email: '',
          telefono: ''
        }
      }
    }
  },
  methods: {
    sendInfoForm() {
      const { nombre, apellido, empresa, email, telefono } = this.getCliente;
      this.$emit('getInfoForm', {
        nombre,
        apellido,
        empresa,
        email,
        telefono
      });
    }
  },
  computed: {
    disabledButton() {
      const { nombre, apellido, empresa, email, telefono } = this.getCliente;

      return !nombre || !apellido || !empresa || !email || !telefono;
    },
  }
}
</script>