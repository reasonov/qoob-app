<template>
  <div class="search">
    <img class="search__icon" src="../assets/img/search.svg" alt="">
    <input type="text" class="search__input" v-model="filter" placeholder="Поиск по услугам">
  </div>

  <div class="select-service">
    <div class="wrapper">
      <button class="list-toggle" @click="listState = !listState">
        Основные услуги
        <div class="list-toggle__right">
          <p class="list-length">{{ servicesList.length }}</p>
          <img :class="['list-toggle__icon', {'toggle--active': listState}]" src="../assets/img/arrow-right.svg" alt="">
        </div>
      </button>

      <transition name="listAm">
        <ul class="services__list" v-show="listState">

          <li :class="['services__item', {'item--active': service.state}]" v-for="(service, index) in filteredList" :key="index">
            <div :class="['item__wrapper', {'item--image': service.image}]">

              <div class="service__image" v-if="service.image"></div>

              <div class="item__header">
                <p class="item__title">{{ service.title }}</p>
                <p class="item__time">{{ service.time }}</p>
              </div>
              <div class="item__main">
                <button class="item__more" @click="moreState = index">Подробнее</button>
                <div class="main__right">
                  <p class="item__price">{{ service.price }} ₽</p>

                  <button :class="['item__add', {'add--active': service.state}]" @click="selectService(service)">
                  <span :class="['add__wrapper', {'add__wrapper--active': service.state}]">
                    <span :class="['add__line add__line1', {'line--active': service.state}]"></span>
                    <span :class="['add__line add__line2', {'line--active': service.state}]"></span>
                  </span>
                  </button>

                </div>
              </div>
            </div>
          </li>

        </ul>
      </transition>

      <div class="modal-more" v-if="moreState !== -1">
        <div class="more__header">
          <p class="more__caption">Об услуге</p>
          <p class="more__title">{{ filteredList[moreState].title }}</p>
          <p class="more__subtitle">Основные услуги</p>
          <button class="more__close" @click="moreState = -1">
            <img src="../assets/img/close-icon.svg" alt="">
          </button>
        </div>

        <p class="title--small">Об услуге</p>
        <p class="more__about">
          Вы в любой момент можете прервать сронизацию, нажав на кнопку отключить.
          При тключении синхронизации будет остановлен модуль RFM анализа, отправка
          уведомлений по всем каналам, запись через мобильное приложение qoob будет ограничена.
          Вы в любой момент можете прервать сронизацию, нажав на кнопку.
        </p>

        <div class="more__image"></div>
      </div>

    </div>

    <appointment-block link="/ordering" />

  </div>

</template>

<script>
import { ref, reactive, computed } from 'vue';
import { useStore } from "vuex";
import appointmentBlock from "@/components/AppointmentBlock";

export default {
  name: "SelectService",
  components: {
    appointmentBlock
  },
  setup() {

    const store = useStore();

    const servicesList = reactive([
      {
        title: 'Стрижка под одну насадку',
        time: '45 мин',
        price: 900,
        image: true,
        state: false
      },
      {
        title: 'Стрижка под ноль',
        time: '45 мин',
        price: 900,
        state: false
      },
      {
        title: 'Модельная стрижка',
        time: '45 мин',
        price: 900,
        image: true,
        state: false
      },
      {
        title: 'Женская стрижка',
        time: '45 мин',
        price: 900,
        state: false
      }
    ])

    const filter = ref('');

    const filteredList = computed(() => {
      return servicesList.filter(function(el) {
        return el.title.toLowerCase().indexOf(filter.value.toLowerCase()) > -1;
      })
    })

    const listState = ref(true);

    const price = ref(0);
    let arr = [];

    function selectService(item) {

      item.state = !item.state;
      class Service {
        constructor(name, price) {
          this.name = name;
          this.price = price;
        }
      }

      if(item.state) {
        price.value += item.price;
        arr.push(new Service(item.title, item.price));
      } else {
        if(arr.includes(item.title)) {
          const id = arr.indexOf(item.title);
          arr.splice(id, 1);
        }
      }

      store.commit('updateAppointment', {item: 'price', value: price.value});
      store.commit('updateAppointment', {item: 'service', value: arr});

    }

    const moreState = ref(-1);

    return { servicesList, filteredList, filter, listState, selectService, moreState }

  }
}
</script>

<style scoped>

