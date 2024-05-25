<script>
import BotaoComponent from '../botoes/BotaoComponent.vue';
import CampoComponent from '../formularios/CampoComponent.vue';
import ModalComponent from './ModalComponent.vue';

export default {
    name: 'ModalCadastroEdicaoTarefa',
    emits: ['fechar'],
    components: {
        ModalComponent,
        BotaoComponent,
        CampoComponent,
    },
    data() {
        return {
            formularioInclusaoEdicao: {
                id: this.id,
                titulo: '',
                descricao: '',
                categoria: '',
                ehFinalizado: false,
            },
            titulo: 'Cadastrar Tarefa',
            botao: 'Adicionar'
        }
    },
    props: {
        visivel: {
            type: Boolean,
            default: false
        },
        id: {
            type: Number,
            default: 0
        }
    },
    watch: {
        visivel() {
            if (this.id === 0) {
                this.titulo = 'Cadastrar Tarefa';
                this.botao = 'Adicionar';
            } else {
                this.titulo = 'Editar Tarefa';
                this.botao = 'Editar';
                var tarefa = this.$store.state.tarefa.tarefas.find(t => t.id === this.id);

                this.formularioInclusaoEdicao.titulo = tarefa.titulo;
                this.formularioInclusaoEdicao.descricao = tarefa.descricao;
                this.formularioInclusaoEdicao.categoria = tarefa.categoria;
                this.formularioInclusaoEdicao.ehFinalizado = tarefa.ehFinalizado;
            }
        }
    },
    methods: {
        salvar() {
            if (this.id === 0) {
                this.$store.commit('tarefa/ADICIONAR', this.formularioInclusaoEdicao);
            } else {
                this.$store.commit('tarefa/EDITAR', this.formularioInclusaoEdicao);
            }
            this.fechar();
        },
        bindDescricao(valor) {
            this.formularioInclusaoEdicao.descricao = valor;
        },
        deselecionarRadioButton(valor) {
            if (this.formularioInclusaoEdicao.categoria === valor) {
                this.formularioInclusaoEdicao.categoria = undefined;
            }
        },
        limparFormularioCadastroEdicao() {
            this.formularioInclusaoEdicao.titulo = '';
            this.formularioInclusaoEdicao.descricao = '';
            this.formularioInclusaoEdicao.categoria = undefined;
            this.formularioInclusaoEdicao.ehFinalizado = false;
        },
        bindTitulo(valor) {
            this.formularioInclusaoEdicao.titulo = valor;
        },
        fechar() {
            this.$emit('fechar');
            this.limparFormularioCadastroEdicao();
        }
    }
}
</script>

<template>
    <modal-component class="modal" @fechar="fechar" :tamanhoEmPercentual="50" :visivel="visivel">
        <template v-slot:titulo>
            {{ titulo }}
        </template>
        <template v-slot:conteudo>
            <form class="formulario-salvar" @submit.prevent="salvar">
                <div class="campo">
                    <campo-component :valor="formularioInclusaoEdicao.titulo" @bind="bindTitulo" id="titulo"
                        texto-label="Título:" :obrigatorio="true" />
                </div>
                <div class="campo">
                    <campo-component :valor="formularioInclusaoEdicao.descricao" @bind="bindDescricao" id="descricao"
                        texto-label="Descrição:" :linhas-text-area="7" tipo-campo="textarea" />
                </div>
                <div class="rodape">
                    <div class="radio">
                        <div>
                            <input type="radio" @click="deselecionarRadioButton('urgente')" value="urgente"
                                v-model="formularioInclusaoEdicao.categoria" class="radio__input" id="radio_urgente"
                                name="categoria">
                            <label for="radio_urgente">Urgente</label>
                        </div>
                        <div>
                            <input type="radio" @click="deselecionarRadioButton('importante')" value="importante"
                                v-model="formularioInclusaoEdicao.categoria" class="radio__input" id="radio_importante"
                                name="categoria">
                            <label for="radio_importante">Importante</label>
                        </div>
                    </div>
                    <div class="botao">
                        <div>
                            <botao-component cor-fundo="var(--cor-botao-incluir-editar)">
                                {{ botao }}
                            </botao-component>
                        </div>
                    </div>
                </div>
            </form>
        </template>
    </modal-component>
</template>

<style lang="stylus" scoped>
.radio__input
    -ms-transform scale(1.7)
    -webkit-transform scale(1.7)
    transform scale(1.7)
    margin-right 10px
    accent-color var(--azul-meio)
.formulario-salvar
    display flex
    flex-direction column
    gap 15px
    width 94%
.campo
    display flex
    flex-direction column
.rodape
    display flex
    flex-direction row
.radio
    display flex
    flex-direction row
    align-items baseline
    gap 10px
    font-size 0.87rem
    font-font-family 'Gilroy SemiBold'
    color var(--azul-label)
.botao
    display flex
    flex-direction column
    align-items flex-end
    flex 1
@media screen and (max-width: 992px)
    .radio
        align-items flex-start
        flex-flow column wrap
</style>