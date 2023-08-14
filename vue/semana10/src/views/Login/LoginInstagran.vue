<template>
    <form class="form-login" @submit.prevent="handleLogin">
        <img src="https://img.freepik.com/vetores-premium/logotipo-de-midia-social-gradiente-roxo_197792-1883.jpg"
            alt="logo">
        <div class="error-box">
            <ul>
                <li v-if="errorInputEmail">{{ errorInputEmail }}</li>
                <li v-if="errorInputPassword">{{ errorInputPassword }}</li>
            </ul>
        </div>

        <input placeholder="Digite o e-mail" v-model="email" />
        <input type="password" placeholder="Digite a senha" v-model="password" />
        <button type="submit">Entrar</button>
        <p><router-link to="/cadastro">Cadastra-se</router-link></p>
    </form>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            errorInputEmail: "",
            errorInputPassword: ""
        }
    },
    methods: {
        handleLogin() {

            this.errorInputEmail = "";
            this.errorInputPassword = "";

            if (this.email === "") this.errorInputEmail = "E-mail é obrigatório";

            if (this.password === "") this.errorInputPassword = "Senha é obrigatório";

            if (this.errorInputEmail === "" && this.errorInputPassword === "") this.$router.push('/home');

        }
    }
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

input {
    height: 54px;
    width: 80%;
    border-radius: 8px;
    border: 1px solid #756767;
    outline: none;
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

img {
    width: 30%;
}

.error-box {
    background: rgb(233, 157, 144);
    width: 80%;
    color: #fff;
    margin: 0;
    padding: 0;
}

.input-error {
    border-color: red;
}
</style>