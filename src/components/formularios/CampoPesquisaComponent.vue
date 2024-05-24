<script>
export default {
    name: 'CampoPesquisaComponent',
    emits: ['pesquisaAtualizada'],
    props: {
        placeholder: {
            type: String,
            default: 'Buscar Tarefas'
        }
    },
    data() {
        return {
            pesquisa: '',
        }
    },
    methods: {
        emitirPesquisa() {
            this.$emit('pesquisaAtualizada', this.pesquisa);
        }
    }
}
</script>

<template>
    <input v-model="pesquisa" @input="emitirPesquisa" class="campo-pesquisa" type="text" :placeholder="placeholder">
</template>

<style lang="stylus" scoped>
.campo-pesquisa
    line-height 35px
    min-width 300px
    padding: 0px 40px 0px 10px
    background transparent
    background-image url('/images/icone-pesquisa.svg')
    background-repeat no-repeat
    background-position right 10px center
    font-size 1.06rem
    font-family 'Gilroy SemiBold'
    border-radius 5px
    border 2px solid var(--azul-claro)
    transition 0.3s
.campo-pesquisa:focus
    border none
    outline 2px solid var(--azul-medio)
.campo-pesquisa::placeholder
    color var(--azul-btn)
</style>