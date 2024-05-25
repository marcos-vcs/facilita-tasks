<script>
import BotaoComponent from '@/components/botoes/BotaoComponent.vue';

export default {
    name: 'ConfiguracoesView',
    components: {
        BotaoComponent,
    },
    methods: {
        sair() {
            this.$store.commit('ATUALIZAR_MENU_SELECIONADO', 'dashboard')
            this.$router.push('/');
        }
    }
}
</script>

<template>
    <div class="container">
        <botao-component @click-botao="sair" class="fechar-btn" cor-fundo="var(--vermelho)">Sair</botao-component>
    </div>
</template>

<style lang="stylus" scoped>
.fechar-btn
    margin 20px auto 0px auto
</style>