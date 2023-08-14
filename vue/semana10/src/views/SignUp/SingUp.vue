<template>
    <form class="form-login" @submit.prevent="handleCreateAccount">
        <h2>Fazer cadastro</h2>
        <div class="form-element">
            <label for="name">Nome completo</label>
            <input class="form-input" id="name" v-model="name">

            <span class="message-erro">{{ this.errors.name }}</span>
        </div>
        <div class="form-element">
            <label for="email">E-mail</label>
            <input class="form-input" id="email" v-model="email">

            <span class="message-erro">{{ this.errors.email }}</span>
        </div>
        <div class="form-element">
            <label for="phone">Telefone</label>
            <input class="form-input" id="phone" v-model="phone">

            <span class="message-erro">{{ this.errors.phone }}</span>
        </div>
        <div class="form-element">
            <label for="password">Senha</label>
            <input class="form-input" type="password" id="password" v-model="password">

            <span class="message-erro">{{ this.errors.password }}</span>
        </div>
        <div class="form-element">
            <label for="confirmPassword">Confirmar senha</label>
            <input class="form-input" type="password" id="confirmPassword" v-model="confirmPassword">

            <span class="message-erro">{{ this.errors.confirmPassword }}</span>
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
            <span class="message-erro">{{ this.errors.confirmTerm }}</span>

        </div>
        <button type="submit">Criar conta</button>
    </form>
</template>
<script>

import * as yup from 'yup'
import { captureErrorYup } from '../../utils/captureErrorYup'

export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            sponsor: '',
            bio: '',
            confirmTerm: true,
            planType: '2',

            errors: {}
        }
    },
    methods: {
        handleCreateAccount() {
            try {
                // 1 -  Validar dados
                const schema = yup.object().shape({
                    name: yup.string().required("Nome é obrigatório"),
                    email: yup.string().email("E-mail não é válido").required("Email é obrigatório"),
                    phone: yup.string().required("Telefone é obrigatório"),
                    password: yup.string().min(8, 'A senha deve ser maior').max(20, 'Deve ter entre 8-20 letras').required('A senha é obrigatória'),
                    confirmPassword: yup.string().required('A confirmação é necessária').oneOf([yup.ref('password')], 'As senhas devem coincidir'),
                    confirmTerm: yup.boolean().isTrue('O termo de uso deve ser aceito')
                })

                schema.validateSync(
                    {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        password: this.password,
                        verifyPassword: this.confirmPassword,
                        confirmTerm: this.confirmTerm
                    },
                    // Faz com que seja processado todos os campos de uma vez
                    { abortEarly: false }
                )



            } catch (error) {
                console.log(error)
                if (error instanceof yup.ValidationError) {
                    this.errors = captureErrorYup(error)
                }

            }
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

.form-select {
    width: 102%;
}

.form-textarea {
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

.message-erro {
    color: red;
    margin: 4px;
}

.input-error {
    border-color: red;
}
</style>