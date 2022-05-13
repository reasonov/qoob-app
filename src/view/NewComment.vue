<template>
  <div class="comment">
    <div :class="['comment__wrapper', {'step2': dropVal2}]">
      <div class="comment__header">
        <img src="../assets/img/client-logo.png" alt="" class="comment__logo">

        <h3 class="header__title">Дроздов Barber Family</h3>
        <p class="header__subtitle">Барбершоп</p>
      </div>

      <div class="comment__step" v-if="step === 1">
        <drop-menu
            class="comment__drop"
            title="Чему посвещается ваш отзыв?"
            :list="dropList1"
            @selectItem="selectItem"
        />

        <drop-menu
            class="comment__drop"
            :title="dropTitle"
            :list="dropList2"
            @selectItem="selectItem"
            v-if="dropVal1"
        />

        <div class="comment__rate" v-if="dropVal2">
          <p class="title--small">Поствьте вашу оценку</p>

          <ul class="rate__list">
            <li class="rate__item" v-for="i in 5" :key="i">
              <button class="rate__star" @click="setRate(i)">
                <img src="../assets/img/star-yellow.svg" alt="" v-show="starNumber >= i">
                <img src="../assets/img/star-disabled.svg" alt="" v-show="starNumber < i">
              </button>
            </li>
          </ul>
        </div>

        <button class="comment__next" @click="step = 2">Продолжить</button>
      </div>

      <div class="comment__step" v-else-if="step === 2 && starNumber <= 3">

        <ul class="rate__list rate__list2">
          <li class="rate__item" v-for="i in 5" :key="i">
            <button class="rate__star">
              <img src="../assets/img/star-yellow.svg" alt="" v-show="starNumber >= i">
              <img src="../assets/img/star-disabled.svg" alt="" v-show="starNumber < i">
            </button>
          </li>
        </ul>

        <p class="comment__title--small title--small">Обращение будет направленно руководителю</p>
        
        <p class="input__label title--small">Ваше имя</p>

        <input type="text" class="comment__input">

        <p class="input__label title--small">Укажите подробности</p>

        <textarea class="comment__textarea"></textarea>

        <router-link class="comment__submit" :to="{name: 'О компании', params: {fromComment: true}}">Отправить</router-link>

      </div>

      <div class="comment__step" v-else-if="step === 2 && starNumber > 3">
        <ul class="rate__list rate__list2">
          <li class="rate__item" v-for="i in 5" :key="i">
            <button class="rate__star">
              <img src="../assets/img/star-yellow.svg" alt="" v-show="starNumber >= i">
              <img src="../assets/img/star-disabled.svg" alt="" v-show="starNumber < i">
            </button>
          </li>
        </ul>

        <p class="comment__title--small title--small">Выберите площадку для вашего отзыва</p>

        <div class="comment__area white-item">
          <p class="area__title">Яндекс карты</p>
          <img src="../assets/img/arrow-right.svg" alt="">
        </div>

        <div class="comment__area white-item">
          <p class="area__title">2 GIS</p>
          <img src="../assets/img/arrow-right.svg" alt="">
        </div>

        <div class="comment__area white-item">
          <p class="area__title">Гугл карты</p>
          <img src="../assets/img/arrow-right.svg" alt="">
        </div>

        <router-link class="comment__submit" :to="{name: 'О компании', params: {fromComment: true}}">Отправить</router-link>
      </div>

    </div>
  </div>
</template>

<script>
import dropMenu from "@/components/DropMenu";
import {ref, computed} from "vue";

export default {
  name: "Comment",
  components: {
    dropMenu
  },
  setup() {

    const step = ref(1);

    const dropVal1 = ref('');
    const dropVal2 = ref('');

    function selectItem(item) {
      if(dropList1.includes(item)) {
        dropVal1.value = item;
      } else {
        dropVal2.value = item;
      }
    }

    const dropList1 = [
        'Салону',
        'Сотруднику',
        'Услуге',
        'Руководителю'
    ]

    const dropTitle = computed(() => {
      if(dropVal1.value === 'Салону') {
        return 'Какому салону?'
      } else if(dropVal1.value === 'Сотруднику') {
        return 'Какому сотруднику?'
      } else if(dropVal1.value === 'Услуге') {
        return 'Какой услуге?'
      } else if(dropVal1.value === 'Руководителю') {
        return 'Какому руководителю?'
      }
      return false
    })

    const dropList2 = computed(() => {
      if(dropVal1.value === 'Салону') {
        return ['Первый салон', 'Второй салон', 'Третий салон']
      } else if(dropVal1.value === 'Сотруднику') {
        return ['Первый сотрудник', 'Второй сотрудник', 'Третий сотруднинк']
      } else if(dropVal1.value === 'Услуге') {
        return ['Первая услуга', 'Вторая услуга', 'Третья услуга']
      } else if(dropVal1.value === 'Руководителю') {
        return ['Первый руководитель', 'Второй руководитель', 'Третий руководитель']
      }
      return false
    })

    const starNumber = ref(0);

    function setRate(index) {
      starNumber.value = index;
    }

    return {
      step,
      dropList1,
      dropVal1,
      dropVal2,
      selectItem,
      dropTitle,
      dropList2,
      starNumber,
      setRate
    }

  }
}
</script>

<style scoped>
.comment {
  position: relative;

  height: calc(100vh - 45px);
  min-height: 700px;

  background-color: #F0F3F8;
}

.comment__wrapper {
  position: absolute;
  bottom: 0;
  left: 50%;

  width: 100%;

  padding: 70px 20px 190px 20px;
  margin: 0 auto;
  margin-top: 100px;

  border-radius: 30px 30px 0 0;
  box-sizing: border-box;
  transform: translateX(-50%);

  background-color: #fff;
}

.step2 {
  padding-bottom: 20px;
}

.comment__header {
  position: relative;

  padding-bottom: 25px;

  text-align: center;
}

.comment__logo {
  position: absolute;
  top: -115px;
  left: 50%;

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

.comment__drop {
  margin-bottom: 20px;
}

.rate__list {
  display: flex;
  justify-content: space-between;

  padding: 15px 30px;

  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
}

.rate__star img {
  width: 40px;
  height: 40px;
}

.comment__next {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 12px;

  font-size: 16px;

  background: #FFC549;
}

.rate__list2 {
  padding-top: 0;
  border: none;
}

.comment__title--small {
  margin-bottom: 40px;
  border-bottom: 1px solid #e2e2e2;
}

.comment__input {
  width: 100%;
  height: 50px;

  padding: 0 15px;
  margin-bottom: 20px;

  box-sizing: border-box;
  border-radius: 6px;

  font-size: 14px;
  color: #626465;

  background-color: #F6F9FC;
}

.comment__textarea {
  width: 100%;
  height: 170px;
  padding: 15px;

  resize: none;
  border-radius: 6px;
  box-sizing: border-box;

  font-size: 14px;
  color: #626465;

  background-color: #F6F9FC;
}

.comment__submit {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  margin-top: 30px;
  border-radius: 12px;

  font-size: 16px;

  background-color: #FFC549;
}

.comment__area {
  margin-bottom: 15px;
  cursor: pointer;

  background-color: #F6F9FC;
}

.area__title {
  font-size: 16px;
  font-weight: 500;
}
</style>