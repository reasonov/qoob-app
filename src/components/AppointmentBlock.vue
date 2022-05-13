<template>
  <div class="block">
    <ul class="block__list">

      <li>
        <router-link class="block__item" to="/select-worker">
          <img src="../assets/img/appointment-emoji1.svg" alt="">
          <div class="item__wrapper">
            <p class="item__name">Сотрудник</p>
            <div class="item__right">
              <p class="item__selected circle-number" v-if="store.state.appointmentData.name">{{ store.state.appointmentData.name }}</p>
              <img src="../assets/img/arrow-right.svg" alt="">
            </div>
          </div>
        </router-link>
      </li>

      <li>
        <router-link class="block__item" to="/select-date">
          <img class="emoji" src="../assets/img/appointment-emoji2.svg" alt="">
          <div class="item__wrapper">
            <p class="item__name">Дата и Время</p>
            <div class="item__right">
              <p class="item__selected circle-number" v-if="store.state.appointmentData.date">{{ store.state.appointmentData.date }} {{ store.state.appointmentData.time }}</p>
              <img src="../assets/img/arrow-right.svg" alt="">
            </div>
          </div>
        </router-link>
      </li>

      <li>
        <router-link class="block__item" to="/select-service">
          <img class="emoji" src="../assets/img/appointment-emoji3.svg" alt="">
          <div class="item__wrapper item__wrapper--last">
            <p class="item__name">Услуги</p>
            <div class="item__right">
              <p class="item__selected circle-number" v-if="store.state.appointmentData.price">{{ store.state.appointmentData.price }} ₽</p>
              <img src="../assets/img/arrow-right.svg" alt="">
            </div>
          </div>
        </router-link>
      </li>

    </ul>

    <router-link class="block__link" :to="link">Продолжить запись</router-link>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "AppointmentBlock",
  props: {
    link: {
      type: String,
      required: true
    }
  },
  setup() {

    const store = useStore();

    return { store}

  }
}
</script>

<style scoped>
.block {
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 2;

  width: 100%;
  max-width: 375px;
  padding: 10px;

  box-shadow: 0px -1px 0px rgba(41, 45, 50, 0.1);
  box-sizing: border-box;
  border-radius: 8px 8px 0 0;
  transform: translateX(-50%);

  background-color: #F0F3F8;
}

.block__list {
  border-radius: 12px;
  background-color: #fff;
}

.block__item {
  display: flex;
  align-items: center;
  height: 46px;

  padding-left: 15px;
}

.item__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-right: 15px;
  margin-left: 10px;

  border-bottom: 1px solid #F0F3F8;
  box-sizing: border-box;
}

.item__wrapper--last {
  border-bottom: none;
}

.item__name {
  font-size: 15px;
  font-weight: 500;
}

.item__right {
  display: flex;
  align-items: center;
}

.emoji {
  opacity: 0.5;
}

.item__selected {
  padding: 0 12px;
  margin-right: 5px;

  background-color: #F0F3F8;
}

.block__link {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
  margin-top: 10px;

  border-radius: 12px;
  box-sizing: border-box;

  font-size: 15px;
  font-weight: 500;

  background-color: #FFC549;
}
</style>