<template>
  <div class="wrapper profile-wrapper">

    <p class="input__label title--small">Имя</p>
    <div class="input__area">
      <input type="text" class="profile__input" v-model="profileData.name">
    </div>

    <p class="input__label title--small">Фамилия</p>
    <div class="input__area">
      <input type="text" class="profile__input" v-model="profileData.lastName">
    </div>

    <p class="input__label title--small">Телефон</p>
    <div class="input__area">
      <input type="text" class="profile__input" v-model="profileData.phone">
    </div>

    <p class="input__label title--small">Email</p>
    <div class="input__area">
      <input type="text" class="profile__input" v-model="profileData.email">
    </div>

    <button class="save-button" @click="goBack">Сохранить</button>

  </div>
</template>

<script>
import {reactive} from "vue";
import router from "@/router";

export default {
  name: "Profile",
  setup() {

    const profileData = reactive({
      name: '',
      lastName: '',
      phone: '',
      email: ''
    })

    function goBack() {
      router.go(-1);
    }

    return { profileData, goBack }

  }
}
</script>

<style scoped>

.profile-wrapper {
  position: relative;

  height: calc(100vh - 45px);
  padding-top: 25px;
  padding-bottom: 40px;

  box-sizing: border-box;

  background-color: #fff;
}

.input__area {
  display: flex;

  margin-bottom: 15px;
  border-radius: 6px;

  background-color: #F6F9FC;
}

.profile__input {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  box-sizing: border-box;

  font-size: 14px;
  color: #000;
}

.profile__edit {
  width: 50px;
  height: 50px;
  opacity: 0.4;
}

.save-button {
  position: absolute;
  left: 50%;
  bottom: 40px;

  width: calc(100% - 60px);
  height: 50px;
  border-radius: 12px;
  transform: translateX(-50%);

  font-size: 16px;

  background-color: #FFC549;
}
</style>