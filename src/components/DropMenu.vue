<template>
  <div>
    <p class="drop__title">{{ title }}</p>

    <div class="drop-menu">

      <div :class="['drop__block', {'drop__block--active': menuState}]" @click="toggleMenu">
        <p class="drop__text" v-if="!selectedItem">Выберите</p>
        <p class="drop__text" v-else>{{ selectedItem }}</p>

        <div class="drop__right">
          <span class="drop__line"></span>

          <img :class="['drop__arrow', {'arrow--active': menuState}]" src="../assets/img/arrow-right.svg" alt="">
        </div>
      </div>

      <transition name="dropAm">
        <ul class="drop__list" v-show="menuState">
          <li v-for="(item, index) in list" :key="index">
            <button class="drop__item" @click="selectItem(item)">{{ item }}</button>
          </li>
        </ul>
      </transition>

    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "DropMenu",
  props: {
    title: {
      type: String
    },
    list: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {

    const menuState = ref(false);

    function toggleMenu() {
      menuState.value = !menuState.value;
    }

    const selectedItem = ref('');

    function selectItem(item) {
      selectedItem.value = item;
      emit('selectItem', selectedItem.value);
      toggleMenu();
    }

    return { selectItem, menuState, toggleMenu, selectedItem }
  }
}
</script>

<style scoped>
.drop__title {
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #6D6D6D;
}

.drop-menu {
  position: relative;
}

.drop__block {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;
  padding: 0 15px;

  box-sizing: border-box;
  border-radius: 6px;

  background-color: #F6F9FC;
}

.drop__block--active {
  border-radius: 6px 6px 0 0;
}

.drop__text {
  font-size: 14px;
}

.drop__right {
  display: flex;
  align-items: center;
}

.drop__line {
  width: 1px;
  height: 24px;
  margin-right: 15px;
  opacity: 0.1;

  background-color: #000000;
}

.drop__arrow {
  transition: .3s all ease;
  transform: rotateZ(90deg);
}

.arrow--active {
  transform: rotateZ(-90deg);
}

.drop__list {
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 160px;
  padding: 15px;
  padding-top: 0;

  box-sizing: border-box;
  border-radius: 0 0 6px 6px;
  overflow-y: scroll;

  background-color: #F6F9FC;
}

.drop__item {
  width: 100%;
  height: 48px;

  text-align: left;
}

.dropAm-enter-active {
  animation: .3s dropKeys ease reverse;
}

.dropAm-leave-active {
  animation: .3s dropKeys ease;
}

@keyframes dropKeys {
  0% {
    height: 160px;
    padding-bottom: 15px;
    padding-top: 15px;
  }
  100% {
    height: 0;
    padding-bottom: 0;
    padding-top: 0;
  }
}
</style>