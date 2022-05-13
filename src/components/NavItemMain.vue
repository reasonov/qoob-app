<template>
  <a href="#" class="nav__link">
    <div class="content-wrapper">
      <img class="link__image" :src="require('../assets/img/' + item.image + '.svg')" alt="">
      <p class="link__text">{{ item.text }}</p>
    </div>
    <div class="content-wrapper">
      <span class="circle-number" v-if="item.text !== 'Отзывы' && item.text !== 'О компании' && item.text !== 'Язык'">2</span>
      <span class="circle-comments" v-else-if="item.text === 'Отзывы'">124</span>
      <span class="language" v-else-if="item.text === 'Язык'">Русский</span>
      <img src="../assets/img/arrow-right.svg" alt="">
    </div>
  </a>
</template>

<script>
export default {
  name: "NavItemMain",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.nav__link {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 45px;
  padding: 0 15px;

  border-bottom: 1px solid #F0F3F8;
}

.content-wrapper {
  display: flex;
  align-items: center;
}

.link__image {
  opacity: 0.4;
}

.link__text {
  margin-left: 15px;

  font-size: 14px;
  font-weight: 500;
}

.circle-number {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
  margin-right: 15px;

  border-radius: 50%;

  font-size: 12px;

  background-color: #FED47A;
}

.circle-comments {
  padding: 0 6px;
  margin-right: 15px;

  border-radius: 31px;

  font-size: 12px;
  line-height: 24px;

  background-color: #F0F3F8;
}

.language {
  margin-right: 15px;

  font-size: 12px;
  color: #328FE4;
}
</style>