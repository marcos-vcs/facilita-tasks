<script>
import BotaoComponent from './BotaoComponent.vue';

export default {
    name: 'ModalConfirmacaoComponent',
    emits: ['fechar'],
    components: {
        BotaoComponent,
    },
    props: {
        caminhoIcone: {
            type: String,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        tamanhoEmPercentual: {
            type: Number,
            default: 40
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
    <div class="modal-confirmacao" :style="{ 'display': visivel ? 'block' : 'none' }">
        <div class="conteudo-modal" :style="{ 'width': `${tamanhoEmPercentual}%` }">
            <div class="titulo-modal">
                <slot name="titulo"></slot>
            </div>
            <div class="descricao-modal">
                <slot name="conteudo"></slot>
            </div>
            <div class="rodape-modal">
                <botao-component tamanho-fonte-em-px="15" cor-fundo="var(--verde)"
                    @click="fechar">Cancelar</botao-component>
                <botao-component tamanho-fonte-em-px="15" cor-fundo="var(--vermelho)"
                    @click="fechar">Confirmar</botao-component>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.rodape-modal
    display flex
    flex-flow row
    justify-content center
    gap 10px
    padding-bottom 46px
.corpo-modal
    padding 0px 0px 40px 40px
.modal-confirmacao
    position fixed
    z-index 1
    padding-top 100px
    left 0
    top 0
    width 100%
    height 100%
    overflow  auto
    background-color rgba(0,0,0,0.4)
.conteudo-modal
    border-radius 8px
    background-color var(--branco)
    margin auto
.fechar
    padding 20px
    color var(--azul-label)
    float right
    font-size 20px
.fechar:hover, .fechar:focus
    color var(--azul-escuro)
    text-decoration none
    cursor pointer
</style>