<template>
  <div class="calendar">
    <p class="calendar__month">{{ translateMonth }}</p>
    <ul class="calendar__week">
      <li class="week__item" v-for="item in weekList" :key="item">{{ item }}</li>
    </ul>

    <div class="day-wrapper"
         @touchmove.prevent="scrollCalendar('touch')"
         @touchend="stopScroll('touch')"
         @mousedown="mouseDown = true"
         @mousemove.prevent="scrollCalendar('mouse')"
         @mouseup="stopScroll('mouse')"
    >
      <ul :class="[
          'calendar__day',
           {'calendar--animation1': scrollState === 1},
           {'calendar--animation2': scrollState === 2},
           {'calendar--animation3': scrollState === 3}
          ]"
      >
        <li class="null-slot" v-for="i in dayStart" :key="i"></li>
        <li class="day__item" v-for="day in daysInMonth" :key="day">
          <button :class="[
            'day__wrapper',
            {'day--select': day === selectedDay},
            {'today': day === currentDay && selectedDay !== currentDay && currentMonth === changedMonth}
            ]"
                  :disabled="day < currentDay && currentMonth === changedMonth"
                  @click="selectDay(day)"
          >
            {{ day }}
          </button>
        </li>
      </ul>
    </div>
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
    const changedMonth = ref(date.getMonth() + 1);
    const currentYear = ref(date.getFullYear());

    const dayStart = computed(() => {
      return new Date(currentYear.value, changedMonth.value - 1, 0).getDay()
    })

    const selectedDay = ref(currentDay);

    const daysInMonth = computed(() => {
      return new Date(currentYear.value, changedMonth.value, 0).getDate();
    })

    function selectDay(day) {
      selectedDay.value = day;

      emitDate();
    }

    function emitDate() {
      let month = changedMonth.value;
      if(String(changedMonth.value).length < 2) {
        month = '0' + changedMonth.value;
      }

      const value = selectedDay.value + '.' + month + '.' + currentYear.value;

      emit('newDate', value)
    }
    emitDate();

    const firstTouch = ref(0);
    const scrollThrow = ref(false);
    const scrollState = ref(0);
    const mouseDown = ref(false);

    function scrollCalendar(type) {

      if(mouseDown.value && type === 'mouse') {

        console.log('asd')

      } else if (type === 'touch') {
        if(scrollThrow.value) {
          return;
        }

        if(firstTouch.value === 0) {
          firstTouch.value = event.touches[0].screenY;
        } else if(firstTouch.value - event.touches[0].screenY >= 20) {

          scrollState.value = 1;

          setTimeout(() => {
            scrollState.value = 2;
          }, 300)

          setTimeout(() => {
            changeMonth('plus');
            scrollState.value = 3;
          }, 400)

          firstTouch.value = 0;
          scrollThrow.value = true;

          setTimeout(() => {
            scrollState.value = 0;
          }, 500)

        } else if(firstTouch.value - event.touches[0].screenY <= -20) {

          scrollState.value = 3;

          setTimeout(() => {
            scrollState.value = 2;
          }, 300)

          setTimeout(() => {
            changeMonth('minus');
            scrollState.value = 1;
          }, 400)

          firstTouch.value = 0;
          scrollThrow.value = true;

          setTimeout(() => {
            scrollState.value = 0;
          }, 500)
        }
      }

      selectedDay.value = -1;
      console.log(selectedDay.value)

    }

    function stopScroll(type) {
      if(type === 'mouse') {
        mouseDown.value = false;
      } else {
        scrollThrow.value = false;
      }
    }

    function changeMonth(side) {
      if(side === 'plus') {
        if(changedMonth.value === 11) {
          currentYear.value += 1;
          changedMonth.value = 0;
        } else {
          changedMonth.value += 1;
        }
      } else {
        if(changedMonth.value === 0) {
          currentYear.value -= 1;
          changedMonth.value = 11;
        } else {
          changedMonth.value -= 1;
        }
      }
    }

    const translateMonth = computed(() => {
      const month = new Date(currentYear.value, changedMonth.value - 1);
      return month.toLocaleString('default', { month: 'long' })
    })

    return {
      weekList,
      daysInMonth,
      currentDay,
      selectedDay,
      currentMonth,
      changedMonth,
      dayStart,
      selectDay,
      scrollCalendar,
      stopScroll,
      scrollState,
      mouseDown,
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

.day-wrapper {
  position: relative;
  height: 295px;
  overflow: hidden;
}

.calendar__day {
  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 15px;

  width: 100%;
  margin-top: 25px;
  transition: .5s all ease;
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

.calendar--animation1 {
  top: -100%;
}

.calendar--animation2 {
  display: none;
}

.calendar--animation3 {
  top: 100%;
}
</style>