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

      localStorage.setItem('tarefas', JSON.stringify(tarefas))
      state.tarefas = JSON.parse(localStorage.getItem('tarefas')) ?? []
    },
    EXCLUIR(state, idTarefa) {
      let tarefas = JSON.parse(localStorage.getItem('tarefas')) ?? []
      tarefas = tarefas.filter((t) => t.id !== idTarefa)
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
      state.tarefas = tarefas
    },
    EDITAR(state, tarefa) {
      const index = state.tarefas.findIndex((t) => t.id === tarefa.id)
      if (index !== -1) {
        state.tarefas.splice(index, 1, tarefa)
        localStorage.setItem('tarefas', JSON.stringify(state.tarefas))
        let tarefas = JSON.parse(localStorage.getItem('tarefas')) ?? []
        state.tarefas = tarefas
      }
    }
  }
}
