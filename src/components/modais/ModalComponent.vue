<script>
export default {
    name: 'ModalComponent',
    emits: ['fechar'],
    props: {
        exibirBotaoFechar: {
            type: Boolean,
            default: true
        },
        tamanhoEmPercentual: {
            type: Number,
            default: 60
        },
        visivel: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        fechar() {
            this.$emit('fechar');
        }
    }
}
</script>

<template>
    <div class="backdrop" :style="{ 'display': visivel ? 'block' : 'none' }">
        <div class="conteudo-modal animacao-scale-in" :style="{ 'width': `${tamanhoEmPercentual}%` }">
            <span v-show="exibirBotaoFechar" class="fechar" @click="fechar">
                <i class="fa-solid fa-xmark"></i>
            </span>
            <div class="titulo-modal">
                <slot name="titulo"></slot>
            </div>
            <div class="corpo-modal">
                <slot name="conteudo"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.titulo-modal
    padding 40px
    color var(--azul-escuro)
    font-family 'Gilroy Bold'
    font-size 1.56rem
.corpo-modal
    padding 0px 0px 40px 40px
.backdrop
    position fixed
    z-index 1
    padding-top 100px
    left 0
    top 0
    width 100%
    height 100%
    overflow  auto
    background-color var(--fundo-modal)
.fechar
    padding 20px
    color var(--azul-label)
    float right
    font-size 1.25rem
.fechar:hover, .fechar:focus
    color var(--azul-escuro)
    text-decoration none
    cursor pointer
.conteudo-modal
    border-radius 8px
    background-color var(--branco)
    margin auto

@media screen and (max-width: 992px)
    .modal
        padding-top 120px
    .conteudo-modal
        width 90% !important
    .corpo-modal
        padding 0px 0px 40px 20px
    .titulo-modal
        padding 40px 20px 30px 20px
        font-size 1.4rem 
</style>