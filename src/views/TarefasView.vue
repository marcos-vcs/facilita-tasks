<script>
import CampoPesquisaComponent from '@/components/CampoPesquisaComponent.vue';
import TarefaComponent from '@/components/TarefaComponent.vue';

export default {
  name: 'TarefasView',
  components: {
    CampoPesquisaComponent,
    TarefaComponent,
  },
  data() {
    return {
      estadoModal: true,
    }
  },
  computed: {
    dadosPessoaLogada() {
      return this.$store.state.dadosPessoaLogada;
    },
    tarefas() {
      return this.$store.state.tarefa.tarefas;
    }
  },
  methods: {
    pesquisa(valor) {
      console.log('valor campo pesquisa: ', valor);
    },
    atualizaEhFinalizado(id, novoValor) {
      this.tarefas.find(d => d.id === id).ehFinalizado = novoValor
    },
  }
}
</script>

<template>
  <main class="container-tarefas">
    <h2 class="titulo">Minhas Tarefas</h2>
    <p class="subtitulo">Olá <span>{{ dadosPessoaLogada.nome }}</span>, você tem <span>4 tarefas</span> pendentes.</p>

    <campo-pesquisa-component class="pesquisa-component" @pesquisa-atualizada="pesquisa" />

    <div class="lista-tarefas" v-if="tarefas.length > 0">
      <tarefa-component v-for="dado in tarefas" :key="dado.id" @ehFinalizadoMudou="atualizaEhFinalizado" :id="dado.id"
        :titulo="dado.titulo" :categoria="dado.categoria" :eh-finalizado="dado.ehFinalizado" />
    </div>
    <p v-else class="subtitulo">Nenhuma tarefa cadastrada.</p>
  </main>

  <!--   <modal-component @fechar="estadoModal = !estadoModal" :visivel="estadoModal">
    <template v-slot:titulo>Cadastrar Tarefa</template>
<template v-slot:conteudo>
      Cadastrar Tarefa Cadastrar Tarefa Cadastrar Tarefa Cadastrar Tarefa
    </template>
</modal-component> -->
</template>

<style lang="stylus" scoped>
.lista-tarefas
  padding-bottom 30px
.titulo-modal-confirmacao
  display flex
  flex-direction column
  align-items center
  padding 40px 0px 30px 0px
  font-size 1.25rem
  font-family 'Gilroy Bold'
  color var(--azul-escuro)
.titulo-modal-confirmacao p
  margin 10px 0px 0px 0px
.titulo-modal-confirmacao span
  color var(--vermelho)
.container-tarefas
  width 60%
  height: calc(100% - 69px)
  display flex
  flex-direction column
  margin 20px auto 0 auto

.titulo
  margin 40px 0 0 0
  font-size 1.62rem
  font-family 'Gilroy Bold'
  color var(--azul-escuro)
  transition 0.3s
.subtitulo
  margin 0 0 30px 0
  font-family 'Gilroy SemiBold'
  font-size 1.06rem
  color var(--cinza-medio)
.subtitulo span
  color var(--azul-medio)
.pesquisa-component
  margin-bottom 30px

@media screen and (max-width: 992px)
  .container-tarefas
    width 80%
</style>