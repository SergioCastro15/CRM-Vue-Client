<template>
  <div id="app">
    <Header />
      <div class="grid contenedor contenido-principal">
        <Navegacion />
            <main class="caja-contenido col-9">
              <router-view/>
            </main>
      </div>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Navegacion from './components/layout/Navegacion';

export default {
  components: {
    Header,
    Navegacion
  }
}
</script>
