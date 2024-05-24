<script>
export default {
    name: 'MenuLateralComponent',

}
</script>

<template>
    <nav class="container">
        <div class="logo">
            <img src="/images/logo-home.png" alt="Logo do Facilita Tasks.">
        </div>

        <div class="menu-lateral">
            <ul class="lista-opcoes">
                <li>
                    <img src="/images/icone-dashboard.png" alt="Icone de dashboard.">
                    <p>Dashboard</p>
                </li>
                <li>
                    <img src="/images/icone-tarefas.png" alt="Icone de tarefa.">
                    <p>Tarefas</p>
                </li>
                <li>
                    <img src="/images/icone-configuracoes.png" alt="Icone de configurações.">
                    <p>Configurações</p>
                </li>
            </ul>
        </div>

    </nav>
</template>

<style lang="stylus" scoped>
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