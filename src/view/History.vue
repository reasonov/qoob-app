<template>
  <div class="history">
    <div class="wrapper">
      <div class="history__item">
        <div class="white-block">
          <div class="history__header">
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
            <li class="info__item">
              <p class="info__service">Стрижка под машинку</p>
              <p class="info__price">900 ₽</p>
            </li>
            <li class="info__item">
              <p class="info__service">Борода</p>
              <p class="info__price">1 000 ₽</p>
            </li>
            <li class="info__item">
              <p class="info__service">Усы</p>
              <p class="info__price">600 ₽</p>
            </li>
          </ul>

          <div class="state">
            <div class="state__wrapper">
              <img src="../assets/img/tick-circle.svg" alt="">

              <div class="state__text">
                <p class="state__title">Оплачено</p>
                <p class="state__subtitle">Наличными на кассе</p>
              </div>
            </div>

            <p class="state__price">2 500 ₽</p>
          </div>

        </div>

        <router-link class="comment white-item" to="/new-comment">
          <div class="comment__wrapper">
            <img src="../assets/img/star-circle.svg" alt="">

            <div class="text-wrapper">
              <p class="item__title">Оставить отзыв</p>
              <p class="item__subtitle">Расскажите, что мы можем улучшить?</p>
            </div>
          </div>

          <img src="../assets/img/arrow-right.svg" alt="">
        </router-link>
      </div>

      <div class="history__item">
        <div class="white-block">
          <div class="history__header">
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
            <li class="info__item">
              <p class="info__service">Стрижка под машинку</p>
              <p class="info__price">900 ₽</p>
            </li>
            <li class="info__item">
              <p class="info__service">Борода</p>
              <p class="info__price">1 000 ₽</p>
            </li>
            <li class="info__item">
              <p class="info__service">Усы</p>
              <p class="info__price">600 ₽</p>
            </li>
          </ul>

          <div class="state">
            <div class="state__wrapper">
              <img class="delete-image" src="../assets/img/delete-circle.svg" alt="">

              <div class="state__text">
                <p class="state__title">Неоплачено</p>
                <p class="state__subtitle">Визит отеменен / клиент не пришел</p>
              </div>
            </div>

            <p class="state__price">112 500 ₽</p>
          </div>

        </div>

        <div class="comment white-item">
          <div class="comment__wrapper">
            <img src="../assets/img/star-circle.svg" alt="">

            <div class="text-wrapper">
              <p class="item__title">Оставить отзыв</p>
              <p class="item__subtitle">Расскажите, что мы можем улучшить?</p>
            </div>
          </div>

          <img src="../assets/img/arrow-right.svg" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "History"
}
</script>

<style scoped>

.history {
  min-height: 100vh;
  background-color: #F0F3F8;
}

.history__header {
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

  padding-bottom: 13px;
  border-bottom: 1px solid #e2e2e2;

  font-size: 14px;
}

.info__item:not(:last-child) {
  margin-bottom: 13px;
}

.state {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 30px;
  padding-bottom: 10px;
}

.state__wrapper {
  display: flex;
  align-items: center;
}

.delete-image {
  width: 32px;
  height: 32px;
}

.state__text {
  margin-left: 15px;
}

.state__title {
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}

.state__subtitle {
  max-width: 140px;

  font-size: 11px;
  line-height: 11px;
}

.state__price {
  font-size: 20px;
  font-weight: 500;
}

.comment {
  padding: 0 20px;
  margin: 10px 0;
}

.comment__wrapper {
  display: flex;
  align-items: center;
}
</style>