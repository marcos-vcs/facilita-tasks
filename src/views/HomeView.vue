<script>
import CabecalhoComponent from '@/components/menus/CabecalhoComponent.vue';
import MenuLateralComponent from '@/components/menus/MenuLateralComponent.vue';
import SubMenuLateralComponent from '@/components/menus/FiltroLateralComponent.vue'
import TarefasView from './TarefasView.vue';

export default {
  name: 'HomeView',
  components: {
    CabecalhoComponent,
    MenuLateralComponent,
    SubMenuLateralComponent,
    TarefasView,
  },
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
          <tarefas-view />
        </div>
      </div>
    </div>
  </div>
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
.submenu, .conteudo
  height calc(100vh - 69px)
.topo
  display flex
  align-items center
  justify-content flex-end
.conteudo
  overflow-y auto
  flex 1
  background-color var(--cor-fundo-home)
</style>