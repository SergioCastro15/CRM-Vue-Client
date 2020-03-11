<template>
  <div>
    <h2>Nuevo Cliente</h2>
    <FormularioNuevoCliente
      @getInfoForm="addNewCliente"
    />
  </div>
</template>

<script>
import FormularioNuevoCliente from '../components/formularios/FormularioNuevoCliente';
export default {
  components: {
    FormularioNuevoCliente,
  },
  methods: {
    addNewCliente({
      nombre,
      apellido,
      empresa,
      email,
      telefono
    }) {
      const payload = {
        nombre,
        apellido,
        empresa,
        email,
        telefono
      };

      this.$store.dispatch('postClientes', payload);
      this.$router.push({
        path: '/clientes'
      });
    }
  }
}
</script>