import { createStore } from 'vuex'
import { tarefa } from './modulos/tarefa'

export const store = createStore({
  state() {
    return {
      exibirMenuResponsivo: false,
      menuSelecionado: 'dashboard',
      dadosPessoaLogada: {
        nome: 'Eduardo Pereira da Costa',
        profissao: 'Front-end Developer'
      }
    }
  },
  mutations: {
    ATUALIZAR_MENU_SELECIONADO(state, valor) {
      state.menuSelecionado = valor
    },
    ATUALIZA_VISIBILIDADE_MENU_RESPONSIVO(state, valor) {
      state.exibirMenuResponsivo = valor
    }
  },
  modules: {
    tarefa
  }
})
