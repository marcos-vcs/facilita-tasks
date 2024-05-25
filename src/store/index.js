import { createStore } from 'vuex'
import { tarefa } from './modulos/tarefa'

export const store = createStore({
  state() {
    return {
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
    }
  },
  modules: {
    tarefa
  }
})
