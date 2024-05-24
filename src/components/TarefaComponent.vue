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
                { texto: 'Editar', cor: '#5ECDA5' },
                { texto: 'Excluir', cor: '#D6E6EF' },
            ]
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
        <checkbox-component :value="ehFinalizado" @checked="checkbox" />
        <h4 class="tarefa__titulo trunca-texto" :titulo="titulo" :class="ehFinalizado ? 'tarefa__titulo-checked' : ''">
            {{ titulo }}
        </h4>
        <div class="tarefa__categoria" v-if="categoria">
            <chips-component :texto="categoria" />
        </div>
        <div>
            <menu-component :opcoes-menu="opcoesMenu" />
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.trunca-texto
    display inline-block
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    max-width 70%
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
    gap 10px
</style>