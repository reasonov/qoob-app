<template>
  <div class="slider-wrapper" @touchmove="scroll" @touchend="scrollEnd">
    <ul class="slider" :style="sliderStyle">
      <li class="slider__item"></li>
      <li class="slider__item"></li>
      <li class="slider__item"></li>
      <li class="slider__item"></li>
      <li class="slider__item"></li>
    </ul>
  </div>
</template>

<script>
import {ref, computed} from "vue";

export default {
  name: "AboutSlider",
  setup() {

    const slideNumber = ref(0);
    let scrollList = [];

    function scroll(e) {
      scrollList.push(e.touches[0].clientX);
    }

    function scrollEnd() {
      if(scrollList.length >= 2) {
        if(scrollList[0] < scrollList[scrollList.length - 1]) {
          if(slideNumber.value === 0) {
            slideNumber.value = -4;
          } else {
            slideNumber.value += 1;
          }
        } else {
          if(slideNumber.value === -4) {
            slideNumber.value = 0;
          } else {
            slideNumber.value -= 1;
          }
        }
      }
      scrollList = [];
    }

    const sliderStyle = computed(() => {
      return 'left: ' + ((slideNumber.value * 330) + 20) + 'px;';
    })

    return { scroll, scrollEnd, sliderStyle }

  }
}
</script>

<style scoped>
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

  transition: .5s all ease;
}

.slider__item {
  width: 320px;
  height: 200px;
  margin-right: 10px;

  border-radius: 6px;

  background-color: #C4C4C4;
}
</style>