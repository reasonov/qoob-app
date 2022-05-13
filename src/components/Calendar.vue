<template>
  <div class="calendar" @touchmove.prevent="scrollCalendar" @touchend="stopScroll">
    <p class="calendar__month">{{ translateMonth }}</p>
    <ul class="calendar__week">
      <li class="week__item" v-for="item in weekList" :key="item">{{ item }}</li>
    </ul>
    <ul class="calendar__day">
      <li class="null-slot" v-for="i in dayStart" :key="i"></li>
      <li class="day__item" v-for="day in daysInMonth" :key="day">
        <button :class="[
            'day__wrapper',
            {'day--select': day === selectedDay},
            {'today': day === currentDay && selectedDay !== currentDay}
            ]"
                :disabled="day < currentDay"
                @click="selectDay(day)"
        >
          {{ day }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import {ref, computed} from "vue";

export default {
  name: "Calendar",
  setup(props, { emit }) {

    const weekList = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = ref(date.getMonth() + 1);
    const currentYear = ref(date.getFullYear());

    const dayStart = computed(() => {
      return new Date(currentYear.value, currentMonth.value - 1, 0).getDay()
    })

    const selectedDay = ref(currentDay);

    const daysInMonth = computed(() => {
      return new Date(currentYear.value, currentMonth.value, 0).getDate();
    })

    function selectDay(day) {
      selectedDay.value = day;

      let month = currentMonth.value;
      if(String(currentMonth.value).length < 2) {
        month = '0' + currentMonth.value;
      }

      const value = selectedDay.value + '.' + month + '.' + currentYear.value;

      emit('newDate', value)
    }

    const firstTouch = ref(0);
    const scrollThrow = ref(false);

    function scrollCalendar(e) {

      if(scrollThrow.value) {
        return;
      }

      if(firstTouch.value === 0) {
        firstTouch.value = e.touches[0].screenY;
      } else if(firstTouch.value - e.touches[0].screenY >= 20) {
        changeMonth('plus');
        firstTouch.value = 0;
        scrollThrow.value = true;
      } else if(firstTouch.value - e.touches[0].screenY <= -20) {
        changeMonth('minus');
        firstTouch.value = 0;
        scrollThrow.value = true;
      }
    }

    function stopScroll() {
      scrollThrow.value = false;
    }

    function changeMonth(side) {
      if(side === 'plus') {
        if(currentMonth.value === 11) {
          currentYear.value += 1;
          currentMonth.value = 0;
        } else {
          currentMonth.value += 1;
        }
      } else {
        if(currentMonth.value === 0) {
          currentYear.value -= 1;
          currentMonth.value = 11;
        } else {
          currentMonth.value -= 1;
        }
      }
    }

    const translateMonth = computed(() => {
      const month = new Date(currentYear.value, currentMonth.value - 1);
      return month.toLocaleString('default', { month: 'long' })
    })

    return {
      weekList,
      daysInMonth,
      currentDay,
      selectedDay,
      dayStart,
      selectDay,
      scrollCalendar,
      stopScroll,
      translateMonth
    }

  }
}
</script>

<style scoped>
.calendar {
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #E0E0E0;

  background-color: #fff;
}

.calendar__month {
  position: absolute;
  top: -40px;
  left: 50%;

  margin-bottom: 20px;
  transform: translateX(-50%);

  font-size: 17px;
  font-weight: 500;
}

.calendar__month:first-letter {
  text-transform: uppercase;
}

.calendar__week {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.week__item {
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  color: #979797;
}

.calendar__day {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 15px;

  margin-top: 25px;
}

.day__item {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  text-align: center;
}

.day__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 6px;
  transition: .3s all ease;
}

.day__wrapper:disabled {
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.2);

  background-color: #F6F9FC;
}

.day--select {
  background-color: #FFC549;
}

.today {
  border: 1px solid #FED47A;

  background-color: #fff;
}
</style>