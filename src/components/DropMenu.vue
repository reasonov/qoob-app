<template>
  <div>
    <p class="drop__title">{{ title }}</p>

    <div class="drop-menu">

      <div class="drop__block" @click="toggleMenu">
        <p class="drop__text" v-if="!selectedItem">Выберите</p>
        <p class="drop__text" v-else>{{ selectedItem }}</p>
        <img :class="['drop__arrow', {'arrow--active': menuState}]" src="../assets/img/arrow-right.svg" alt="">
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

.drop__text {
  opacity: 0.6;
  font-size: 14px;
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
  padding: 15px;
  padding-top: 0;

  box-sizing: border-box;
  border-radius: 0 0 6px 6px;

  background-color: #F6F9FC;
}

.drop__item {
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #e2e2e2;

  text-align: left;
}

.dropAm-enter-active, .dropAm-leave-active {
  transition: .3s all ease;
}

.dropAm-enter-from, .dropAm-leave-to {
  top: 0;
  opacity: 0;
}
</style>