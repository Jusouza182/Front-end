<template>
    <v-app-bar color="grey">
    <v-app-bar-title>Funko Lab</v-app-bar-title>

    <v-btn icon>
      <router-link to="/" class="router">
        <v-icon color="#FFF">mdi-storefront-outline</v-icon>
      </router-link>
    </v-btn>

    <v-btn icon>
      <router-link to="/carrinho" class="router">
        {{ this.$store.state.produtosCarrinho.length }}
        <v-icon color="#FFF">mdi-cart</v-icon>
      </router-link>
   </v-btn>

</v-app-bar>
</template>

<style scoped>
.router {
  text-decoration: none;
  color: #FFF;
}
</style>