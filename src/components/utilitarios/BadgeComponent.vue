<script>
export default {
    name: 'BadgeComponent',
    props: {
        corFundo: {
            type: String,
            default: 'var(--azul-claro)'
        },
        corFonte: {
            type: String,
            default: 'var(--branco)'
        },
        texto: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="badge" :style="{ 'background-color': corFundo, 'color': corFonte }">{{ texto }}</div>
</template>

<style lang="stylus" scoped>
.badge
    display flex
    align-items center
    justify-content center
    font-size 0.68rem
    font-family 'Gilroy Bold'
    border-radius 100px
    padding 5px
    min-width 14px
@media screen and (max-width: 992px)
    .badge
        font-size 0.5rem
        min-width 10px
</style>