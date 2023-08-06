<template>
<div>
    <h1>Calculadora impar ou par</h1>
    <input type="number" placeholder="Numero" v-model="numero" />
    <button @click="calcular()">Resultado</button>  
    <span>{{ resultado }}</span>
    </div>
</template>

<script>
export default {
  data(){
    return {
      numero: "",
      resultado: ""
    }
  },
  methods: {
    calcular(){
      this.resultado = this.numero % 2 === 0 ? "par" : "impar"
    },
  }
  }
</script>
