<template>
  <div>
    <li
      v-for="cliente in infoCliente"
      :key="cliente._id"
      class="cliente"
    >
      <div class="info-cliente">
          <p class="nombre">{{cliente.nombre}}</p>
          <p class="empresa">{{cliente.empresa}}</p>
          <p>{{cliente.email}}</p>
          <p>{{cliente.telefono}}</p>
      </div>
      <div class="acciones">
          <router-link
              :to="{ name: 'EditarCliente', params: { id: cliente._id}}"
              class="btn btn-azul">
              <i class="fas fa-pen-alt"></i>
              Editar Cliente
          </router-link>

            <router-link
              :to="{ name: 'NuevoPedido', params: { id: cliente._id}}"
              class="btn btn-amarillo">
              <i class="fas fa-plus"></i>
              Nuevo pedido
          </router-link>

          <button
              @click="$emit('deleteRequest', cliente._id)"
              type="button" class="btn btn-rojo btn-eliminar">
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
    infoCliente: {
      type: Array,
      default: () => {
        return {};
      },
    }
  }
}
</script>