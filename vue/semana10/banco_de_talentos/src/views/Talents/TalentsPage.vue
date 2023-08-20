<template>
    <h1>Cadastro de talento</h1>
    <form @submit.prevent="handleCreateAccount">
        <div id="elementOne">
            <div>
                <label for="name">Nome completo</label>
                <input type="text" id="name" class="inputBox" v-model="name">
                <span class="message-erro">{{ this.errors.name }}</span>
            </div>
            <div>
                <label for="email">E-mail</label>
                <input type="email" id="email" class="inputBox" v-model="email">
                <span class="message-erro">{{ this.errors.email }}</span>
            </div>
        </div>

        <div id="elementTwo">
            <div>
                <label for="date">Data de nascimento</label>
                <input type="date" id="date" class="inputBox" v-model="data">
                <span class="message-erro">{{ this.errors.data }}</span>
            </div>
            <div>
                <label for="whatsapp">Whatsapp</label>
                <input type="number" id="whatsapp" class="inputBox" v-model="whatsapp">
                <span class="message-erro">{{ this.errors.whatsapp }}</span>
            </div>
        </div>

        <div id="elementThree">
            <label for="interest">Área de interesse</label>
            <select id="interest" v-model="interest">
                <option selected disabled></option>
                <option value="1">Front-end</option>
                <option value="2">Back-end</option>
                <option value="3">Full stack</option>
            </select>
            <span class="message-erro">{{ this.errors.interest }}</span>
        </div>
        <div id="elementFour">
            <label for="level">Nível profissional</label>
            <select id="level" v-model="level">
                <option selected disabled></option>
                <option value="1">Junior</option>
                <option value="2">Pleno</option>
                <option value="3">Senior</option>
            </select>
            <span class="message-erro">{{ this.errors.level }}</span>
        </div>
        <div>
            <p>Suas habilidades</p>
            <div id="checkbox">
                <div v-if="interest === '1' || interest === '3'">
                    <label for="html">HTML</label>
                    <input type="checkbox" id="html" v-model="ability">
                    <label for="CSS">CSS</label>
                    <input type="checkbox" id="css" v-model="ability">
                    <label for="js">Javascript</label>
                    <input type="checkbox" id="js" v-model="ability">
                    <label for="react">Vue</label>
                    <input type="checkbox" id="vue" v-model="ability">
                </div>
                <div v-if="interest === '2' || interest === '3'">
                    <label for="node">Node</label>
                    <input type="checkbox" id="node" v-model="ability">
                    <label for="php">PHP</label>
                    <input type="checkbox" id="php" v-model="ability">
                    <label for="java">Java</label>
                    <input type="checkbox" id="java" v-model="ability">
                    <label for="laravel">Laravel</label>
                    <input type="checkbox" id="laravel" v-model="ability">
                </div>
            </div>
            <span class="message-erro">{{ this.errors.ability }}</span>
        </div>
        <textarea placeholder="Digite aqui sua carta de apresentação" v-model="apresentation"></textarea>
        <span class="message-erro">{{ this.errors.apresentation }}</span>

        <button type="submit">Cadastrar</button>
    </form>
</template>
<script>

import * as yup from 'yup'
import { captureErrorYup } from '../../utils/captureErrorYup'
import axios from "axios"

export default {
    data() {
        return {
            talento: {
                name: '',
                email: '',
                whatsapp: '',
                data: null,
                interest: '',
                level: '',
                ability: '',
                apresentation: ''
            },
            errors: {}
        }
    },
    methods: {
        handleCreateAccount() {
            try {
                // 1 -  Validar dados
                const schema = yup.object().shape({
                    name: yup.string().required("Nome é obrigatório"),
                    email: yup.string().email("E-mail não é válido").required("E-mail é obrigatório"),
                    whatsapp: yup.string().required("Whatsapp é obrigatório"),
                    data: yup.date().required("Data de nascimento é obrigatório"),
                    interest: yup.string().required("Área de interesse é obrigatório"),
                    ability: yup.string().required("Habilidade é obrigatório"),
                    level: yup.string().required("Nível é obrigatório"),
                    apresentation: yup.string().required("Carta de apresentação é obrigatório"),

                })
                schema.validateSync(
                    {
                        name: this.name,
                        email: this.email,
                        whatsapp: this.whatsapp,
                        data: this.data,
                        interest: this.interest,
                        ability: this.ability,
                        level: this.level,
                        apresentation: this.apresentation
                    },
                    // Faz com que seja processado todos os campos de uma vez
                    { abortEarly: false }
                )

                axios.post(`http://localhost:50001/talentos`, {

                    name: this.name,
                    email: this.email,
                    whatsapp: this.whatsapp,
                    data: this.data,
                    interest: this.interest,
                    ability: this.ability,
                    level: this.level,
                    apresentation: this.apresentation

                })

                    .then(() => {
                        alert('Talento CADASTRADO com sucesso!')
                    })
                    .catch(erro => console.log(erro))
            }
            catch (error) {
                console.log(error)
                if (error instanceof yup.ValidationError) {
                    this.errors = captureErrorYup(error)
                }

            }
        },
    }
}
</script>



<style scoped>
h1 {
    margin-left: 355px;
    margin-top: 50px;
    margin-block: 50px;
    color: rgb(58, 58, 58);
}

.inputBox {
    height: 30px;
    width: 285px;
    border: 2px solid rgb(197, 194, 194);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
}

form {
    width: 50%;
    margin-left: 355px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

#elementOne,
#elementTwo {
    display: flex;
    gap: 60px;
}

#elementThree,
#elementFour {
    display: flex;
    flex-direction: column;
}

select,
textarea {
    height: 35px;
    border: 2px solid rgb(197, 194, 194);
    border-radius: 2px;
}

#checkbox {
    align-items: center;
    display: flex;
    flex-direction: row;
}

button {
    width: 100px;
    height: 30px;
}

.message-erro {
    color: red;
    margin: 4px;
}
</style>