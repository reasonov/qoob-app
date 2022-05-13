<template>
  <div class="record-item">
    <div class="wrapper">
      <div class="record__info white-block">
        <div class="record__header">
          <div class="header__wrapper">
            <img src="../assets/img/avatar.png" alt="" class="record__avatar">
            <div class="header__text">
              <p class="header__name">Роман Ильин</p>
              <p class="header__subtitle">LUX LASH / Маркса 21</p>
            </div>
          </div>
          <div class="header__date">
            <p class="date__item1">12.10.2022</p>
            <p class="date__item">12:10</p>
          </div>
        </div>

        <div class="list__caption">
          <p class="cation__item">Услуга</p>
          <p class="cation__item">Стомость</p>
        </div>

        <ul class="info__list">
          <li class="info__item" v-for="(service, index) in recordList.serviceList" :key="index">
            <p class="info__service">{{ service.name }}</p>
            <p class="info__price">{{ service.price }} ₽</p>
          </li>
        </ul>
      </div>

      <div class="record__submit" @click="submitState = !submitState">
        <div class="submit__text">
          <p class="submit__title">Я точно приду</p>
          <p class="submit__subtitle">Нажимая, вы подтверждаете свой визит</p>
        </div>

        <custom-checkbox-main :state="submitState" />

      </div>

      <div class="change">
        <p class="change__title">Изменения</p>

        <router-link class="white-item" to="/record" @click="deleteRecord">
          <div class="change__left">
            <img class="delete-img" src="../assets/img/delete-circle.svg" alt="">
            <p class="item__text">Удалить запись</p>
          </div>
          <img src="../assets/img/arrow-right.svg" alt="">
        </router-link>

        <router-link class="white-item" to="/select-date" @click="editRecord">
          <div class="change__left">
            <img src="../assets/img/edit-circle.svg" alt="">
            <p class="item__text">Редактировать запись</p>
          </div>
          <img src="../assets/img/arrow-right.svg" alt="">
        </router-link>

      </div>

      <div class="payment">
        <p class="payment__title">Оплата</p>
        <div class="white-item">
          <div class="payment__wrapper">
            <img src="../assets/img/payment-circle.svg" alt="">
            <p class="item__text">Оплатить запись</p>
          </div>
          <div class="payment__wrapper">
            <p class="payment__price circle-number">{{ fullPrice }} ₽</p>
            <img src="../assets/img/arrow-right.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customCheckboxMain from "@/components/CustomCheckboxMain";
import { ref, computed } from "vue";
import {useStore} from "vuex";

export default {
  name: "RecordItem",
  components: {
    customCheckboxMain
  },
  props: {
    id: {
      type: String
    }
  },
  setup(props) {

    const store = useStore();

    const recordList = store.state.recordList[props.id];

    const submitState = ref(false);

    const fullPrice = computed(() => {

      let price = 0;
      recordList.serviceList.forEach((item) => {
        price += item.price;
      })

      return price
    })

    function editRecord() {
      deleteRecord();
      store.commit('updateAppointment', {
        name: recordList.worker.name,
        id: props.id,
        date: recordList.date,
        time: recordList.time,
        service: recordList.serviceList,
        price: fullPrice.value
      })
    }

    function deleteRecord() {
      store.commit('deleteRecord', props.id)
    }

    return { submitState, recordList, editRecord, fullPrice, deleteRecord }

  }
}
</script>

<style scoped>

.record-item {
  min-height: 100vh;
  background-color: #F0F3F8;
}

.record__info {
  padding-bottom: 12px;
}

.record__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 20px;
  border-bottom: 1px solid #e2e2e2;
}

.header__wrapper {
  display: flex;
  align-items: center;
}

.header__text {
  margin-left: 15px;
}

.header__name {
  margin-bottom: 5px;

  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
}

.header__subtitle {
  font-size: 11px;
  line-height: 11px;
}

.header__date {
  font-size: 11px;
  line-height: 11px;
  text-align: right;
}

.date__item1 {
  margin-bottom: 5px;
}

.list__caption {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;

  opacity: 0.4;

  font-size: 11px;
  line-height: 11px;
}

.info__item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
}

.info__item:not(:last-child) {
  padding-bottom: 13px;
  margin-bottom: 13px;
  border-bottom: 1px solid #e2e2e2;
}

.info__service {
  margin-right: 10px;
}

.info__price {
  min-width: 50px;
}

.record__submit {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 15px;

  border-radius: 6px;
  cursor: pointer;

  background-color: #fff;
}

.submit__title {
  margin-bottom: 5px;

  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
}

.submit__subtitle {
  opacity: 0.6;

  font-size: 11px;
  line-height: 11px;
}

.change__title {
  margin-left: 10px;

  font-size: 10px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #6D6D6D;
}

.change__left {
  display: flex;
  align-items: center;
}

.delete-img {
  width: 28px;
  height: 28px;
}

.item__text {
  margin-left: 15px;

  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
}

.payment {
  margin-top: 15px;
}

.payment__title {
  margin-left: 10px;

  font-size: 10px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #6D6D6D;
}

.payment__wrapper {
  display: flex;
  align-items: center;
}

.payment__price {
  margin-right: 15px;

  background-color: #F0F3F8;
}
</style>