.modal-more {
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 5;

  width: 100%;
  max-width: 370px;
  padding: 20px;

  border-radius: 30px 30px 0 0;
  box-sizing: border-box;
  transform: translateX(-50%);

  background-color: #fff;
}

.more__header {
  position: relative;

  padding-bottom: 20px;
  margin-bottom: 15px;
  border-bottom: 1px solid #F0F3F8;

  text-align: center;
}

.more__caption {
  margin-bottom: 25px;

  font-size: 17px;
}

.more__title {
  font-size: 17px;
}

.more__subtitle {
  font-size: 12px;
  line-height: 26px;
}

.more__close {
  position: absolute;
  top: 0;
  right: 0;
}

.more__about {
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-bottom: 1px solid #F0F3F8;

  font-size: 14px;
  line-height: 22px;
}

.more__image {
  width: 100%;
  height: 200px;
  border-radius: 6px;

  background-color: #C4C4C4;
}

.select-service {
  min-height: 100vh;
  padding-bottom: 220px;
  box-sizing: border-box;
  background-color: #F0F3F8;
}

.search {
  display: flex;
  align-items: center;

  height: 35px;
  padding: 0 15px;
  margin: 10px;

  border-radius: 74px;
  box-sizing: border-box;

  background-color: #F6F9FC;
}

.search__input {
  width: 100%;
  padding-left: 15px;
  box-sizing: border-box;
}

.search__input::placeholder {
  font-size: 12px;
  text-align: center;
  color: #A1A2A2;
}

.list-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 6px;
  box-sizing: border-box;

  font-size: 16px;
  font-weight: 500;

  background-color: #fff;
}

.list-toggle__right {
  display: flex;
  align-items: center;
}

.list-length {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 22px;
  height: 22px;
  margin-right: 15px;

  border-radius: 50%;

  font-size: 12px;

  background-color: #FED47A;
}

.list-toggle__icon {
  transition: .3s all ease;
  transform: rotateZ(90deg);
}

.toggle--active {
  transform: rotateZ(-90deg);
}

.service__image {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;

  border-radius: 6px;

  background-color: #C4C4C4;
}

.services__item {
  margin-top: 10px;
  border-radius: 8px;
}

.item__wrapper {
  padding: 20px;
  border-radius: 8px;

  background-color: #fff;
}

.item--image {
  padding: 15px 15px 20px 15px;
}

.item--active {
  position: relative;
  z-index: 2;
  border: 1px solid #FFC549;
}

.item--active::after {
  content: '';
  position: absolute;
  left: -5px;
  top: -1px;
  z-index: -1;

  width: 10px;
  height: calc(100% + 2px);
  border-radius: 6px 0 0 6px;

  background-color: #FFC549;
}

.item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
}

.item__title {
  max-width: 220px;

  font-size: 14px;
  line-height: 17px;
}

.item__time {
  padding: 0 12px;
  border-radius: 31px;

  font-size: 12px;
  line-height: 24px;

  background-color: #F0F3F8;
}

.item__main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item__more {
  width: 90px;
  height: 22px;

  border-radius: 31px;
  border: 1px solid #FED47A;

  font-size: 12px;
}

.main__right {
  display: flex;
  align-items: center;
}

.item__price {
  margin-right: 15px;

  font-size: 22px;
  font-weight: 600;
  line-height: 35px;
}

.item__add {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  border: 1px solid #328FE4;
  border-radius: 10px;
  transition: .3s all ease;
}

.add--active {
  background-color: #328FE4;
}

.add__wrapper {
  position: relative;

  width: 12px;
  height: 12px;
  transition: .3s all ease;
}

.add__wrapper--active {
  transform: rotateZ(45deg);
}

.add__line {
  position: absolute;
  top: 5px;
  left: 0;

  width: 12px;
  height: 2px;

  border-radius: 3px;
  transition: .3s all ease;

  background-color: #328FE4;
}

.add__line2 {
  transform: rotateZ(90deg);
}

.line--active {
  background-color: #fff;
}

.listAm-enter-active, .listAm-leave-active {
  animation: .5s listKeys linear reverse;
}

.listAm-leave-active {
  animation: .5s listKeys linear;
}

@keyframes listKeys {
  0% {
    height: 930px;
    opacity: 1;
    overflow: hidden;
  }
  100% {
    height: 0;
    opacity: 0;
    overflow: hidden;
  }
}

</style>