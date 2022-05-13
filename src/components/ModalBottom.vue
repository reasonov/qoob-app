<template>
  <transition name="modalAm">
    <div class="modal" v-if="state">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalBottom",
  props: {
    state: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  left: 50%;
  bottom: 0;

  width: 100%;

  border-radius: 24px 24px 0 0;
  transform: translateX(-50%);

  background-color: #fff;
}

.modalAm-enter-active, .modalAm-leave-active {
  transition: .3s all ease;
}

.modalAm-enter-from, .modalAm-leave-to {
  bottom: -200px;
}
</style>