<script>
export default {
    name: 'AvatarComponent',
    props: {
        nome: {
            type: String,
            required: true
        },
        cargo: {
            type: String,
            required: true
        },
        foto: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="avatar-container">
            <img :src="foto" alt="Foto de perfil do usuário logado." class="avatar">
        </div>
        <div class="informacoes-container">
            <p class="nome">{{ nome }}</p>
            <p class="cargo">{{ cargo }}</p>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.avatar-container
    display flex
    justify-content center
    align-items center
    width 55px
    height 55px
    overflow hidden
    border-radius 50%
.avatar
    width 100%
    height 100%
    border-radius 50%
    object-fit cover
.container
    width auto
    display flex
    gap 5px
    flex-wrap row wrap
    font-family 'Gilroy SemiBold'
.informacoes-container
    display flex
    flex-direction column
    justify-content center
.nome
    margin 0
    font-size 0.93rem;
    color var(--azul-escuro)
.cargo
    margin 0
    font-size 0.75rem;
    color var(--azul-medio)
</style>