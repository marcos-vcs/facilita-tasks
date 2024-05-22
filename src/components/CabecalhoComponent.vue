<script>
import AvatarComponent from './AvatarComponent.vue';

export default {
    name: 'CabecalhoComponent',
    components: {
        AvatarComponent,
    },
}
</script>

<template>
    <header class="barra-superior">
        <avatar-component class="avatar" nome="Eduardo Pereira da Costa" cargo="Front-end Developer"
            foto="/images/foto-perfil.png" />
    </header>
</template>

<style lang="stylus" scoped>
.barra-superior
  float right
  display flex
  justify-content flex-end
  padding 7px 30px 7px 5px
  box-shadow 0px 1px 6px rgba(40, 56, 72, 0.1)
</style>