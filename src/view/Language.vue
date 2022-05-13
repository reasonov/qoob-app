<template>
  <div class="language">
    <div class="wrapper">
      <ul class="language__list">

        <language-item :item="item" v-for="item in languageList" :key="item.nameRu" @click="selectLanguage(item)" />

      </ul>
    </div>
  </div>
</template>

<script>
import LanguageItem from "@/components/LanguageItem";
import { reactive, onMounted } from "vue";
import { useStore } from 'vuex';

export default {
  name: "Language",
  components: {
    LanguageItem
  },
  setup() {

    const store = useStore();

    const languageList = reactive([
      {
        nameEng: 'Russian',
        nameRu: 'Русский',
        image: 'flag-ru',
        state: true
      },
      {
        nameEng: 'English',
        nameRu: 'Английский',
        image: 'flag-gb',
        state: false
      },
      {
        nameEng: 'Russian',
        nameRu: 'Русский',
        image: 'flag-ru',
        state: false
      },
      {
        nameEng: 'English',
        nameRu: 'Английский',
        image: 'flag-gb',
        state: false
      }
    ])

    function selectLanguage(item) {
      languageList.forEach((i) => {
        i.state = false;
      })

      item.state = true;

      if(item.nameEng === 'Russian') {
        store.commit('changeLanguage', item.nameRu)
      } else {
        store.commit('changeLanguage', item.nameEng)
      }

    }

    onMounted(() => {
      languageList.forEach((i) => {
        i.state = false;
      })

      if(store.state.language === 'Русский') {
        languageList[0].state = true;
      } else {
        languageList[1].state = true;
      }
    })

    return { languageList, selectLanguage }

  }
}
</script>

<style scoped>

.language {
  min-height: 100vh;
  background-color: #F0F3F8;
}

.language__list {
  border-radius: 6px;

  background-color: #fff;
}
</style>