<script>
import BadgeComponent from '../utilitarios/BadgeComponent.vue';

export default {
    name: 'FiltroLateralComponent',
    components: {
        BadgeComponent,
    },
    computed: {
        atividadesUrgentes() {
            return this.$store.state.tarefa.tarefas.filter(t => t.categoria === 'urgente');
        },
        atividadesImportantes() {
            return this.$store.state.tarefa.tarefas.filter(t => t.categoria === 'importante');
        }
    },
    methods: {
        mudarFiltroAtivo(valor) {
            this.$store.commit('tarefa/ATUALIZA_CATEGORIA', valor);
        }
    }
}
</script>

<template>
    <nav class="container">
        <h3 class="titulo">Categoria</h3>

        <ul class="opcoes">
            <li @click="mudarFiltroAtivo('todas')">Todas</li>
            <li @click="mudarFiltroAtivo('urgentes')">Urgentes <badge-component class="ml-5" corFundo="var(--vermelho)"
                    :texto="(atividadesUrgentes.lenght ?? 0) <= 100 ? atividadesUrgentes.length.toString() : '99+'" />
            </li>
            <li @click="mudarFiltroAtivo('importantes')">Importantes <badge-component class="ml-5"
                    corFundo="var(--amarelo)"
                    :texto="(atividadesImportantes.lenght ?? 0) <= 100 ? atividadesImportantes.length.toString() : '99+'" />
            </li>
            <li @click="mudarFiltroAtivo('outras')">Outras</li>
            <li @click="mudarFiltroAtivo('finalizadas')">Finalizadas</li>
        </ul>
    </nav>
</template>

<style lang="stylus" scoped>
.container
    background-color var(--branco-fundo-submenu)
    box-shadow 0px 1px 6px rgba(40, 56, 72, 0.1)
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
    cursor pointer
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