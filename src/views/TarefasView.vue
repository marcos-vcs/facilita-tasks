<script>
import BotaoComponent from '@/components/BotaoComponent.vue';
import BotaoFlutuanteComponent from '@/components/BotaoFlutuanteComponent.vue';
import CampoComponent from '@/components/CampoComponent.vue';
import CampoPesquisaComponent from '@/components/CampoPesquisaComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import TarefaComponent from '@/components/TarefaComponent.vue';

export default {
  name: 'TarefasView',
  components: {
    CampoPesquisaComponent,
    TarefaComponent,
    BotaoComponent,
    BotaoFlutuanteComponent,
    ModalComponent,
    CampoComponent,
  },
  data() {
    return {
      estadoModalIncluir: false,
    }
  },
  computed: {
    dadosPessoaLogada() {
      return this.$store.state.dadosPessoaLogada;
    },
    tarefas() {
      return this.$store.state.tarefa.tarefas;
    },
    tarefasPendentes() {
      return this.tarefas.filter(t => t.ehFinalizado === false);
    }
  },
  methods: {
    pesquisa(valor) {
      console.log('valor campo pesquisa: ', valor);
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
    }
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

  <modal-component @fechar="fecharModalIncluir" :tamanhoEmPercentual="50" :visivel="estadoModalIncluir">
    <template v-slot:titulo>
      Cadastrar Tarefa
    </template>
    <template v-slot:conteudo>
      <form class="formulario-salvar" @submit.prevent="salvar">
        <div class="campo">
          <campo-component id="titulo" texto-label="Título:" :obrigatorio="true" />
        </div>
        <div class="campo">
          <campo-component id="descricao" texto-label="Descrição:" largura-campo-em-px="50" tipo-campo="textarea" />
        </div>
        <div class="rodape">
          <div class="radio">
            <input type="radio" id="radio_urgente" name="categoria">
            <label for="">Urgente</label>
            <input type="radio" id="radio_importante" name="categoria">
            <label for="">Importante</label>
          </div>
          <div class="botao">
            <botao-component>Adicionar</botao-component>
          </div>
        </div>
      </form>
    </template>
  </modal-component>

  <botao-flutuante-component @clickBotao="abrirModalIncluir" />
</template>

<style lang="stylus" scoped>
.formulario-salvar
    display flex
    flex-direction column
    gap 15px
    width 94%
.campo
  display flex
  flex-direction column
.rodape
  display flex
  flex-direction row
.radio
  display flex
  flex-direction row
  align-items baseline
  gap 10px
  font-size 0.87rem
  font-font-family 'Gilroy SemiBold'
  color var(--azul-label)
.radio input
  background red
.botao
  display flex
  flex-direction column
  align-items flex-end
  flex 1

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