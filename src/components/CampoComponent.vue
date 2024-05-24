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
        },
        obrigatorio: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <label class="label" :for="id">{{ textoLabel }}</label>
    <textarea v-if="tipoCampo === 'textarea'" class="input" :id="id" :name="id"
        :style="{ 'line-height': `${larguraCampoEmPx}px` }" :required="obrigatorio"></textarea>
    <input v-else class="input" :style="{ 'line-height': `${larguraCampoEmPx}px` }" :type="tipoCampo" :id="id"
        :name="id" :required="obrigatorio">
</template>

<style lang="stylus" scoped>
.label
    font-size 0.87rem
    font-family 'Gilroy SemiBold'
    color var(--azul-label)
.input
    font-family 'Gilroy Medium'
    font-size 1rem
    border 2px solid var(--azul-claro)
    border-radius 5px
    transition 0.3s
.input:focus
    outline none
    border 2px solid var(--azul-medio)
</style>