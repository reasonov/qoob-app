<template>
  <a href="#" class="nav__link">
    <img :src="require('../assets/img/' + item.image + '.svg')" alt="">
    <p class="link__text">{{ item.text }}</p>
  </a>
</template>

<script>
export default {
  name: "NavItemSquare",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>