import {defineStore} from 'pinia';

export const useDateStore = defineStore('date', () => {
  const selectedDate = ref([
    {
      time: '09:00',
      select: false
    },
    {
      time: '09:30',
      select: false
    },
    {
      time: '10:00',
      select: false
    },
    {
      time: '10:30',
      select: false
    },
    {
      time: '11:00',
      select: false
    },
    {
      time: '11:30',
      select: false
    },
    {
      time: '12:00',
      select: false
    },
    {
      time: '12:30',
      select: false
    },
    {
      time: '13:00',
      select: false
    },
    {
      time: '13:30',
      select: false
    },
    {
      time: '14:00',
      select: false
    },
    {
      time: '14:30',
      select: false
    },
    {
      time: '15:00',
      select: false
    },
    {
      time: '15:30',
      select: false
    },
    {
      time: '16:00',
      select: false
    },
    {
      time: '16:30',
      select: false
    },
    {
      time: '17:00',
      select: false
    },
    {
      time: '17:30',
      select: false
    },
    {
      time: '18:00',
      select: false
    },
  ])
  function setDate(date) {
    selectedDate.value = date;
  }

  return { setDate, selectedDate }
})