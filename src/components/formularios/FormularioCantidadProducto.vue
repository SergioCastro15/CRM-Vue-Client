<template>
  <div>
    <li v-for="(producto, index) in productos" :key="index">
      <div class="texto-producto">
          <p class="nombre">{{ producto[0].nombre }}</p>
          <p class="precio">{{ producto[0].precio }}</p>
      </div>
      <div class="acciones">
          <div class="contenedor-cantidad">
              <i @click="restarProducto(index)" class="fas fa-minus"></i>
              <p>{{ producto.cantidad }}</p>
              <i @click="aumentarProducto(index)" class="fas fa-plus"></i>
          </div>
          <button
              @click="eliminarProducto(producto)"
              type="button" class="btn btn-rojo">
              <i class="fas fa-minus-circle"></i>
                  Eliminar Producto
          </button>
      </div>
    </li>

    <form
      v-show="total > 0"
      @click.prevent="realizarPedido"
    >
      <input type="submit" class="btn btn-verde btn-block" value="Realizar pedido">
    </form>
  </div>
</template>

<script>
export default {
  props: {
    productos: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    aumentarProducto(index) {
      const todosProductos = [...this.productos];
      todosProductos[index].cantidad += 1;
      this.ejecutarMutaciones(todosProductos);
    },
    restarProducto(index) {
      const todosProductos = [...this.productos];
      if(todosProductos[index].cantidad === 0) return;
      todosProductos[index].cantidad -= 1;
      this.ejecutarMutaciones(todosProductos);
    },
    ejecutarMutaciones(todosProductos) {
      this.$store.commit('productosModule/UPDATE_PRODUCTOS', todosProductos);
      this.$store.commit('productosModule/UPDATE_TOTAL');
    },
    eliminarProducto(producto) {
      this.$store.commit('productosModule/DELETE_PRODUCTOS_BY_NAME', producto);
      this.$store.commit('productosModule/UPDATE_TOTAL');
    },
    realizarPedido() {
      const { id: cliente } = this.$route.params;
      const pedido = this.$store.state.productosModule.productosNombre;
      const { total } = this;

      this.$store.dispatch('pedidosModule/postPedidos', {
        cliente,
        pedido,
        total
      });
      this.$store.commit('productosModule/RESET_PRODUCTOS_BY_NAME');

      this.$router.push({
        path: '/pedidos'
      });
    }
  }
}
</script>