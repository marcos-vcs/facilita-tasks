<script>
import CabecalhoComponent from '@/components/menus/CabecalhoComponent.vue';
import MenuLateralComponent from '@/components/menus/MenuLateralComponent.vue';
import SubMenuLateralComponent from '@/components/menus/FiltroLateralComponent.vue'
import TarefasView from './TarefasView.vue';
import ConfiguracoesView from './ConfiguracoesView.vue';

export default {
  name: 'HomeView',
  components: {
    CabecalhoComponent,
    MenuLateralComponent,
    SubMenuLateralComponent,
    TarefasView,
    ConfiguracoesView,
  },
  computed: {
    menuSelecionado() {
      return this.$store.state.menuSelecionado;
    }
  }
}
</script>

<template>
  <div class="container">
    <menu-lateral-component class="menu-lateral" />
    <div class="conteudo-principal">
      <cabecalho-component class="topo" />
      <div class="principal">
        <sub-menu-lateral-component v-if="menuSelecionado !== 'configuracoes'" class="filtro" />
        <div class="conteudo">
          <tarefas-view v-if="menuSelecionado === 'dashboard' || menuSelecionado === 'tarefas'" />
          <configuracoes-view v-if="menuSelecionado === 'configuracoes'" />
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
.filtro, .conteudo
  height calc(100vh - 69px)
.topo
  display flex
  align-items center
  justify-content flex-end
.conteudo
  overflow-y auto
  flex 1
  background-color var(--cor-fundo-home)

@media screen and (max-width: 992px)
  .principal
    flex-direction column
  .filtro
    width 100%
    height auto
  .menu-lateral
    display none
</style>