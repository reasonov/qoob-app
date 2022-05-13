<template>
  <div :class="['checkbox', {'checkbox--active': state}]">
    <span :class="['checkbox__circle', {'circle--active': state}]"></span>
  </div>
</template>

<script>
export default {
  name: "CustomCheckboxMain",
  props: {
    state: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .checkbox {
    position: relative;

    width: 35px;
    height: 20px;

    border-radius: 51px;
    transition: .3s all ease;

    background: rgba(0, 0, 0, 0.1);
  }

  .checkbox__circle {
    position: absolute;
    top: 3px;
    left: 4px;

    width: 14px;
    height: 14px;

    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: .3s all ease;

    background-color: #fff;
  }

  .checkbox--active {
    box-shadow: inset 0 0.5px 1px rgba(0, 0, 0, 0.07);
    background-color: #FFC549;
  }

  .circle--active {
    left: 17px;
  }
</style>