<template>
  <v-layout>
    <v-main>
      <Menus></Menus>
      <router-view></router-view>
      <Rodape></Rodape>
    </v-main>
  </v-layout>
</template>
<script>
import Rodape from "./components/Rodape/RodapeView.vue"
import Menus from "./components/Menu/MenuView.vue"
export default {
  components: {
    Rodape,
    Menus
  }
}
</script>

