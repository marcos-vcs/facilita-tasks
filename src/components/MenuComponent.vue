<script>
export default {
    name: 'MenuComponent',
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
        closeMenu() {
            this.menuAberto = false;
        }
    }
};
</script>

<template>
    <div class="menu-container" v-click-outside="closeMenu">
        <div class="menu-trigger" @click="toggleMenu">
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <ul class="itens-menu" v-if="menuAberto">
            <li class="itens-menu__item" v-for="(opcao, key) in opcoesMenu" :key="key">
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
.menu-trigger i
    font-size 17px
    color: var(--azul-label)
.itens-menu
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
  padding 10px 16px
  cursor pointer

.itens-menu__item:hover
  background-color #f5f5f5

.bolinha
  width 8px
  height 8px
  border-radius 50%
  margin-right 8px
</style>