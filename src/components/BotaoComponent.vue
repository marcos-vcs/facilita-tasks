<script>
export default {
    name: 'BotaoComponent',
    emits: ['clickBotao'],
    props: {
        tamanhoFonteEmPx: {
            type: Number,
            default: 16
        },
        corFonte: {
            type: String,
            default: 'var(--branco)'
        },
        corFundo: {
            type: String,
            default: 'var(--azul-btn)'
        },
        espacamentoVerticalEmPx: {
            type: Number,
            default: 10
        },
        espacamentoHorizontalEmPx: {
            type: Number,
            default: 30
        },
    },

    methods: {
        clickBotao() {
            this.$emit('clickBotao')
        }
    }
}
</script>

<template>
    <button class="botao" :style="{
        'font-size': `${tamanhoFonteEmPx}px`,
        'color': `${corFonte}`,
        'background-color': `${corFundo}`,
        'padding': `${espacamentoVerticalEmPx}px ${espacamentoHorizontalEmPx}px`
    }" @click="clickBotao">
        <slot></slot>
    </button>
</template>

<style lang="stylus" scoped>
.botao
    border-radius 4px
    background var(--verde)
    border 0
    font-family 'Gilroy Bold'
.botao:hover
    cursor pointer
.botao:focus
    outline none
    border 2px solid var(--azul-medio)
</style>
