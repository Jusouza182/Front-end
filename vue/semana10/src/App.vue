<template>
    <v-layout>
        <v-app-bar color="pink" :elevation="9" rounded v-if="renderizarMenu">
            <v-app-bar-title>Instagran</v-app-bar-title>
            <v-btn icon>
                <router-link to="/novopost" ><v-icon icon="mdi-post" color="#FFF"></v-icon></router-link>
            </v-btn>
            <v-btn>
        <router-link to="/listapost">
          <v-icon color="#FFF">mdi-list-box</v-icon>
        </router-link>
      </v-btn>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>

    </v-layout>
</template>
<script>
export default {
  computed: {
    renderizarMenu() {
      return this.$route.path !== '/' && this.$route.path !== '/cadastro'
    }
  }
}
</script>


