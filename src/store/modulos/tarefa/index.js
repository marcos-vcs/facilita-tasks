/* eslint-disable no-undef */
export const tarefa = {
  namespaced: true,
  state() {
    return {
      tarefas: JSON.parse(localStorage.getItem('tarefas')) ?? []
    }
  },
  mutations: {
    ADICIONAR(state, novaTarefa) {
      novaTarefa.id = new Date().getTime()

      let tarefas = JSON.parse(localStorage.getItem('tarefas')) ?? []
      tarefas.push(novaTarefa)

      state.tarefas = tarefas
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
    },
    EXCLUIR(state, idTarefa) {
      let tarefas = JSON.parse(localStorage.getItem('tarefas')) ?? []
      tarefas = tarefas.filter((t) => t.id !== idTarefa)

      state.tarefas = tarefas
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
    },
    EDITAR(state, tarefa) {
      const index = state.tarefas.findIndex((t) => t.id === tarefa.id)
      if (index !== -1) {
        state.tarefas.splice(index, 1, tarefa)
        localStorage.setItem('tarefas', JSON.stringify(state.tarefas))
        commit('tarefa/ATUALIZAR')
      }
    },
    ATUALIZAR(state) {
      state.tarefas = JSON.parse(localStorage.getItem('tarefas')) ?? []
    }
  }
}
