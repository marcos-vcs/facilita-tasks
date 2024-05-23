<script>
import ChipsComponent from './ChipsComponent.vue';
import CheckboxComponent from './CheckboxComponent.vue'

export default {
    name: 'TarefaComponent',
    components: {
        ChipsComponent,
        CheckboxComponent
    },
    props: {
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
    }
}
</script>

<template>
    <div class="tarefa">
        <checkbox-component />
        <h4 class="tarefa__titulo">{{ titulo }}</h4>
        <div class="tarefa__categoria" v-if="categoria">
            <chips-component :texto="categoria" />
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.ehFinalizada
    width 32px
.tarefa__titulo
    font-size 15px
    font-family 'Gilroy SemiBold'
    color var(--cor-titulo-tarefa)
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