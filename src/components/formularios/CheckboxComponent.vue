<script>
export default {
  name: 'CheckboxComponent',
  emits: ['checked'],
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: this.value
    };
  },
  watch: {
    value(newVal) {
      this.checked = newVal;
    }
  },
  methods: {
    emitChange() {
      this.$emit('checked', this.checked);
    }
  }
};
</script>

<template>
  <label class="custom-checkbox">
    <input type="checkbox" v-model="checked" @change="emitChange">
    <span class="checkmark"></span>
  </label>
</template>

<style lang="stylus" scoped>
  .custom-checkbox
    display inline-block
    position relative
    padding-left 30px
    cursor pointer
    font-size 1.37rem
    user-select none
  
    input
      display none
      position absolute
      opacity 0
      cursor pointer
  
    .checkmark
      position absolute
      top -22px
      left 0
      height 32px
      width 32px
      background-color var(--cor-fundo-checkbox)
      border-radius 4px
  
    input:checked ~ .checkmark
      background-color var(--cor-botao-flutuante)
  
    .checkmark:after
      content ""
      position absolute
      display none
  
    input:checked ~ .checkmark:after
      display block
  
    .checkmark:after
      left 12px
      top 6px
      width 6px
      height 14px
      border solid white
      border-width 0 2px 2px 0
      transform rotate(45deg)
  </style>