import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClientesApp/Clientes.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosApp/Productos.vue')
  },
  {
    path: '/nuevoProducto',
    name: 'NuevoProducto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosApp/NuevoProducto.vue')
  },
  {
    path: '/editarProducto/:id',
    name: 'EditarProducto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosApp/EditarProducto.vue')
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import(/* webpackChunkName: "about" */ '../views/PedidosApp/Pedidos.vue')
  },
  {
    path: '/nuevoPedido/:id',
    name: 'NuevoPedido',
    component: () => import(/* webpackChunkName: "about" */ '../views/PedidosApp/NuevoPedido.vue')
  },
  {
    path: '/NuevoCliente',
    name: 'NuevoCliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClientesApp/NuevoCliente.vue')
  },
  {
    path: '/EditarCliente/:id',
    name: 'EditarCliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClientesApp/EditarCliente.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
