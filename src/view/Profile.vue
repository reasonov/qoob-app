<template>
  <div class="wrapper profile-wrapper">

    <p class="input__label title--small">Имя</p>
    <div class="input__area">
      <input type="text" class="profile__input" v-model="profileData.name" :disabled="editItem !== 1">
      <button class="profile__edit" @click="editItem = 1">
        <img src="../assets/img/edit.svg" alt="">
      </button>
    </div>

    <p class="input__label title--small">Фамилия</p>
    <div class="input__area">
      <input type="text" class="profile__input" v-model="profileData.lastName" :disabled="editItem !== 2">
      <button class="profile__edit" @click="editItem = 2">
        <img src="../assets/img/edit.svg" alt="">
      </button>
    </div>

    <p class="input__label title--small">Телефон</p>
    <div class="input__area">
      <input type="text" class="profile__input" v-model="profileData.phone" :disabled="editItem !== 3">
      <button class="profile__edit" @click="editItem = 3">
        <img src="../assets/img/edit.svg" alt="">
      </button>
    </div>

    <p class="input__label title--small">Email</p>
    <div class="input__area">
      <input type="text" class="profile__input" v-model="profileData.email" :disabled="editItem !== 4">
      <button class="profile__edit" @click="editItem = 4">
        <img src="../assets/img/edit.svg" alt="">
      </button>
    </div>

    <button class="save-button" @click="goBack">Сохранить</button>

  </div>
</template>

<script>
import {ref, reactive} from "vue";
import router from "@/router";

export default {
  name: "Profile",
  setup() {

    const editItem = ref(0);

    const profileData = reactive({
      name: 'Мария',
      lastName: 'Шарапова',
      phone: '+7 918 340 22 31',
      email: 'example@mail.com'
    })

    function goBack() {
      router.go(-1);
    }

    return { editItem, profileData, goBack }

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
}

.profile__edit {
  width: 50px;
  height: 50px;
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