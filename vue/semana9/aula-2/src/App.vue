<template>
  <div>
    <h1>Calculadora IMC</h1>
    {{ peso }}
    <input type="number" placeholder="Peso" v-model="peso" />
    {{ altura }}
    <input type="number" placeholder="Altura" v-model="altura" />
    <button @click="calcular()">Calcular</button>    <!-- AQUI VAI O RESULTADO -->
    <span>{{ resultado }}</span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      peso: "",
      altura: "",
      resultado: ""
    }
  },
  methods: {
    calcular(){
      if(this.peso == 0 || this.altura == 0){
        alert("Os dados precisam ser maiores que 0")
        return
      }

      this.resultado = (this.peso / (this.altura ** 2)).toFixed(2)
    },
}

}
</script>