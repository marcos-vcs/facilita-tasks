<script>
export default {
    name: 'MenuComponent',
    emits: ['clicou'],
    props: {
        opcoesMenu: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            menuAberto: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuAberto = !this.menuAberto;
        },
        fecharMenu() {
            this.menuAberto = false;
        },
        clicou(opcao) {
            this.$emit('clicou', opcao);
            this.fecharMenu();
        }
    }
};
</script>

<template>
    <div class="menu-container" v-click-outside="fecharMenu">
        <div class="menu-trigger" @click="toggleMenu">
            <slot name="menu-icon"></slot>
        </div>
        <ul class="itens-menu" v-if="menuAberto">
            <li class="itens-menu__item" v-for="(opcao, key) in opcoesMenu" :key="key" @click="clicou(opcao)">
                <div class="bolinha" :style="{ 'background-color': opcao.cor }"></div>
                <div>{{ opcao.texto }}</div>
            </li>
        </ul>
    </div>
</template>

<style lang="stylus" scoped>
.menu-container
    position relative
    display inline-block
.menu-trigger
    cursor pointer
.itens-menu
    animation: scale-in-fade 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
    font-size 0.87rem
    font-family 'Gilroy SemiBold'
    color var(--azul-label)
    position absolute
    top 100%
    right 0%
    border-radius 5px
    background-color var(--branco)
    box-shadow 0px 1px 6px rgba(40, 56, 72, 0.1)
    padding 0
    margin 0
    list-style none

.itens-menu__item
    display flex
    align-items center
    padding 10px 22px 10px 16px
    cursor pointer

.itens-menu__item:hover
    background-color var(--branco-fundo-submenu)

.bolinha
    width 9px
    height 9px
    border-radius 50%
    margin-right 8px
</style>