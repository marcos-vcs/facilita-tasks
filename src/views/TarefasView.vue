<script>
import BotaoFlutuanteComponent from '@/components/botoes/BotaoFlutuanteComponent.vue';
import CampoPesquisaComponent from '@/components/formularios/CampoPesquisaComponent.vue';
import ModalCadastroEdicaoTarefa from '@/components/modais/ModalCadastroEdicaoTarefa.vue';
import TarefaComponent from '@/components/cards/TarefaComponent.vue';

export default {
  name: 'TarefasView',
  components: {
    CampoPesquisaComponent,
    TarefaComponent,
    BotaoFlutuanteComponent,
    ModalCadastroEdicaoTarefa,
  },
  data() {
    return {
      estadoModalIncluir: false,
      tarefas: [],
    }
  },
  computed: {
    dadosPessoaLogada() {
      return this.$store.state.dadosPessoaLogada;
    },
    tarefasVuex() {
      return this.$store.state.tarefa.tarefas;
    },
    tarefasPendentes() {
      return this.tarefas.filter(t => t.ehFinalizado === false);
    }
  },
  watch: {
    tarefasVuex: {
      handler(novo) {
        this.tarefas = novo;
      },
      immediate: true,
    }
  },
  mounted() {
    this.tarefas = this.tarefasVuex;
  },
  methods: {
    pesquisa(valor) {
      if (!valor) {
        this.tarefas = this.tarefasVuex;
      }

      this.tarefas = this.tarefas.filter(t => t.titulo.includes(valor) || t.descricao.includes(valor))
    },
    atualizaEhFinalizado(id, novoValor) {
      var tarefa = this.tarefas.find(d => d.id === id);
      tarefa.ehFinalizado = novoValor;
      this.$store.commit('tarefa/EDITAR', tarefa);
    },
    abrirModalIncluir() {
      this.estadoModalIncluir = true;
    },
    fecharModalIncluir() {
      this.estadoModalIncluir = false;
    },
  }
}
</script>

<template>
  <main class="container-tarefas">
    <h2 class="titulo">Minhas Tarefas</h2>
    <p class="subtitulo">Olá <span>{{ dadosPessoaLogada.nome }}</span>, você tem <span> {{ tarefasPendentes.length }} {{
      tarefasPendentes.length === 1 ? 'tarefa' : 'tarefas' }}</span> {{ tarefasPendentes.length === 1 ? 'pendente'
          : 'pendentes' }}.</p>

    <campo-pesquisa-component class="pesquisa-component" @pesquisa-atualizada="pesquisa" />

    <div class="lista-tarefas" v-if="tarefas.length > 0">
      <tarefa-component v-for="dado in tarefas" :key="dado.id" @ehFinalizadoMudou="atualizaEhFinalizado" :id="dado.id"
        :titulo="dado.titulo" :categoria="dado.categoria" :eh-finalizado="dado.ehFinalizado" />
    </div>
    <p v-else class="subtitulo">Nenhuma tarefa cadastrada.</p>
  </main>

  <modal-cadastro-edicao-tarefa @fechar="fecharModalIncluir" :visivel="estadoModalIncluir" />
  <botao-flutuante-component @clickBotao="abrirModalIncluir" />
</template>

<style lang="stylus" scoped>
.lista-tarefas
  padding-bottom 40px
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