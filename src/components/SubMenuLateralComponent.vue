<script>
import BadgeComponent from './BadgeComponent.vue';

export default {
    name: 'SubMenuLateralComponent',
    components: {
        BadgeComponent,
    }
}
</script>

<template>
    <nav class="container">
        <h3 class="titulo">Categoria</h3>

        <ul class="opcoes">
            <li>Todas</li>
            <li>Urgente <badge-component class="ml-5" corFundo="var(--vermelho)" texto="1" /></li>
            <li>Importantes <badge-component class="ml-5" corFundo="var(--amarelo)" texto="2" /></li>
            <li>Outras</li>
            <li>Finalizadas</li>
        </ul>
    </nav>
</template>

<style lang="stylus" scoped>
.container
    width 230px
    display flex
    flex-flow row wrap
    align-content center
.titulo
    font-family 'Gilroy Bold'
    font-size 1.06rem
    color var(--cor-titulo-submenu)
    margin-bottom 50px
    margin-left 20%
.opcoes
    margin 0
    padding 0
    list-style none
    margin-left 20%
    --espaco-icone 1.3em
.opcoes li
    display flex
    flex-flow row wrap
    font-family 'Gilroy Bold'
    font-size 0.93rem
    color var(--azul-escuro)
    padding 15px 0px
.opcoes li:before
    content '\f054'
    font-family 'FontAwesome'
    display inline-block
    width var(--espaco-icone)
.ml-5
    margin-left 5px
</style>