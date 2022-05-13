<template>
  <div class="record">
    <div class="wrapper">
      <div class="record__header">
        <button class="header__button header__button1">
          Текущие
        </button>

        <router-link
            class="header__button header__button2"
            to="/history"
        >
          Прошедшие
        </router-link>
      </div>

      <div class="search" v-if="recordList.length === 0">
        <div class="icon-wrapper">
          <img class="search__icon" src="../assets/img/record-search.svg" alt="">
        </div>

        <p class="search__title">Увы, ничего не запланировано</p>
        <p class="search__subtitle">У вас нет ниодной активной записи</p>
      </div>

      <div class="record__main" v-else>
        <p class="record__date">Сегодня</p>
        <ul class="record__list">
          <li class="record__item" v-for="(record, index) in recordList" :key="index">
            <router-link class="record__link" :to="'/record/' + index">
              <div class="item__wrapper">
                <img :src="require('../assets/img/' + record.worker.image + '.png')" alt="" class="record__avatar">
                <div class="record__text">
                  <p class="record__name">{{ record.serviceName }}</p>
                  <p class="record__time">{{ record.time }}</p>
                </div>
              </div>
              <div class="item__wrapper">
                <p class="record__price">{{ fullPrice(index) }} ₽</p>
                <img src="../assets/img/arrow-right.svg" alt="" class="record__arrow">
              </div>
            </router-link>
          </li>
        </ul>

        <p class="record__date">21:10:2022</p>
        <ul class="record__list">
          <li class="record__item">
            <router-link class="record__link" to="/record/3">
              <div class="item__wrapper">
                <img src="../assets/img/avatar.png" alt="" class="record__avatar">
                <div class="record__text">
                  <p class="record__name">Массаж</p>
                </div>
              </div>
              <div class="item__wrapper">
                <p class="record__price">2 500 ₽</p>
                <img src="../assets/img/arrow-right.svg" alt="" class="record__arrow">
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "Record",
  setup() {

    const store = useStore();

    const recordList = store.state.recordList;

    function fullPrice(index) {

      let price = 0;

      recordList[index].serviceList.forEach((item) => {
        price += item.price;
      })

      return price
    }

    return { recordList, fullPrice }

  }
}
</script>

<style scoped>

.record {
  min-height: 100vh;
  background-color: #F0F3F8;
}

.record__avatar {
  width: 32px;
  height: 32px;
}

.record__header {
  display: flex;

  width: 100%;
}

.header__button {
  width: 50%;
  height: 45px;

  opacity: 0.6;

  font-size: 14px;

  background-color: #fff;
}

.header__button1 {
  border-radius: 6px 0 0 6px;
  opacity: 1;
  background-color: #FFC549;
}

.header__button2 {
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0 6px 6px 0;
}

.search {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 96px;
  height: 96px;
  margin-bottom: 25px;

  border-radius: 50%;

  background-color: #F6F9FC;
}

.search__icon {
  opacity: 0.4;
}

.search__title {
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}

.search__subtitle {
  font-size: 12px;
  line-height: 24px;
  color: #A1A2A2;
}

.record__main {
  margin-top: 15px;
}

.record__date {
  font-size: 10px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #6D6D6D;
}

.record__list {
  margin-bottom: 15px;
}

.record__link {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  padding-left: 12px;
  padding-right: 15px;
  margin-bottom: 10px;

  border-radius: 6px;

  background-color: #fff;
}

.item__wrapper {
  display: flex;
  align-items: center;
}

.record__text {
  margin-left: 15px;
}

.record__name {
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
}

.record__time {
  margin-top: 5px;

  font-size: 11px;
  line-height: 10px;
}

.record__price {
  padding: 0 12px;
  margin-right: 15px;
  border-radius: 31px;

  font-size: 12px;
  line-height: 24px;

  background-color: #F0F3F8;
}
</style>