<script>
export default {
    name: 'MenuLateralComponent',
    data() {
        return {
            opcoesMenu: [
                { titulo: 'dashboard', icone: '/images/icone-dashboard.png' },
                { titulo: 'tarefas', icone: '/images/icone-tarefas.png' },
                { titulo: 'configuracoes', icone: '/images/icone-configuracoes.png' }
            ]
        }
    },
    computed: {
        menuSelecionado() {
            return this.$store.state.menuSelecionado;
        }
    },
    methods: {
        atualizaMenuSelecionado(valor) {
            this.$store.commit('ATUALIZAR_MENU_SELECIONADO', valor);
        }
    }
}
</script>

<template>
    <nav class="container">
        <div class="logo">
            <img src="/images/logo-home.png" alt="Logo do Facilita Tasks.">
        </div>

        <div class="menu-lateral">
            <ul class="lista-opcoes">
                <li v-for="(opcao, key) in opcoesMenu" :key="key" @click="atualizaMenuSelecionado(opcao.titulo)"
                    class="opcao" :class="menuSelecionado === opcao.titulo ? 'opcao-ativa' : ''">
                    <img :src="opcao.icone">
                    <p>{{ opcao.titulo }}</p>
                </li>
            </ul>
        </div>

    </nav>
</template>

<style lang="stylus" scoped>
.opcao-ativa
    background-color var(--cor-menu-selecionado) !important
.opcao:hover
    cursor pointer
.container
    display flex
    flex-direction column
    width 115px
    height 100vh
    background-color var(--azul-medio)
.logo
    margin 20px auto 0px auto
.menu-lateral
    width 115px
    display flex
    flex-direction column
    justify-content center
    margin auto
.lista-opcoes
    list-style none
    margin 0
    padding 0
.lista-opcoes p
    text-transform capitalize
.lista-opcoes li
    text-align center
    margin auto
    padding 18px 0px
    color var(--branco)
    font-family 'Gilroy Bold'
    font-size 0.75rem
.lista-opcoes li:first-child
    border-top 1px solid var(--azul-borda-menu)
.lista-opcoes li:not(:first-child):not(:last-child)
    border-top 1px solid var(--azul-borda-menu)
    border-bottom 1px solid var(--azul-borda-menu)
.lista-opcoes li:last-child
    border-bottom 1px solid var(--azul-borda-menu)
</style>