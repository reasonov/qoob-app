<template>
  <div class="select-date wrapper">
    <calendar @newDate="takeDate" />

    <select-time @newTime="takeTime" />

  </div>

  <appointment-block link="/select-service" />

</template>

<script>
import Calendar from "@/components/Calendar";
import SelectTime from "@/components/SelectTime";
import appointmentBlock from "@/components/AppointmentBlock";
import {useStore} from "vuex";
import {ref, watchEffect} from "vue";

export default {
  name: "SelectDate",
  components: {
    Calendar,
    SelectTime,
    appointmentBlock
  },
  setup() {
    const store = useStore();

    const date = ref('');

    function takeDate(value) {
      date.value = value;
    }

    const time = ref('');

    function takeTime(value) {
      time.value = value;
    }

    watchEffect(() => {
      if(date.value !== '' && time.value !== '') {
        store.commit('updateAppointment', {item: 'date', value: {date: date.value, time: time.value}});
      }
    })

    return { takeDate, takeTime }

  }
}
</script>

<style scoped>
.select-date {
  padding-bottom: 235px;
}
</style>