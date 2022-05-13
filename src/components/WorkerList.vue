<template>
  <div class="worker-list">
    <div class="worker__header">
      <ul class="services-list">
        <li v-for="(item, index) in servicesList" :key="index">
          <button
              class="services__item"
              @click="selectedService = index"
          >
            {{ item }}

            <transition name="borderAm">
              <span class="service__border" v-show="selectedService === index"></span>
            </transition>

          </button>
        </li>
      </ul>
    </div>

    <div class="wrapper">

      <router-link
          class="worker__card"
          @click="commitData(index)"
          :to="currentLink(index)"
          v-for="(worker, index) in filteredServices"
          :key="index"
      >
        <img class="worker__avatar" :src="require('../assets/img/' + worker.image + '.png')" alt="">
        <div class="card__main">
          <div class="card__left">
            <p class="card__name">{{ worker.name }}</p>
            <p class="card__text1">{{ worker.service }}</p>
          </div>
          <div class="card__right">
            <router-link class="card__rate" :to="{name: 'О сотруднике', params: {id: worker.id}}">
              <img class="rate-star" src="../assets/img/star-yellow.svg" alt="">
              <p class="rate-number">{{ worker.rate }}</p>
            </router-link>
          </div>
        </div>

      </router-link>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {ref, computed} from "vue";

export default {
  name: "WorkerList",
  props: {
    link: {
      type: String
    }
  },
  setup(props) {

    const store = useStore();

    const servicesList = [
      'Все',
      'Барбер',
      'Косметолог',
      'Массажист',
      'Парихмахер'
    ]

    const selectedService = ref(0);

    const workerList = store.state.workerList;

    const filteredServices = computed(() => {
      if(selectedService.value === 0) {
        return workerList;

      }
      const list = [];

      workerList.forEach((item) => {
        if(item.service === servicesList[selectedService.value]) {
          list.push(item);
        }
      })

      return list
    })

    function commitData(id) {
      store.commit('updateAppointment', {item: 'name', value: id})
    }

    function currentLink(index) {
      if(props.link === '/worker') {
        return '/worker/' + index;
      } else {
        return props.link
      }
    }

    return { servicesList, selectedService, workerList, filteredServices, commitData, currentLink }

  }
}
</script>

<style scoped>
.worker__header {
  padding: 10px;
  margin: 0 auto;

  overflow-x: scroll;
  background-color: #fff;
}

.worker__header::-webkit-scrollbar {
  display: none;
}

.worker__avatar {
  width: 40px;
  height: 40px;
}

.services-list {
  display: flex;
  padding: 0 10px;
}

.services-list li {
  margin-right: 25px;
}

.services-list li:last-child {
  padding-right: 10px;
}

.services__item {
  position: relative;

  padding: 10px 0;

  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
}

.services--active::after {
  content: '';
  position: absolute;
  left: -9px;
  bottom: -10px;

  width: calc(100% + 18px);
  height: 4px;

  border-radius: 2px 2px 0 0;

  background-color: #FFC549;
}

.worker__card {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: 0 15px;
  margin-top: 10px;
  border-radius: 6px;

  background-color: #fff;
}

.card__main {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-left: 15px;

  box-sizing: border-box;
}

.card__name {
  margin-bottom: 5px;

  font-size: 15px;
  font-weight: 600;
  line-height: 15px;
}

.card__text1 {
  margin-bottom: 5px;

  font-size: 15px;
  font-weight: 600;
  line-height: 15px;
  color: #939395;
}

.card__rate {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;
  border-radius: 21px;

  background-color: #F6F9FC;
}

.rate-number {
  font-size: 18px;
  font-weight: 500;
}

.rate-star {
  width: 22px;
  height: 22px;
  margin-right: 5px;
}

.service__border {
  position: absolute;
  left: 50%;
  bottom: -10px;

  width: calc(100% + 18px);
  height: 4px;

  border-radius: 2px 2px 0 0;
  transform: translateX(-50%);

  background-color: #FFC549;
}
</style>