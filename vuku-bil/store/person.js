import {defineStore} from 'pinia';

export const usePersonStore = defineStore('person', () => {
  let personInfo = ref([])
  let selectedTime = ref('')
  let selectedServices = ref([])

  function setPersonInfo(value) {
    personInfo.value.push(value)
  }

  function setTime(value) {
    selectedTime.value = value
  }

  function setService(value) {
    selectedServices.value.push(value)
  }

  function clearService() {
    selectedServices.value = []
  }

  function clearTime() {
    selectedTime.value = ''
  }
  function clearInfo() {
    personInfo.value = []
  }


  return {
    personInfo,
    setPersonInfo,
    selectedTime,
    setTime,
    selectedServices,
    setService,
    clearService,
    clearTime,
    clearInfo
  }
})