<script>
import AvatarComponent from '@/components/AvatarComponent.vue';

export default {
  name: 'HomeView',
  components: {
    AvatarComponent,
  }
}
</script>

<template>
  <header class="barra-superior">
    <avatar-component class="avatar" nome="Eduardo Pereira da Costa" cargo="Front-end Developer"
      foto="/images/foto-perfil.png" />
  </header>
  <aside>
  </aside>
  <main>

  </main>
</template>

<style lang="stylus" scoped>
.barra-superior
  display: flex
  justify-content: flex-end
  padding: 5px 30px 5px 5px
  box-shadow: 0px 1px 6px rgba(40, 56, 72, 0.1)
  
</style>