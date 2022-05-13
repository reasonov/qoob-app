<template>
  <div class="ordering">
    <div class="wrapper">
      <p class="ordering__title title--small">Информация о записи</p>
      <ul class="block__list">
        <li class="block__item">
          <img src="../assets/img/appointment-emoji1.svg" alt="">
          <div class="item__wrapper">
            <p class="item__name">Сотрудник</p>
            <p class="item__selected circle-number">{{ store.state.appointmentData.name }}</p>
          </div>
        </li>

        <li class="block__item">
          <img class="emoji" src="../assets/img/appointment-emoji2.svg" alt="">
          <div class="item__wrapper">
            <p class="item__name">Дата и Время</p>
            <p class="item__selected circle-number">{{ store.state.appointmentData.date }}</p>
          </div>
        </li>

        <li class="block__item">
          <img class="emoji" src="../assets/img/appointment-emoji3.svg" alt="">
          <div class="item__wrapper item__wrapper--last">
            <p class="item__name">Услуги</p>
            <p class="item__selected circle-number">{{ store.state.appointmentData.price }} ₽</p>
          </div>
        </li>

      </ul>

      <p class="ordering__title title--small">Профиль клиента</p>
      <router-link class="white-item" to="/profile">
        <div class="item__left">
          <img class="emoji" src="../assets/img/user.svg" alt="">
          <p class="ordering__item-title item__title">Мария Шарапова</p>
        </div>
        <img src="../assets/img/arrow-right.svg" alt="">
      </router-link>

      <p class="ordering__title title--small">Напоминание о визите</p>
      <div class="notification-block white-item" @click="setNotification = true">
        <div class="item__left">
          <img class="emoji" src="../assets/img/clock.svg" alt="">
          <p class="ordering__item-title item__title">Напомнить за</p>
        </div>
        <div class="item__right">
          <p class="clock-number circle-number">{{ notificationList[selectedNotification] }} часа</p>
          <img src="../assets/img/arrow-right.svg" alt="">
        </div>
      </div>

      <p class="ordering__title title--small">Комментарий к записи</p>
      <textarea class="comment"></textarea>

      <div class="agreement-block" @click="agreementState.first = !agreementState.first">
        <p class="agreement__title">Правовая информация</p>
        <custom-checkbox-main :state="agreementState.first" />
      </div>

      <div class="agreement-block" @click="agreementState.second = !agreementState.second">
        <p class="agreement__title">Персональные данные</p>
        <custom-checkbox-main :state="agreementState.second" />
      </div>

      <p class="agreement-text">Нажимая копку записаться вы принимаете условия соглашения</p>
    </div>

    <modal-bottom class="modal" v-if="!orderState">
      <button class="modal__button" @click="createOrder">Записаться</button>
    </modal-bottom>

    <div class="modal-wrapper">

      <div class="modal__background" v-if="orderState"></div>

      <modal-bottom class="modal--end" :state="orderState">
        <p class="modal__text1">Поздравляем!</p>
        <p class="modal__text2">Запись успешно создана!</p>
        <router-link class="modal__button modal__link" to="/record">Мои записи</router-link>
      </modal-bottom>
    </div>

    <transition name="modalAm">
      <div class="modal-wrapper" v-if="setNotification">

        <div class="modal__background" @click="setNotification = false"></div>

        <div class="modal--notification">
          <p class="notification__title">Напоминание</p>

          <ul class="notification__list">
            <li
                :class="['notification__item', {'selected-notification': selectedNotification === index}]"
                v-for="(item, index) in notificationList"
                :key="item"
                @click="selectNotification(index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import customCheckboxMain from "@/components/CustomCheckboxMain";
import ModalBottom from "@/components/ModalBottom";
import {ref, reactive} from "vue";
import {useStore} from "vuex";

export default {
  name: "Ordering",
  components: {
    customCheckboxMain,
    ModalBottom
  },
  setup() {

    const store = useStore();

    const setNotification = ref(false);
    const notificationList = ['1', '2', '3', '5', '8', '10', '12', '24'];
    const selectedNotification = ref(1);

    const agreementState = reactive({first: false, second: false});

    const orderState = ref(false);

    function selectNotification(index) {
      selectedNotification.value = index;
      setNotification.value = false;
    }

    function createOrder() {
      orderState.value = true;

      store.commit('createRecord');
    }

    return {
      store,
      setNotification,
      notificationList,
      selectedNotification,
      agreementState,
      orderState,
      selectNotification,
      createOrder
    }

  }
}
</script>

<style scoped>

.ordering {
  min-height: 100vh;
  padding-bottom: 100px;
  background-color: #F0F3F8;
}

.ordering__title {
  margin-left: 15px;
}

.block__list {
  margin-bottom: 20px;
  border-radius: 12px;
  background-color: #fff;
}

.block__item {
  display: flex;
  align-items: center;
  height: 40px;

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

.emoji {
  opacity: 0.5;
}

.item__selected {
  padding: 0 12px;
  margin-right: 5px;

  background-color: #F0F3F8;
}

.red {
  color: #EB5757;
}

.item__left {
  display: flex;
  align-items: center;
}

.white-item {
  margin-bottom: 20px;
}

.item__title {
  margin-left: 15px;
}

.ordering__item-title {
  margin-bottom: 0;
}

.item__right {
  display: flex;
  align-items: center;
}

.clock-number {
  padding: 0 12px;
  margin-right: 15px;

  background-color: #F0F3F8;
}

.comment {
  width: 100%;
  height: 110px;
  padding: 15px;

  box-sizing: border-box;
  resize: none;

  border-radius: 12px;

  background-color: #fff;
}

.notification-block {
  cursor: pointer;
}

.agreement-block {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  margin: 0 15px;

  border-bottom: 1px solid #dbdee3;
  cursor: pointer;
}

.agreement__title {
  font-size: 14px;
}

.agreement-text {
  margin: 15px;

  font-size: 11px;
  line-height: 11px;
  color: #A1A2A2;
}

.modal {
  padding: 25px;
  box-sizing: border-box;
}

.modal__button {
  width: 100%;
  height: 50px;
  border-radius: 12px;

  font-size: 16px;

  background-color: #FFC549;
}

.modal__link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal--end {
  padding: 35px 25px;

  text-align: center;
}

.modal__text1 {
  margin-bottom: 20px;

  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
}

.modal__text2 {
  margin-bottom: 30px;

  font-size: 14px;
  line-height: 17px;
}

.notification__title {
  margin-bottom: 25px;

  font-size: 16px;
  font-weight: 500;
  text-align: center;
}

.notification__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  margin-bottom: 25px;
}

.notification__item {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  border-radius: 6px;
  cursor: pointer;

  background-color: #F0F3F8;
}

.selected-notification {
  background-color: #FFC549;
}

.modal--notification {
  position: fixed;
  top: 50%;
  left: 50%;

  width: 100%;
  max-width: 375px;
  padding: 25px;

  border-radius: 24px;
  box-sizing: border-box;
  transform: translateX(-50%) translateY(-50%);

  background-color: #fff;
}

.modalAm-enter-active, .modalAm-leave-active {
  transition: .3s all ease;
}

.modalAm-enter-from, .modalAm-leave-to {
  opacity: 0;
}
</style>