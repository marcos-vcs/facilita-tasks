<script>
import BotaoFlutuanteComponent from '@/components/BotaoFlutuanteComponent.vue';
import CabecalhoComponent from '@/components/CabecalhoComponent.vue';
import MenuLateralComponent from '@/components/MenuLateralComponent.vue';
import SubMenuLateralComponent from '@/components/SubMenuLateralComponent.vue'
import TarefaView from './TarefaView.vue';

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
    SubMenuLateralComponent,
    BotaoFlutuanteComponent,
    TarefaView,
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
    <menu-lateral-component />
    <div class="conteudo-principal">
      <cabecalho-component class="topo" />
      <div class="principal">
        <sub-menu-lateral-component class="submenu" />
        <div class="conteudo">
          <tarefa-view />
        </div>
      </div>
    </div>
  </div>

  <botao-flutuante-component />
</template>

<style lang="stylus" scoped>
.container
  display flex
.principal
  display flex
  flex-direction row
.conteudo-principal
  display flex
  flex-direction column
  flex 1
.submenu
  height calc(100vh - 69px)
.topo
  display flex
  align-items center
  justify-content flex-end
.conteudo
  flex 1
  background-color var(--cor-fundo-home)
</style>