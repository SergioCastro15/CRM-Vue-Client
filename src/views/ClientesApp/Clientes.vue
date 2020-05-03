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
      <Spinner v-if="getClientes.length < 1" />
      <Cliente
        v-else
        @deleteRequest="deleteCliente"
        :infoCliente="getClientes"
      />
    </ul>
  </div>
</template>

<script>
import Spinner from '../../components/layout/Spinner';
import Cliente from '../../components/clientes/Cliente';

export default {
  components: {
    Cliente,
    Spinner
  },
  mounted() {
    this.$store.dispatch('clientesModule/getClientes');
  },
  computed: {
    getClientes() {
      return this.$store.state.clientesModule.clientes;
    },
  },
  methods: {
    deleteCliente(id) {
      this.$store.dispatch('clientesModule/deleteCliente', id);
    }
  }
}
</script>