import { createStore } from 'vuex'
import { tarefa } from './modulos/tarefa'

export const store = createStore({
  state() {
    return {
      dadosPessoaLogada: {
        nome: 'Eduardo Pereira da Costa',
        profissao: 'Front-end Developer'
      }
    }
  },
  modules: {
    tarefa
  }
})
