
<template>
  <MenuPage/>

  <RouterView />

  <RodapePage />
  
</template>

<script>
import MenuPage from "./components/Menu/MenuPages.vue"
import RodapePage from "./components/Rodape/RodapePages.vue"

export default{
  components:{
    MenuPage,
    RodapePage
  }
}
</script>
