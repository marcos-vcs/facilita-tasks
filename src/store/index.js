import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      dadosPessoaLogada: {
        nome: 'Eduardo Pereira da Costa',
        profissao: 'Front-end Developer'
      }
    }
  },
  mutations: {}
})
