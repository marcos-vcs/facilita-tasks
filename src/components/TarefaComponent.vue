<script>
import ChipsComponent from './ChipsComponent.vue';
import CheckboxComponent from './CheckboxComponent.vue'
import MenuComponent from './MenuComponent.vue';
import ModalConfirmacaoComponent from './ModalConfirmacaoComponent.vue';

export default {
    name: 'TarefaComponent',
    emits: ['ehFinalizadoMudou'],
    components: {
        ChipsComponent,
        CheckboxComponent,
        MenuComponent,
        ModalConfirmacaoComponent,
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
        },
        ehFinalizado: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            opcoesMenu: [
                { texto: 'Editar', cor: 'var(--verde)' },
                { texto: 'Excluir', cor: 'var(--cor-fundo-checkbox)' },
            ],
            estadoModalExclusao: false,
        }
    },
    computed: {
        corCategoria() {
            switch (this.categoria) {
                case 'urgente':
                    return 'var(--vermelho)';
                case 'importante':
                    return 'var(--amarelo)';
                default:
                    return undefined
            }
        }
    },
    methods: {
        checkbox(valor) {
            this.$emit('ehFinalizadoMudou', this.id, valor);
        },
        opcaoMenuClicada(opcao) {
            switch (opcao.texto) {
                case 'Editar':
                    break;
                case 'Excluir':
                    this.estadoModalExclusao = true;
                    break;
            }
        },
        excluirTarefa(opcao) {
            if (opcao === false) {
                this.estadoModalExclusao = false;
                return;
            }

            this.$store.commit('tarefa/EXCLUIR', this.id);

            this.estadoModalExclusao = false;
        }
    }
}
</script>

<template>
    <div class="tarefa">
        <div class="titulo-e-checkbox">
            <div>
                <checkbox-component :value="ehFinalizado" @checked="checkbox" />
            </div>
            <h4 class="tarefa__titulo trunca-texto" :titulo="titulo"
                :class="ehFinalizado ? 'tarefa__titulo-checked' : ''">
                {{ titulo }}
            </h4>
        </div>
        <div class="categoria-e-menu">
            <div class="tarefa__categoria" v-if="categoria">
                <chips-component :texto="categoria" :cor-fundo="corCategoria" />
            </div>
            <div>
                <menu-component @clicou="opcaoMenuClicada" :opcoes-menu="opcoesMenu">
                    <template v-slot:menu-icon>
                        <i class="fa-solid fa-ellipsis-vertical icone-menu"></i>
                    </template>
                </menu-component>
            </div>
        </div>
    </div>

    <modal-confirmacao-component @botao-clicado="excluirTarefa" :visivel="estadoModalExclusao">
        <template v-slot:titulo>
            <div class="titulo-modal-confirmacao">
                <img src="/images/icone-lixeira.png" alt="Ícone de lixeira.">
                <p>Tem certeza que deseja <span>excluir</span> esta tarefa?</p>
            </div>

        </template>
        <template v-slot:descricao>
            <p>
                Esta ação não poderá ser desfeita.
            </p>
        </template>
    </modal-confirmacao-component>
</template>

<style lang="stylus" scoped>
.titulo-modal-confirmacao
  display flex
  flex-direction column
  align-items center
  padding 40px 0px 30px 0px
  font-size 1.25rem
  font-family 'Gilroy Bold'
  color var(--azul-escuro)
.titulo-modal-confirmacao p
  margin 10px 0px 0px 0px
.titulo-modal-confirmacao span
  color var(--vermelho)

.titulo-e-checkbox, .categoria-e-menu
    display flex
    flex-direction row
    align-items center
    gap 10px
.titulo-e-checkbox
    width 75%
    justify-content flex-start
    gap 10px
.categoria-e-menu
    justify-content flex-end
    flex 1
    gap 23px
    padding 0 8px
.icone-menu
    font-size 1.06rem
    color: var(--azul-label)
.trunca-texto
    display inline-block
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    max-width 90%
.ehFinalizada
    width 32px
.tarefa__titulo
    font-size 0.93rem
    font-family 'Gilroy SemiBold'
    color var(--cor-titulo-tarefa)
.tarefa__titulo-checked
  text-decoration line-through
  color var(--cor-titulo-tarefa-desabilitado)
.tarefa
    box-shadow 0px 1px 6px rgba(40, 56, 72, 0.1)
    border-radius 5px
    padding 16px 14px 16px 14px
    margin 7px 0px 7px 0px
    background-color var(--branco)
    display flex
    flex-flow row wrap
    justify-content flex-start
    align-items center
</style>