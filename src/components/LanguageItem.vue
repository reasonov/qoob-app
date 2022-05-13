<template>
  <li>
    <button class="language__item">
      <div class="language__wrapper">
        <img :src="require('../assets/img/' + item.image + '.svg')" alt="">
        <div class="language__name">
          <span class="bold">{{ item.nameEng }}</span>
          <span class="default">{{ item.nameRu }}</span>
        </div>
      </div>

      <custom-checkbox-circle :state="item.state" />
    </button>
  </li>
</template>

<script>
import CustomCheckboxCircle from "@/components/CustomCheckboxCircle";
import { ref } from 'vue';

export default {
  name: "LanguageItem",
  components: {
    CustomCheckboxCircle
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup() {
    const currentLanguage = ref(0);

    return { currentLanguage }
  }
}
</script>

<style scoped>
.language__item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 45px;
  padding: 0 15px;

  border-bottom: 1px solid #F0F3F8;
}

.language__wrapper {
  display: flex;
  align-items: center;
}

.language__name {
  margin-left: 15px;

  font-size: 14px;
  text-align: left;
}

.bold {
  display: block;

  font-weight: 500;
}

.default {
  font-size: 10px;
}
</style>