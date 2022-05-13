<template>
  <div class="main-page">

    <div class="main__header">
      <img src="../assets/img/client-logo.png" alt="">
      <div class="header__wrapper">
        <h2 class="header__name">Дроздов Barber Family</h2>
        <p class="header__type">Барбершоп</p>
      </div>
    </div>

    <div class="wrapper">
      <nav class="main__nav">
        <ul class="nav__top">
          <li class="nav__item1" v-for="item in navTopList" :key="item">
            <router-link class="nav__link1" :to="item.link">
              <img :src="require('../assets/img/' + item.image + '.svg')" alt="">
              <p class="link__text1">{{ item.text }}</p>
            </router-link>
          </li>
        </ul>

        <ul class="nav__bottom" v-for="(list, index) in navBottomList" :key="index">
          <li class="nav__item" v-for="item in list" :key="item">
            <router-link class="nav__link" :to="item.link">
              <div class="content-wrapper">
                <img class="link__image" :src="require('../assets/img/' + item.image + '.svg')" alt="">
                <p class="link__text">{{ item.text }}</p>
              </div>
              <div class="content-wrapper">
                <span class="circle-number1 circle-number" v-if="item.text === 'Кошелёк'">2500</span>
                <span class="circle-comments circle-number" v-else-if="item.text === 'Отзывы'">124</span>
                <span class="language" v-else-if="item.text === 'Язык'">{{ store.state.language }}</span>
                <img src="../assets/img/arrow-right.svg" alt="">
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <modal-bottom class="main__modal">
      <router-link class="modal__button" to="/select-worker">Записаться</router-link>
    </modal-bottom>

  </div>
</template>

<script>
import ModalBottom from "@/components/ModalBottom";
import {useStore} from "vuex";

export default {
  name: 'App',
  components: {
    ModalBottom
  },
  setup() {

    const store = useStore();

    const navTopList = [
      {
        text: 'связь',
        image: 'phone',
        link: '/phone'
      },
      {
        text: 'записи',
        image: 'record',
        link: '/record'
      },
      {
        text: 'поделиться',
        image: 'heart-add',
        link: '/phone'
      },
      {
        text: 'профиль',
        image: 'profile',
        link: '/profile'
      }
    ]

    const navBottomList = [
      [
        {
          text: 'Кошелёк',
          image: 'card-tick',
          link: '/purse'
        }
      ],
      [
        {
          text: 'Магазин',
          image: 'ticket-discount',
          link: '/store'
        }
      ],
      [
        {
          text: 'Отзывы',
          image: 'star',
          link: '/comments'
        },
        {
          text: 'О компании',
          image: 'message-question',
          link: '/about'
        }
      ],
      [
        {
          text: 'Язык',
          image: 'language-circle',
          link: '/language'
        }
      ]
    ]

    return { navTopList, navBottomList, store }
  }
}
</script>

<style scoped>

.main-page {
  min-height: 100vh;
  background-color: #F0F3F8;
}

.main__header {
  display: flex;
  align-items: center;

  max-width: 375px;
  padding: 15px 20px;
  margin: 0 auto;
  box-sizing: border-box;

  background-color: #F6F9FC;
}

.main__header img {
  width: 54px;
  height: 54px;
}

.header__wrapper {
  margin-left: 15px;
}

.header__name {
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}

.header__type {
  margin-top: 7px;

  font-size: 12px;
  line-height: 12px;
}

.wrapper {
  padding-top: 10px;
}

.nav__top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
}

.nav__item1 {
  height: 65px;
  border-radius: 6px;

  background-color: #fff;
}

.nav__bottom {
  margin-top: 10px;
  border-radius: 6px;

  background-color: #fff;
}

.nav__link1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 10px;
  line-height: 10px;
  color: #191C27;
}

.link__text1 {
  margin-top: 5px;
}

.nav__link {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 45px;
  padding: 0 15px;

  border-bottom: 1px solid #F0F3F8;
}

.content-wrapper {
  display: flex;
  align-items: center;
}

.link__image {
  opacity: 0.4;
}

.link__text {
  margin-left: 15px;

  font-size: 15px;
}

.circle-number1 {
  margin-right: 15px;

  background-color: #FED47A;
}

.circle-comments {
  margin-right: 15px;

  background-color: #F0F3F8;
}

.language {
  margin-right: 15px;

  font-size: 12px;
  color: #328FE4;
}


.main__modal {
  height: 130px;
  padding: 20px;

  box-sizing: border-box;
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

.modal__button:active {
 background-color: #FED47A;
}
</style>