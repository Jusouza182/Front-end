<template>
  <h1>Produtos</h1>

  <div class="d-flex flex-wrap" id="card">
    <v-card width="30%" v-for="item in products" :key="item.id">
      <v-img :src="item.imagem"
        class="align-end" width="300" cover><v-card-title  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">{{ item.nome}}</v-card-title></v-img>
      <v-card-subtitle class="pt-3">
        10x de {{ new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.parcela) }}
      </v-card-subtitle>
      <v-card-actions>
        <v-btn color="blue" variant="tonal" @click="() => this.$store.dispatch(`adicionarProduto`, {products})">
          Comprar
        </v-btn>
      </v-card-actions>
    </v-card>


  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.loadProducts()
  },
  methods: {
    loadProducts() {
      axios.get(`http://localhost:3000/produtos`)
        .then((response) => {
          this.products = response.data
        })
        .catch(() => {
          alert("Erro ao carregar produtos")
        })
    }
    
  }
}
</script>
<style scoped>
#card{
  justify-content: space-between;
  gap:50px
}
</style>
