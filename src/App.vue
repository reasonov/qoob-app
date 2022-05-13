<template>

  <header class="main-header" v-if="pageName !== 'Home'">
    <div class="header__wrapper">
      <button class="header__redo" @click="goBack">
        <img class="redo-image" src="./assets/img/arrow-left.svg" alt="">
      </button>

      <h2 class="header__title">{{ pageName }}</h2>
    </div>
  </header>

  <router-view></router-view>

</template>

<script>
import router from "@/router";
import { computed } from "vue";

export default {
  name: 'App',
  setup() {

    const pageName = computed(() => {
      return router.currentRoute.value.name;
    })

    function goBack() {
      router.go(-1);
    }

    return { pageName, goBack }

  }
}
</script>

<style src="./assets/fonts/stylesheet.css"></style>
<style src="./assets/index.css"></style>

<style scoped>
.main-header {
  background-color: #F6F9FC;
}

.header__wrapper {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 375px;
  height: 45px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
}

.header__redo {
  position: absolute;
  top: 50%;
  left: 20px;

  width: 24px;
  height: 24px;

  transform: translateY(-50%);
}

.header__title {
  font-size: 17px;
  font-weight: 500;
}



</style>
