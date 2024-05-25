<script>
import AvatarComponent from './AvatarComponent.vue';

export default {
    name: 'CabecalhoComponent',
    components: {
        AvatarComponent,
    },
    methods: {
        abrirMenuResponsivo() {
            this.$store.commit('ATUALIZA_VISIBILIDADE_MENU_RESPONSIVO', true);
        }
    }
}
</script>

<template>
    <header class="barra-superior">
        <div @click="abrirMenuResponsivo" class="menu"><i class="fa-solid fa-bars"></i></div>
        <avatar-component class="avatar" nome="Eduardo Pereira da Costa" cargo="Front-end Developer"
            foto="/images/foto-perfil.png" />
    </header>
</template>

<style lang="stylus" scoped>
.barra-superior
    display flex
    flex-direction row
    padding 7px 30px 7px 5px
    box-shadow 0px 1px 6px rgba(40, 56, 72, 0.1)
.menu
    display flex
    flex-direction row
    justify-content flex-start
    font-size 20px
    color var(--azul-label)
    margin-left 20px
    cursor pointer
.menu i
    display none
.avatar
    display flex
    flex-direction row
    flex 1
    justify-content flex-end

@media screen and (max-width: 992px)
    .menu i
        display block
</style>