export default {
  beforeMount(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // Verifica se o clique foi fora do elemento
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
}
