<template>
  <div>
    <h2>Pedidos</h2>
    <ul class="listado-pedidos">
        <li
          v-for="pedido in getPedidos" :key="pedido._id"
          class="pedido">
            <div class="info-pedido">
                <p class="id">{{ pedido._id}}</p>
                <p class="nombre">{{ pedido.cliente.nombre}}</p>

                <div class="articulos-pedido">
                    <p class="productos">Artículos Pedido: </p>
                    <ul>
                        <li v-for="ped in pedido.pedido" :key="ped._id">
                            <p>{{ ped.producto.nombre }}</p>
                            <p>Precio: $ {{ ped.producto.precio }}</p>
                            <p>Cantidad: {{ ped.cantidad }}</p>
                        </li>
                    </ul>
                </div>
                <p class="total">Total: $ {{ pedido.total }} </p>
            </div>
            <div class="acciones">
                <button
                    @click="eliminarPedido(pedido._id)"
                    type="button" class="btn btn-rojo btn-eliminar">
                    <i class="fas fa-times"></i>
                    Eliminar Pedido
                </button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('pedidosModule/getPedidos');
  },
  computed: {
    getPedidos() {
      return this.$store.state.pedidosModule.pedidos;
    },
  },
  methods: {
    eliminarPedido(id) {
      this.$store.dispatch('pedidosModule/deletePedidos', id);
    }
  }
}
</script>