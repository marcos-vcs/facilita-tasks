<script>
import ChipsComponent from './ChipsComponent.vue';
import CheckboxComponent from './CheckboxComponent.vue'
import MenuComponent from './MenuComponent.vue';

export default {
    name: 'TarefaComponent',
    emits: ['ehFinalizadoMudou'],
    components: {
        ChipsComponent,
        CheckboxComponent,
        MenuComponent
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
            ]
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
                <menu-component :opcoes-menu="opcoesMenu">
                    <template v-slot:menu-icon>
                        <i class="fa-solid fa-ellipsis-vertical icone-menu"></i>
                    </template>
                </menu-component>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
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
    padding 0 8px
.icone-menu
    font-size 17px
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
    font-size 15px
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