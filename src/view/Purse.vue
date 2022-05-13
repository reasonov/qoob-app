<template>
  <div class="purse">
    <div class="wrapper">

      <div class="card deposit" v-for="(card, index) in depositList" :key="index">
        <div class="card__wrapper">
          <div class="card__header deposit__header">
            <p class="card__title">Депозитный счет</p>
          </div>

          <p class="caption">Баланс</p>
          <p class="card__price">{{ card.price }} ₽</p>

        </div>
      </div>

      <div class="card certificate" v-for="(card, index) in certificateList" :key="index">
        <div class="card__wrapper">
          <div class="card__header">
            <p class="card__title">Сертификат № {{ card.id }}</p>
          </div>

          <div class="card__main">
            <div class="card__block">
              <p class="caption">Баланс</p>
              <p class="card__price">{{ card.price }} ₽</p>
            </div>
          </div>

          <p class="card__text">Сертификат на {{ card.price }} рублей</p>
        </div>
        <div class="card__bottom">
          <p class="bottom__caption">Срок действия</p>
          <p class="bottom__number">до {{ card.date }}</p>
        </div>
      </div>

      <div class="card loyalty" v-for="(card, index) in loyaltyList" :key="index">
        <div class="card__wrapper">
          <div class="card__header header--sale">
            <p class="card__title">Карта лояльности</p>
          </div>

          <div class="card__main card__main--sale">
            <div class="card__block">
              <p class="caption">Баланс</p>
              <p class="card__price">{{ card.price }} ₽</p>
            </div>
            <div class="card__block card__sale">
              <p class="caption">Скидка</p>
              <p class="card__price">{{ card.sale }}%</p>
            </div>
          </div>

          <p class="card__text">{{ card.text }}</p>

        </div>

      </div>

      <div class="card subscription" v-for="(card, index) in subscriptionList" :key="index">
        <div class="card__wrapper">
          <div class="card__header subscription__header">
            <p class="card__title">Абонемент № {{ card.id }}</p>
          </div>

          <div class="services__header">
            <p class="caption">Услуги</p>
            <p class="caption">Баланс</p>
          </div>

          <ul class="services__list">
            <li class="services__item" v-for="(service, index) in card.service" :key="index">
              <p class="services__text">{{ service.name }}</p>
              <p class="services__text">{{ service.price }}</p>
            </li>
          </ul>

          <p class="card__text">{{ card.text }}</p>

        </div>

        <div class="card__bottom">
          <p class="bottom__caption">Срок действия</p>
          <p class="bottom__number">до {{ card.date }}</p>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Purse",
  setup() {

    const depositList = [
      {
        price: '10 000'
      }
    ]

    const certificateList = [
      {
        id: '000222',
        price: '10 000',
        sale: '10',
        date: '21.10.2021'
      }
    ]

    const loyaltyList = [
      {
        price: '1 250',
        sale: '10',
        text: 'Клубная карта для скидок «Клубная карта с очень длинным названием»',
        date: '21.10.2021'
      }
    ]

    const subscriptionList = [
      {
        id: '021230',
        service: [
          {
            name: 'Маникюр + Гель-лак',
            price: '3'
          },
          {
            name: 'Педикюр + Гель-лак',
            price: '4'
          }
        ],
        text: 'Абонемент на 5 маникюров и 5 педикюров + гель-лак',
        date: '21.10.2021'
      }
    ]

    return { depositList, certificateList, loyaltyList, subscriptionList }

  }
}
</script>

<style scoped>

.purse {
  min-height: 100vh;
  background-color: #F0F3F8;
}

.card {
  margin-bottom: 10px;
  border-radius: 16px;
  background-color: #fff;
}

.card__wrapper {
  padding: 20px;
}

.card__header {
  padding-bottom: 15px;
  border-bottom: 1px solid #F0F3F8;
}

.header--sale {
  max-width: 215px;
}

.card__title {
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
}

.card__main {
  display: flex;
  justify-content: space-between;

  margin: 20px 0;
}

.card__main--sale{
  margin-bottom: 30px;
}

.caption {
  margin-bottom: 10px;

  font-size: 11px;
  line-height: 11px;
}

.card__price {
  font-size: 28px;
  font-weight: 500;
  line-height: 22px;
}

.card__sale {
  position: relative;
  z-index: 2;

  width: 75px;
  padding-right: 20px;
  box-sizing: border-box;

  text-align: center;
}

.card__sale::before {
  content: '';
  position: absolute;
  top: -71px;
  left: -15px;
  z-index: -1;

  width: 85px;
  height: 125px;
  border-radius: 0 0 6px 6px;

  background-color: #B4F7FC;
}

.card__text {
  font-size: 14px;
  line-height: 22px;
}

.card__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 20px;
  border-radius: 0 0 16px 16px;

  font-size: 14px;
  font-weight: 500;

  background-color: #FED47A;
}

.deposit__header {
  margin-bottom: 20px;
}

.subscription__header {
  margin-bottom: 20px;
}

.services__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  font-size: 14px;
}

.services__item {
  display: flex;
  justify-content: space-between;

  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #F0F3F8;

  font-size: 14px;
  font-weight: 500;
}

.services__list {
  margin-bottom: 15px;
}

</style>