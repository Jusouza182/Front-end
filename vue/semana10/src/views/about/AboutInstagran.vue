<template>
    <v-form ref="form" @submit.prevent="handleSubmit">
        <v-text-field label="Nome" variant="outlined" :rules="[v => !!v || 'Nome é obrigatório!']"
            v-model="nome"></v-text-field>

        <v-text-field label="Email" variant="outlined" :rules="[v => !!v || 'Email é obrigatório!']"
            v-model="email"></v-text-field>

        <v-btn variant="tonal" color="green" type="submit">Cadastrar</v-btn>
        <v-btn variant="tonal" color="orange" type="reset">Limpar</v-btn>

    </v-form>
    <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template v-slot:actions>
            <v-btn color="red" variant="text" @click="snackbar = false">
                Fechar
            </v-btn>
        </template>
    </v-snackbar>
</template>
<script>
export default {
    data() {
        return {
            snackbar: false,
            timeout: 2000,
            text: "",
            nome: "",
            email: "",
        }
    },
    methods: {
        async handleSubmit() {
            const { valid } = await this.$refs.form.validate()

            if (valid) {
                this.text = 'Usuário cadastrado com sucesso!'
                this.snackbar = true
                this.$refs.form.reset()
            }
        }
    }
}
</script>