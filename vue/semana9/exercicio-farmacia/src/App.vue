<template>
    <Header />
    <FormularioNovoMedicamento @cadastrar="AdicionarMedicamento" />
    <div id="container">
      <CardMedicamento 
        v-if="!!listaMedicamentos" 
        v-for="(item, index) in listaMedicamentos" 
        :key="index"
        :nome="item.nome" 
        :laboratorio="item.laboratorio" 
        :preco="item.preco"
        @favoritar="FavoritarMedicamento" />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento.vue'
import CardMedicamento from './components/CardMedicamento.vue'

export default {
  data() {
    return {
      listaMedicamentos: []
    }
  },
  methods: {
    AdicionarMedicamento(nome, laboratorio, preco) {
      if (nome === "" || laboratorio === "" || preco === "") {
        alert("Preencha todos os campos do formulário")
        return
      }
      let novoMedicamento = {
        id: this.listaMedicamentos.length + 1,
        nome: nome,
        laboratorio: laboratorio,
        preco: preco,
        favorito: false
      }
      this.listaMedicamentos.push(novoMedicamento)
    },
    FavoritarMedicamento(id) {
      this.listaMedicamentos = this.listaMedicamentos.map(item => {
        if (item.id == id) {
          item.favorito = !item.favorito

          return item
        }
      })
    }
  },
  components: {
    Header,
    FormularioNovoMedicamento,
    CardMedicamento,

  }
}
</script>

<style>
#container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 100px;
}
</style>
