<template>
    <h1>Conteúdo principal</h1>

    <p>Este é o conteúdo principal da página.</p>

    <p id="bem_vindo_usuario"></p>
    <p>Nome: <span id="nome"></span> </p>
    <p>Username: <span id="username"></span> </p>
    <p>Qtd de seguidores: <span id="qtd_seguidores"></span> </p>
    <p>Qtd de publicações: <span id="qtd_publicacoes"></span> </p>

    <v-card v-for="(nome, index) in nomes" :key="index">
        <v-card-text>
            <img :width="200" src="https://http.cat/images/202.jpg" alt="usuario">
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            nomes: [
                'https://http.cat/images/202.jpg',
                'https://http.cat/images/301.jpg',
                'https://http.cat/images/404.jpg',
                'https://http.cat/images/408.jpg',
                'https://http.cat/images/417.jpg',
                'https://http.cat/images/498.jpg',
                'https://http.cat/images/500.jpg'
            ]
        }
    },
}
</script>


