<script>
export default {
    name: 'CampoComponent',
    props: {
        id: {
            type: String,
            required: true
        },
        textoLabel: {
            type: String,
            required: true
        },
        tipoCampo: {
            type: String,
            default: 'text'
        },
        larguraCampoEmPx: {
            type: Number,
            default: 30
        }
    }
}
</script>

<template>
    <label class="label" :for="id">{{ textoLabel }}</label>
    <input class="input" :style="{ 'line-height': `${larguraCampoEmPx}px` }" :type="tipoCampo" :id="id" :name="id">
</template>

<style lang="stylus" scoped>
.label
    font-size: 14px
    font-family: 'Gilroy SemiBold'
    color: var(--azul-label)
.input
    font-size: 16px
    border: 2px solid var(--azul-claro)
    border-radius: 5px
    transition: 0.3s
.input:focus
    outline: none
    border: 2px solid var(--azul-medio)
    font-family: 'Gilroy Medium'
</style>