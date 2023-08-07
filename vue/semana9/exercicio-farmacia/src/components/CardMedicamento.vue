<template>
    <div id="corpo">
    <button class = "botao" type="submit" @click="$emit('favoritar', id)">&#128154</button>
        <img src="https://static.vecteezy.com/system/resources/previews/010/834/894/original/3d-rendering-floating-medicine-box-isolated-png.png"
            alt="img">
            
        <span v-if="favorito">Favorito</span>
        <h2>{{ nome }}</h2>
        <p>Laboratório: {{ laboratorio }}</p>
        <h3>Valor do produto: {{ preco }}</h3>
    </div>
</template>

<script>
export default {
    props: ['id', 'nome', 'laboratorio', 'preco', 'favorito']
}
</script>

<style scoped>
.botao{
  margin-left: 150px;
}
#corpo {
    background-color: #EAEAEA;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin: 5px;
    width: 230px
}

img {
    width: 200px;
    height: 150px;
}

button {
    background-color: #EAEAEA;
    border: none;
}</style>