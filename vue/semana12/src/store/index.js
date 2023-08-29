import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            produtosCarrinho: [],
        }
    },
    mutations: {
        adicionarProdutoAoCarrinho(state, produtoRecebido) {

            const produtoNoCarrinho = state.produtosCarrinho.find(item => item.id === produtoRecebido.id)

            if (produtoNoCarrinho) {

                state.produtosCarrinho = state.produtosCarrinho.map(item => {
                    if (item.id === produtoRecebido.id) {
                        item.quantidade = item.quantidade + 1
                    }
                    return item
                })

            } else {
                state.produtosCarrinho = [
                    ...state.produtosCarrinho,
                    {
                        ...produtoRecebido,
                        quantidade: 1
                    }
                ]
            }



        }
    },
    actions: {
        alterarNome(context, value) {
            console.log(value.nome)
            console.log("entrei no alterar nome")
            context.commit("alterarTeste", value.nome)
        },
        adicionarProduto(context, value) {
            context.commit("adicionarProdutoAoCarrinho", value.product)
        }
    }
})

export default store