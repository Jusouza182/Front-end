<template>
  <h1> Endereço:</h1>
  <div class="endereco">
    <p>Logradouro: {{ cep.logradouro }}</p>
    <p>Bairro: {{ cep.bairro }}</p>
    <p>Cidade: {{ cep.localidade }}</p>
    <p>UF: {{ cep.uf }}</p>
    <p>CEP: {{ cep.cep }}</p>
  </div>
</template>

/**
 * PASSOS PARA UTILIZAR O AXIOS
 * 
 * 1 - [x] instalar o axios
 *    `npm install axios`
 * 2 - [x] importar o axios no local que será utilizado
 *    `import axios from "axios"`
 * 3 - [] utilizar o axios usando o método (GET, POST, PUT...) desejado
 */

<script>
import axios from "axios"


export default {
  data() {
    return {
      cep: {}

    }
  },
  mounted() {
    axios.get(`https://viacep.com.br/ws/01001000/json/`)
      .then(res => this.cep = res.data)
      .catch(erro => console.log(erro))
  }
}
</script>

<style>
h1{
  margin-left: 300px;
}
p {
  padding: 5px;
  background-color: grey;
}
.endereco{
  border: 1px solid rgb(0, 0, 0);
  width: 40%;
  background-color: grey;
}
</style>