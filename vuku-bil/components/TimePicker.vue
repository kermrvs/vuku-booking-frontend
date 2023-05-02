<template>
  <div class="time-wrapper">
    <div
      class="time-item"
      :class="{'is-active': item.select}"
      v-for="(item,index) in listOfTime"
      :key="index"
      @click="selectTime(index)"
    >
      {{item.hours}}:{{item.minutes}}{{item.type}}
    </div>
  </div>
</template>

<script setup>

const listOfTime = ref([])

formatAMPM()
function formatAMPM() {
  for(let i=0; i<24;i++) {
    let hours = i;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    listOfTime.value.push({hours: hours, minutes: '00', type: ampm, select: false, sortIndex: i})
    listOfTime.value.push({hours: hours, minutes: 30, type: ampm, select: false, sortIndex: i})
  }

  listOfTime.value.sort(function(a, b) {
    if (a.sortIndex > b.sortIndex) {
      return 1;
    }
    if (a.sortIndex < b.sortIndex) {
      return -1;
    }
    return 0;
  });
}

function selectTime(index) {
  listOfTime.value.forEach(el => {
    el.select = false;
  })
  listOfTime.value[index].select = true;
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
    background: #F4F4F4;
    border: 1px solid #D0D0D0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: rgba(255, 204, 0, 0.1);
      border: 1px solid $primary;
      border-radius: 8px;
    }
  }
}

.is-active {
  background: rgba(255, 204, 0, 0.1) !important;
  border: 1px solid $primary !important;
  border-radius: 8px !important;
}
</style>