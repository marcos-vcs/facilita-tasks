<script>
import CampoPesquisaComponent from '@/components/CampoPesquisaComponent.vue';

export default {
  name: 'TarefaView',
  components: {
    CampoPesquisaComponent,
  },
  methods: {
    pesquisa(valor) {
      console.log('valor campo pesquisa: ', valor);
    }
  }
}
</script>

<template>
  <main>
    <h2 class="titulo">Minhas Tarefas</h2>
    <p class="subtitulo">Olá <span>Eduardo Pereira</span>, você tem <span>4 tarefas</span> pendentes.</p>

    <campo-pesquisa-component @pesquisa-atualizada="pesquisa" />
  </main>

</template>

<style lang="stylus" scoped>
.titulo
  font-size 1.62rem
  font-family 'Gilroy Bold'
  color var(--azul-escuro)
.subtitulo
  font-family 'Gilroy SemiBold'
  font-size 1.06rem
  color var(--cinza-medio)
.subtitulo span
  color var(--azul-medio)
</style>