<script>
export default {
    name: 'BotaoFlutuanteComponent',
    emits: ['clickBotao'],
    methods: {
        clickBotao() {
            this.$emit('clickBotao');
        }
    }
}
</script>

<template>
    <button @click="clickBotao" class="botao-flutuante">
        <i class="fas fa-plus"></i>
    </button>
</template>

<style lang="stylus" scoped>
.botao-flutuante
    position fixed
    bottom 20px
    right 20px
    width 60px
    height 60px
    border-radius 50%
    background-color var(--cor-botao-flutuante)
    color var(--branco)
    font-size 24px
    border none
    display flex
    align-items center
    justify-content center
    box-shadow 0 4px 8px rgba(0, 0, 0, 0.3)
    cursor pointer
    transition background-color 0.3s
.botao-flutuante:hover
    background-color var(--cor-botao-flutuante-clicado)
    transform scale(1.05)
.botao-flutuante:active
    transform scale(0.95)
</style>