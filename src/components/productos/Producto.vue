<template>
  <div>
    <li
      v-for="producto in infoProducto"
      :key="producto._id"
      class="producto"
    >
      <div class="info-producto">
          <p class="nombre">{{producto.nombre}}</p>
          <p class="precio">{{producto.precio}}</p>
      </div>
      <div class="acciones">
          <router-link
              :to="{ name: 'EditarProducto', params: { id: producto._id }}"
              class="btn btn-azul">
              <i class="fas fa-pen-alt"></i>
              Editar Producto
          </router-link>

          <button
            @click="$emit('deleteProduct', producto._id)"
            type="button"
            class="btn btn-rojo btn-eliminar">
            <i class="fas fa-times"></i>
              Eliminar Cliente
          </button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    infoProducto: {
      type: Array,
      required: true,
    }
  }
}
</script>