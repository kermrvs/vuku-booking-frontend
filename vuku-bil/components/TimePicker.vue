<template>
  <div class="time-wrapper">
    <div
      class="time-item"
      :class="{'is-active': item.select, 'is-disabled': checkOnTime(item)}"
      v-for="(item,index) in listOfTime"
      :key="index"
      @click="selectTime(item,index)"
    >
       {{item.time}}
    </div>
  </div>
</template>

<script setup>
import times from '@/entities/times';

const props = defineProps(['selectedTime','modelValue'])
const emits = defineEmits(['update:modelValue'])
const listOfTime = ref(times)

function checkOnTime(item) {
  const times = item.time.split(':')
  console.log(props)
  const date = props.selectedTime;
  const date1 = new Date();
  date1.setHours(times[0])
  date1.setMinutes(times[1])
  if(date.getTime() > new Date().getTime()) {
    return 0;
  }
  if(date.getTime() > date1.getTime()) {
    return 1
  }
  return 0;
}

function selectTime(item,index) {
  if(!checkOnTime(listOfTime.value[index])) {
    listOfTime.value.forEach(el => {
      el.select = false;
    })
    listOfTime.value[index].select = true;
    emits('update:modelValue', item.time)
  }
}

</script>

<style lang="scss" scoped>
.time-wrapper {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  height: 220px;
  overflow: hidden;
  overflow-y: scroll;

  .time-item {
    width: 106px;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid #D0D0D0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;

    &:hover {
      background: rgba(255, 204, 0, 0.1);
      border: 1px solid $primary;
      border-radius: 8px;
    }
  }
}

.is-disabled {
  background: #F4F4F4 !important;
  cursor: default !important;

  &:hover {
    border: 1px solid #D0D0D0 !important;
  }
}

.is-active {
  background: rgba(255, 204, 0, 0.1) !important;
  border: 1px solid $primary !important;
  border-radius: 8px !important;
}
</style>