<template>
    <h1>Carrinho</h1>

    <v-table>
        <thead>
            <tr>
                <th class="text-left">Imagem</th>
                <th class="text-left">Nome</th>
                <th class="text-left">Quantidade</th>
                <th class="text-left">Preço</th>
                <th class="text-left">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in this.$store.state.produtosCarrinho" :key="item.id">
                <td><img :src="item.imagem" width="70" alt="foto funko"></td>
                <td>{{ item.nome }}</td>
                <td>{{ item.quantidade }}</td>
                <td>{{ item.preco }}</td>
                <td>
                    {{
                        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                            item.quantidade * item.preco
                        )
                    }}
                </td>
            </tr>
        </tbody>
    </v-table>
    <div class="button">
        <v-btn color="blue" class="d-flex justify-end"> Finalizar compra</v-btn>
    </div>
</template>


<style scoped>
.button{
    display: flex;
    justify-content: end;
    margin:30px;
}
</style>