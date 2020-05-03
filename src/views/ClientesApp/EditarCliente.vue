<template>
  <div>
    <h2>Editar Cliente</h2>
    <FormularioNuevoCliente
      :getCliente="getCliente"
      @getInfoForm="editCandidate"
    />
  </div>
</template>

<script>
import FormularioNuevoCliente from '../../components/formularios/FormularioNuevoCliente';
export default {
  components: {
    FormularioNuevoCliente,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.$store.dispatch('clientesModule/getCliente', this.id);
  },
  computed: {
    getCliente() {
      return this.$store.state.clientesModule.currentCliente;
    }
  },
  methods: {
    editCandidate({
      nombre,
      apellido,
      empresa,
      email,
      telefono
    }) {
      const { id } = this
      this.$store.dispatch('clientesModule/putClientes', {
        nombre,
        apellido,
        empresa,
        email,
        telefono,
        id,
      });
      this.$router.push({
        path: '/clientes'
      });
    }
  }
}
</script>