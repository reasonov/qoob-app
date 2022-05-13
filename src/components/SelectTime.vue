<template>
  <div class="select-time">

    <div class="time__block">
      <p class="time__title title--small">Утро</p>
      <ul class="time__list">
        <li v-for="(item, index) in filteredList(0, 11)" :key="index">
          <button
              :class="['time__item', {'time--selected': currentTime === item.id}]"
              :disabled="item.close"
              @click="setTime(item.id)"
          >
            {{ item.time }}
          </button>
        </li>
      </ul>
    </div>

    <div class="time__block">
      <p class="time__title title--small">День</p>
      <ul class="time__list">
        <li v-for="(item, index) in filteredList(12, 16)" :key="index">
          <button
              :class="['time__item', {'time--selected': currentTime === item.id}]"
              :disabled="item.close"
              @click="setTime(item.id)"
          >
            {{ item.time }}
          </button>
        </li>
      </ul>
    </div>

    <div class="time__block">
      <p class="time__title title--small">Вечер</p>
      <ul class="time__list">
        <li v-for="(item, index) in filteredList(17, 23)" :key="index">
          <button
              :class="['time__item', {'time--close': item.close}, {'time--selected': currentTime === item.id}]"
              :disabled="item.close"
              @click="setTime(item.id)"
          >
            {{ item.time }}
          </button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "SelectTime",
  setup(props, { emit }) {

    const timeList = [
      {
        id: 0,
        time: '9:00',
        close: false
      },
      {
        id: 1,
        time: '10:00',
        close: true
      },
      {
        id: 2,
        time: '11:00',
        close: false
      },
      {
        id: 3,
        time: '11:30',
        close: true
      },
      {
        id: 4,
        time: '11:45',
        close: true
      },
      {
        id: 5,
        time: '12:00',
        close: false
      },
      {
        id: 6,
        time: '13:00',
        close: false
      },
      {
        id: 7,
        time: '13:30',
        close: true
      },
      {
        id: 8,
        time: '14:40',
        close: true
      },
      {
        id: 9,
        time: '16:00',
        close: false
      },
      {
        id: 10,
        time: '17:00',
        close: true
      },
      {
        id: 11,
        time: '17:30',
        close: false
      },
      {
        id: 12,
        time: '18:30',
        close: false
      },
      {
        id: 13,
        time: '19:00',
        close: true
      },
      {
        id: 14,
        time: '20:15',
        close: false
      }
    ]

    function filteredList(minVal, maxVal) {
      const list = [];

      timeList.forEach((item) => {
        if(Number(item.time.slice(0, -3)) > maxVal) {
          return;
        } else if(Number(item.time.slice(0, -3)) < minVal) {
          return;
        } else {
          list.push(item);
        }
      })

      return list
    }

    const currentTime = ref(-1);

    function setTime(val) {
      currentTime.value = val;

      emit('newTime', timeList[val].time);
    }

    return { filteredList, currentTime, setTime }

  }
}
</script>

<style scoped>
.select-time {
  margin-top: 15px;

  background-color: #fff;
}

.time__block {
  margin-bottom: 10px;
}

.time__title {
  padding-left: 20px;
}

.time__list {
  display: flex;
  padding-left: 20px;
  overflow-x: scroll;
}

.time__list::-webkit-scrollbar {
  display: none;
}

.time__item {
  width: 64px;
  height: 40px;
  margin-right: 10px;

  border-radius: 6px;
  border: 1px solid #F0F3F8;
  transition: .3s all ease;

  font-size: 14px;
}

.time__item:disabled {
  border: none;

  color: #c5c7ca;

  background-color: #F6F9FC;
}

.time--selected {
  border: none;
  background-color: #FED47A;
}
</style>