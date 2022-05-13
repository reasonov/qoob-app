<template>
  <div class="select-worker">

    <worker-list link="/select-date" />

    <appointment-block link="/select-date" />

  </div>
</template>

<script>
import AppointmentBlock from "@/components/AppointmentBlock";
import WorkerList from "@/components/WorkerList";
import {useStore} from "vuex";

export default {
  name: "SelectWorker",
  components: {
    AppointmentBlock,
    WorkerList
  },
  setup() {

    const servicesList = [
      'Все',
      'Барбер',
      'Косметолог',
      'Массажист',
      'Парихмахер'
    ]

    const store = useStore();

    return { servicesList, store }

  }

}
</script>

<style scoped>

.select-worker {
  min-height: 100vh;
  background-color: #F0F3F8;
}

.worker__wrapper {
  padding-bottom: 210px;
}

.worker__header {
  max-width: 360px;
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

.appointment-block {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>