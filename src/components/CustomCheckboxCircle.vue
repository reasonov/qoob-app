<template>
  <div :class="['checkbox', {'checkbox--active': state}]">
    <span class="checkbox__circle" v-show="state"></span>
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
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
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;

    box-shadow: inset 0 0.5px 1px rgba(0, 0, 0, 0.09);
    border-radius: 51px;

    background-color: #E9E9EB;
  }

  .checkbox--active {
    background-color: #FFC549;
  }

  .checkbox__circle {
    width: 12px;
    height: 12px;

    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    background-color: #fff;
  }
</style>