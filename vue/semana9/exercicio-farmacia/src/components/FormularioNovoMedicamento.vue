<template>
 <h2>Formulário de cadastro de medicamentos</h2>

    <div id="form">

        <div id="nomeMedicamento">
            <label for="medicamento">Nome</label>
            <input type="text" placeholder="Informe aqui o nome do medicamento" id="medicamento" v-model="nome">
        </div>
        <div id="nomeLaboratorio">
            <label for="laboratorio">Laboratório</label>
            <input type="text" id="laboratorio" placeholder="Informe o laboratório" v-model="laboratorio">
        </div>
        <div id="precoMedicamento">
            <label for="preco">Preço</label>
            <input type="number" id="preco" placeholder="Informe o preço" v-model="preco">
        </div>
        <button @click="$emit('cadastrar',nome, laboratorio, preco)" id="botao" type="submit">Cadastrar novo</button>
    </div>
</template>
  
<script>
export default{
    data() {
    return {
      nome: "",
      laboratorio: "",
      preco: 0,
    }  
}

}
</script>
  
<style scoped>
h2{
    margin: 40px 70px;
}
#form{
    display: flex;
    flex-direction: row;;
    gap: 15px;
    margin: 40px 70px;
}
#nomeMedicamento, #nomeLaboratorio, #precoMedicamento{
    display: flex;
    flex-direction: column;
    width: 334px;
    height: 40px;
}
button{
margin-top: 5px;
width: 224px;
height: 28px;
background-color: #525252;
color: white;
border: none;
border-radius: 5px;
}
</style>