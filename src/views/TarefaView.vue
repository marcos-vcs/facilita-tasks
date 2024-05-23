<script>
import CampoPesquisaComponent from '@/components/CampoPesquisaComponent.vue';
import TarefaComponent from '@/components/TarefaComponent.vue';

export default {
  name: 'TarefaView',
  components: {
    CampoPesquisaComponent,
    TarefaComponent,
  },
  data() {
    return {
      dados: [
        {
          id: 1,
          titulo: 'Planejar desenvolvimento do app TodoList',
          descricao: 'descrição exemplo',
          categoria: 'urgente',
          ehFinalizado: true
        },
        {
          id: 2,
          titulo: 'Criar projeto Vue.js',
          descricao: 'descrição exemplo',
          categoria: 'importante',
          ehFinalizado: false
        },
        {
          id: 3,
          titulo: 'Montar telas HTML/CSS',
          descricao: 'descrição exemplo',
          categoria: 'importante',
          ehFinalizado: false
        },
        {
          id: 4,
          titulo: 'Montar telas HTML/CSS',
          descricao: 'descrição exemplo',
          ehFinalizado: false
        },
      ]
    }
  },
  computed: {
    dadosPessoaLogada() {
      return this.$store.state.dadosPessoaLogada;
    }
  },
  methods: {
    pesquisa(valor) {
      console.log('valor campo pesquisa: ', valor);
    }
  }
}
</script>

<template>
  <main class="container-tarefas">
    <h2 class="titulo">Minhas Tarefas</h2>
    <p class="subtitulo">Olá <span>{{ dadosPessoaLogada.nome }}</span>, você tem <span>4 tarefas</span> pendentes.</p>

    <campo-pesquisa-component class="pesquisa-component" @pesquisa-atualizada="pesquisa" />

    <div class="lista-tarefas">
      <tarefa-component v-for="dado in dados" :key="dado.id" :titulo="dado.titulo" :categoria="dado.categoria" />
    </div>
  </main>

</template>

<style lang="stylus" scoped>
.container-tarefas
  width 60%
  height: 100%
  display flex
  flex-direction column
  margin 20px auto 0 auto

.titulo
  margin 40px 0 0 0
  font-size 1.62rem
  font-family 'Gilroy Bold'
  color var(--azul-escuro)
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