<template>
  <div>
    <h2>Clientes</h2>
    <router-link
      to="/NuevoCliente"
      class="btn btn-verde nvo-cliente">
      <i class="fas fa-plus-circle"></i>
      Nuevo Cliente
    </router-link>

    <ul class="listado-clientes">
      <Cliente
        @deleteRequest="deleteCliente"
        :infoCliente="getClientes"
      />
    </ul>
  </div>
</template>

<script>
import Cliente from '../components/clientes/Cliente';
export default {
  components: {
    Cliente,
  },
  mounted() {
    this.$store.dispatch('getClientes');
  },
  computed: {
    getClientes() {
      return this.$store.state.clientes;
    },
  },
  methods: {
    deleteCliente(id) {
      this.$store.dispatch('deleteCliente', id);
    }
  }
}
</script>