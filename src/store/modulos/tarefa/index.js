export const tarefa = {
  state() {
    return {
      tarefas: JSON.parse(localStorage.getItem('tarefas')) ?? []
    }
  },
  mutations: {
    ADICIONAR(state, novaTarefa) {
      novaTarefa.id = new Date().getTime()

      var tarefas = JSON.parse(localStorage.getItem('tarefas'))
      tarefas.push(novaTarefa)

      state.tarefas = tarefas
      localStorage.setItem('tarefas', JSON.stringify(novaTarefa))
    },
    EDITAR(state, tarefa) {
      commit('EXCLUIR', tarefa.id)
      commit('ADICIONAR', tarefa)
    },
    EXCLUIR(state, idTarefa) {
      var tarefas = JSON.parse(localStorage.getItem('tarefas'))
      tarefas = tarefas.filter((t) => t.id !== idTarefa)
      localStorage.setItem('tarefas', tarefas)
      state.tarefas = tarefas
    },
    ATUALIZAR(state) {
      state.tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }
  }
}
