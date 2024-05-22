<script>
import CabecalhoComponent from '@/components/CabecalhoComponent.vue';
import MenuLateralComponent from '@/components/MenuLateralComponent.vue';

export default {
  name: 'HomeView',
  computed: {
    teste() {
      return this.$store.state.teste;
    }
  },
  components: {
    CabecalhoComponent,
    MenuLateralComponent,
  },
  methods: {
    incrementTeste() {
      this.$store.commit('teste');
    }
  }
}
</script>

<template>
  <div class="container">
    <menu-lateral-component class="menu-lateral" />
    <div class="conteudo-principal">
      <cabecalho-component class="topo" />
      <div class="conteudo">
        <!-- Adicione aqui o conteúdo principal da página -->
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container
  display flex
  height 100vh

.conteudo-principal
  display flex
  flex-direction column
  flex 1

.topo
  display flex
  align-items center
  justify-content flex-end

.conteudo
  flex 1
  background-color var(--cor-fundo-home)
</style>