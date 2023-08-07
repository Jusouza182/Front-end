<template>
  <div>
    <h1>Lista de cursos</h1>

    <Card 
    v-for="(curso, index) in listaCursos"
    :key="index"
    :titulo="curso.titulo" :duracao="curso.duracao" :vagas="curso.vagas"/>

  </div>
</template>

<script>
import Card from "./components/Card.vue"

export default {
  data() {
    return {
      listaCursos: [
        {
          titulo: "HTML e CSS",
          duracao: 20,
          vagas: 40
        },
        {
          titulo: "Javascript",
          duracao: 20,
          vagas: 40
        },
        {
          titulo: "PHP",
          duracao: 20,
          vagas: 40
        },
      ]
    }
  }, 
  components: {
    Card
  }
}
</script>

