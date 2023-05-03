import {defineStore} from 'pinia';

export const useDateStore = defineStore('date', () => {
  const selectedDate = ref(new Date)
  function setDate(date) {
    selectedDate.value = date;
  }

  return { setDate, selectedDate }
})