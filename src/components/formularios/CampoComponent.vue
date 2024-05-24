<script>
export default {
    name: 'CampoComponent',
    emits: ['bind'],
    props: {
        id: {
            type: String,
            required: true
        },
        valor: {
            type: String,
            default: ''
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
        linhasTextArea: {
            type: Number,
            default: 5
        },
        obrigatorio: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            valorBind: ''
        }
    },
    mounted() {
        this.valorBind = this.valor;
    },
    watch: {
        valor(novoValor) {
            this.valorBind = novoValor;
        }
    },
    methods: {
        bind() {
            this.$emit('bind', this.valorBind);
        }
    }
}
</script>

<template>
    <label class="label" :for="id">{{ textoLabel }}</label>
    <textarea v-model="valorBind" @input="bind" v-if="tipoCampo === 'textarea'" class="input textarea" :id="id"
        :name="id" :rows="linhasTextArea" :required="obrigatorio"></textarea>
    <input v-else class="input" v-model="valorBind" @input="bind" :style="{ 'line-height': `${larguraCampoEmPx}px` }"
        :type="tipoCampo" :id="id" :name="id" :required="obrigatorio">
</template>

<style lang="stylus" scoped>
.label
    font-size 0.87rem
    font-family 'Gilroy SemiBold'
    color var(--azul-label)
.textarea{
    padding 10px !important
}
.input
    padding 0px 10px
    resize none
    font-family 'Gilroy Medium'
    font-size 1rem
    border 2px solid var(--azul-claro)
    border-radius 5px
    transition 0.3s
.input:focus
    border none
    outline 2px solid var(--azul-medio)
</style>