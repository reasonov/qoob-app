<template>
  <div class="certificate">
    <div class="wrapper">
      <div class="card" v-for="data in certificateList" :key="data.name">
        <div class="card__background" :style="'background-image: url(' + require('../assets/img/' + data.image + '.png') + ')'">
          <div>
            <p class="background__text">Сертификат</p>
            <p class="background__price">{{ data.price }}₽</p>
          </div>
        </div>
        <div class="card__bottom">
          <p class="card__price">{{ data.price }}₽</p>
          <p class="card__name">{{ data.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Certificate",
  setup() {

    const certificateList = [
      {
        name: 'Сертификат на маникюр',
        price: '5 000',
        image: 'certificate1'
      },
      {
        name: 'Сертификат на 3 тренировки с тренером',
        price: '9 000',
        image: 'certificate2'
      },
      {
        name: 'Сертификат на маникюр',
        price: '6 000',
        image: 'certificate1'
      }
    ]

    return { certificateList }

  }
}
</script>

<style scoped>

.certificate {
  min-height: 100vh;
  background-color: #F0F3F8;
}

.card {
  padding: 10px;
  margin-bottom: 10px;

  border-radius: 16px;

  background-color: #fff;
}

.card__background {
  display: flex;
  align-items: flex-end;

  height: 190px;
  padding: 20px;

  border-radius: 8px 8px 0 0;
  box-sizing: border-box;

  color: #fff;

  background-repeat: no-repeat;
  background-size: cover;
}

.background__text {
  margin-bottom: 5px;

  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
}

.background__price {
  font-size: 32px;
  font-weight: 700;
}

.card__bottom {
  padding-top: 20px;
  padding-left: 20px;
}

.card__price {
  margin-bottom: 5px;

  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
}

.card__name {
  font-size: 15px;
  line-height: 28px;
}
</style>
