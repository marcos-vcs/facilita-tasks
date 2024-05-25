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
      predicadoFiltro: () => true,
      valorPesquisa: ''
    }
  },
  computed: {
    categoriaAtiva() {
      return this.$store.state.tarefa.categoriaAtiva;
    },
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
        this.aplicarFiltros();
      },
      immediate: true,
    },
    categoriaAtiva: {
      handler() {
        this.filtrar();
      },
      immediate: true,
    }
  },
  mounted() {
    this.tarefas = this.tarefasVuex;
    this.aplicarFiltros();
  },
  methods: {
    filtrar() {
      switch (this.categoriaAtiva) {
        case 'todas':
          this.predicadoFiltro = () => true;
          break;
        case 'urgentes':
          this.predicadoFiltro = (t) => t.categoria === 'urgente' && !t.ehFinalizado;
          break;
        case 'importantes':
          this.predicadoFiltro = (t) => t.categoria === 'importante' && !t.ehFinalizado;
          break;
        case 'outras':
          this.predicadoFiltro = (t) => !t.categoria && !t.ehFinalizado;
          break;
        case 'finalizadas':
          this.predicadoFiltro = (t) => t.ehFinalizado;
          break;
        default:
          this.predicadoFiltro = () => true;
      }
      this.aplicarFiltros();
    },
    pesquisar(valor) {
      this.valorPesquisa = valor;
      this.aplicarFiltros();
    },
    aplicarFiltros() {
      this.tarefas = this.tarefasVuex.filter(t => {
        return this.predicadoFiltro(t) &&
          (!this.valorPesquisa || t.titulo.includes(this.valorPesquisa) || t.descricao.includes(this.valorPesquisa));
      }).sort((a, b) => {
        if (a.ehFinalizado !== b.ehFinalizado) {
          return a.ehFinalizado - b.ehFinalizado;
        }
        if (a.categoria === 'urgente' && b.categoria !== 'urgente') {
          return -1;
        }
        if (a.categoria !== 'urgente' && b.categoria === 'urgente') {
          return 1;
        }
        if (a.categoria === 'importante' && b.categoria !== 'importante') {
          return -1;
        }
        if (a.categoria !== 'importante' && b.categoria === 'importante') {
          return 1;
        }
        if (!a.categoria && b.categoria) {
          return 1;
        }
        if (a.categoria && !b.categoria) {
          return -1;
        }
        return 0;
      });
    },
    atualizaEhFinalizado(id, novoValor) {
      var tarefa = this.tarefas.find(t => t.id === id);
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

    <campo-pesquisa-component class="pesquisa-component" @pesquisa-atualizada="pesquisar" />

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
    width 90%
    min-height 80vh
</style>