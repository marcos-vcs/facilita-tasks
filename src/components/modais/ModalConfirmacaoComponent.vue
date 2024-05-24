    <script>
    import BotaoComponent from '../botoes/BotaoComponent.vue';

    export default {
        name: 'ModalConfirmacaoComponent',
        emits: ['botaoClicado'],
        components: {
            BotaoComponent,
        },
        props: {
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
            botaoClicado(valor) {
                this.$emit('botaoClicado', valor);
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
                    <botao-component :tamanho-fonte-em-px="15" cor-fundo="var(--verde)"
                        @click="botaoClicado(false)">Cancelar</botao-component>
                    <botao-component :tamanho-fonte-em-px="15" cor-fundo="var(--vermelho)"
                        @click="botaoClicado(true)">Confirmar</botao-component>
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
    -webkit-animation scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)
	animation scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)
    border-radius 8px
    background-color var(--branco)
    margin auto

@media screen and (max-width: 992px)
    .conteudo-modal
        width 50% !important
    .modal-confirmacao
        padding-top 20px
</style>