<template>
    <form class="form-login" @submit.prevent="handleCreateAccount">
        <h2>Fazer cadastro</h2>
        <div class="form-element">
            <label for="name">Nome completo</label>
            <input class="form-input" id="name" v-model="name">
        </div>

        <div class="form-element">
            <label for="email">E-mail</label>
            <input class="form-input" id="email" v-model="email">
        </div>
        <div class="form-element">
            <label for="fone">Telefone</label>
            <input class="form-input" id="fone" v-model="fone">
        </div>
        <div class="form-element">
            <label for="password">Senha</label>
            <input class="form-input" type="password" id="password" v-model="password">
        </div>
        <div class="form-element">
            <label for="confirmPassword">Confirmar senha</label>
            <input class="form-input" type="password" id="confirmPassword" v-model="confirmPassword">
        </div>
        <div class="form-element">
            <label for="sponsor">Patrocinador</label>
            <select id="sponsor" v-model="sponsor" class="form-select">
                <option value="">Sem patrocinador</option>
                <option value="Coca Cola">Coca Cola</option>
                <option value="Lab 365">Lab 365</option>
                <option value="Zucchetti">Zucchetti</option>
            </select>
        </div>
        <div class="form-element">
            <label for="bio">Biografia</label>
            <textarea v-model="bio" id="bio" class="form-textarea">
        </textarea>
        </div>
        <div>
        <p>Selecione um tipo de plano</p>
            <input type="radio" value="1" v-model="planType"> <label>Bronze</label>
            <input type="radio" value="2" v-model="planType"> <label>Prata</label>
            <input type="radio" value="3" v-model="planType"> <label>Premium</label>
        </div>
        <div>
            <label for="confirmTerm">
                <input type="checkbox" id="confirmTerm" v-model="confirmTerm"> Aceita termos de uso
            </label>
        </div>
        <button type="submit">Criar conta</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            fone: '',
            password: '',
            confirmPassword: '',
            sponsor: '',
            bio: '',
            confirmTerm: true,
            planType: '2'
        }
    },
    methods: {
    handleCreateAccount() {

    }}
}


</script>
<style scoped>
.form-login {
    margin: 40px auto;
    width: 40%;

    border-radius: 4px;
    border: 1px solid #383737;

    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    padding: 10px;

}

.form-element {
    display: flex;
    flex-direction: column;
    width: 80%;
}

.form-input,
.form-select,
.form-textarea {
    height: 34px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #756767;
    outline: none;

}
.form-select{
    width: 102%;
}
.form-textarea{
    height: 50px;
}

button {
    width: 80%;
    height: 54px;
    background-color: #3578E5;

    color: white;
    font-size: 18px;
    border-radius: 8px;
    border: none;
}

button:hover {
    background-color: #286ee0;
}
.input-error {
    border-color: red;
}
</style>