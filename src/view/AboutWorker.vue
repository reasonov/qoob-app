<template>
  <div class="about-worker">
    <div class="about__wrapper">
      <div class="about__header">
        <img :src="require('../assets/img/' + worker.image + '.png')" alt="" class="about__logo">

        <h3 class="header__title">{{ worker.name }}</h3>
        <p class="header__subtitle">{{ worker.service }}</p>

        <div class="about__rate">
          <img src="../assets/img/star-yellow.svg" alt="">
          <p class="rate__number">{{ worker.rate }}</p>
        </div>
      </div>

      <p class="about__title">О себе</p>

      <p class="about__text">{{ worker.info }}</p>

      <div class="comment__header">
        <p class="about__title comment__title">Отзывы</p>
        <p class="comment__number">{{ numberOfComments }}</p>
      </div>

      <ul class="comment__list">
        <li class="comment__item" v-for="(comment, index) in worker.comments" :key="index">
          <div class="comment__wrapper">
            <p class="comment__text">{{ comment.text }}</p>
          </div>

          <div class="comment__bottom">
            <div class="comment__info">
              <p class="comment__name">{{ comment.name }}</p>
              <p class="comment__date">{{ comment.date }}</p>
            </div>
            <div class="comment__rate">
              <img src="../assets/img/star-yellow.svg" alt="">
              <p class="rate__number">{{ comment.rate }}</p>
            </div>
          </div>
        </li>

      </ul>

      <modal-bottom class="about__modal">
        <router-link class="modal__button" to="/select-date" @click="commitData">Записаться</router-link>
      </modal-bottom>

    </div>
  </div>
</template>

<script>
import ModalBottom from "@/components/ModalBottom";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "AboutWorker",
  components: {
    ModalBottom
  },
  props: {
    id: {
      type: String
    }
  },
  setup(props) {

    const store = useStore()

    const worker = store.state.workerList[props.id];

    const numberOfComments = computed(() => {
      return worker.comments.length
    })

    function commitData() {
      store.commit('updateAppointment', {item: 'name', value: props.id})
    }

    return { worker, numberOfComments, commitData }
  }
}
</script>

<style scoped>

.about-worker {
  min-height: 100vh;
  padding-top: 60px;
  box-sizing: border-box;
  background-color: #F0F3F8;
}

.about__wrapper {
  max-width: 375px;
  padding: 70px 20px 130px 20px;
  margin: 0 auto;

  border-radius: 30px;
  box-sizing: border-box;

  background-color: #fff;
}

.about__header {
  position: relative;

  padding-bottom: 25px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e2e2e2;

  text-align: center;
}

.about__logo {
  position: absolute;
  top: -112px;
  left: 50%;

  width: 76px;
  height: 76px;
  border: 4px solid #FFC549;
  border-radius: 50%;

  transform: translateX(-50%);
}

.header__title {
  margin-bottom: 2px;

  font-size: 17px;
  font-weight: 500;
  line-height: 17px;
}

.header__subtitle {
  font-size: 12px;
  line-height: 24px;
}

.about__rate {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 21px;

  background-color: #F6F9FC;
}

.rate__number {
  margin-left: 9px;
  opacity: 0.8;

  font-size: 16px;
  font-weight: 500;
}

.about__title {
  margin-bottom: 10px;

  font-size: 10px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #6D6D6D;
}

.about__text {
  padding-bottom: 15px;
  margin-bottom: 15px;

  border-bottom: 1px solid #e2e2e2;

  font-size: 14px;
  line-height: 22px;
}

.slider-wrapper {
  position: relative;
  left: -20px;

  width: calc(100% + 40px);
  height: 200px;
  margin-bottom: 35px;

  overflow: hidden;
}

.slider {
  position: absolute;
  top: 0;
  left: 20px;

  display: flex;
}

.slider__item {
  width: 320px;
  height: 200px;
  margin-right: 10px;

  border-radius: 6px;

  background-color: #C4C4C4;
}

.comment__header {
  display: flex;
  align-items: center;

  margin-bottom: 15px;
}

.comment__title {
  margin-bottom: 0;
  margin-right: 10px;
}

.comment__number {
  padding: 0 12px;
  border-radius: 31px;

  font-size: 10px;
  line-height: 22px;

  background-color: #F6F9FC;
}

.comment__item {
  margin-bottom: 25px;
}

.comment__wrapper {
  padding: 15px;
  border-radius: 6px;

  background-color: #F6F9FC;
}

.comment__text {
  opacity: 0.6;
  font-size: 12px;
  line-height: 20px;
}

.comment__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;
}

.comment__name {
  margin-bottom: 5px;

  font-size: 11px;
  line-height: 11px;
}

.comment__date {
  opacity: 0.6;

  font-size: 10px;
  line-height: 10px;
}

.comment__rate {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;

  border-radius: 21px;

  background-color: #F6F9FC;
}

.about__modal {
  height: 120px;
  padding: 25px;
  box-sizing: border-box;
}

.about__modal2 {
  z-index: 5;

  height: 200px;
  padding: 25px;
  padding-top: 35px;
  box-sizing: border-box;

  text-align: center;
}

.modal__button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
  border-radius: 12px;

  font-size: 16px;

  background-color: #FFC549;
}

.modal__title {
  margin-bottom: 20px;

  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
}

.modal__subtitle {
  margin-bottom: 30px;

  font-size: 14px;
  line-height: 16px;
}
</style>