<template>
  <div class="phone-wrapper">
    <div class="header-wrapper">
      <div>Tjenestebestilling</div>
      <div @click="back()">
        <v-img src="/close.svg" class="close-btn"/>
      </div>
    </div>
    <p class="sub-header-text">Velg tjenestene du trenger og fyll inn nødvendige data</p>
    <v-expansion-panels class="my-list" v-model="panel" multiple>
      <v-expansion-panel class="mt-0" v-for="(item,index) in panels" :key="index"  :disabled="item.component !== currentStep" @click="open" :value="item.component">
        <v-expansion-panel-title>
          <div class="d-flex title">
            <div class="circle">
              {{ index + 1 }}
            </div>
            {{item.title}}
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div v-if="item.component === 'Service'">
            <service :services="services" v-show="currentStep === item.component"/>
            <div class="d-flex justify-space-between mt-4" v-if="currentStep !== 'Service'">
              <div class="total-title">{{lengthOfChecked}} tjenester for beløpet</div>
              <div class="total-price">1490,-</div>
            </div>
          </div>
          <div v-else-if="item.component === 'Time'" class="time-picker-wrapper">
            <div>
              <div class="black-sheet" v-if="isOpenModal">
              </div>
              <date-picker
                v-model="date"
                :min-date="new Date()"
                :enable-time-picker="false"
                format="dd MMM yyyy"
                auto-apply
                week-start="0"
                class="date"
                teleport-center
                :clearable="false"
                calendar-cell-class-name="dp-custom-cell"
                v-show="currentStep === item.component"
                @open="openModal"
                @closed="closeModal"
              >
              </date-picker>
              <div class="d-flex justify-space-between mt-4" v-if="currentStep !== 'Time'">
                <div class="total-title">Valgt dato</div>
                <div class="total-price">{{currentData}}</div>
              </div>
            </div>
            <time-picker
              v-show="currentStep === item.component"
              :selectedTime="date"
              v-model="selectedTime"
            ></time-picker>
          </div>
          <div v-else-if="item.component === 'Person'">
            <person-info
              v-show="currentStep === item.component"
            ></person-info>
          </div>
          <div class="d-flex justify-center">
            <v-btn class="next-btn" variant="flat" v-if="(item.component === 'Service' || item.component === 'Time') && !item.isSave" @click="nextStep(item.component,index), item.isSave = true">Fortsette</v-btn>
            <v-btn class="next-btn" variant="flat" v-else-if="item.component === 'Person'" @click="next('/success')">Booking</v-btn>
          </div>
          <div v-if="item.isSave" class="d-flex justify-center flex-column">
            <v-btn class="prev-btn" variant="outlined" @click="openOnEdit(item, index)">Endring</v-btn>
            <v-divider class="mt-4"></v-divider>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider class="mt-0 divider" :class="{'mt-4': (currentStep === 'Person' && line)}"></v-divider>
  </div>
</template>

<script setup>
import format from 'date-fns/format'
import useBack from '~/composables/useBack';
import {useDateStore} from '~/store';

definePageMeta({
  layout: 'order'
})
const { back, next } = useBack()
const date = ref(new Date)
const panel = ref(['Service'])
let currentStep = ref('Service')
const panels = ref([
  {
    title: 'Tjenester',
    component: 'Service',
    isSave: false,
  },
  {
    title: 'Tidspunkt',
    component: 'Time',
    isSave: false,
  },
  {
    title: 'Personinformasjon',
    component: 'Person',
    isSave: false,
  },
  ])
const services = ref([
  {
    title: 'EU-kontroll opp til 3500kg. Titlen kan ta opp til 2 linjer.',
    text: 'Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.',
    price: '1490,-',
    checked: false,
  },
  {
    title: 'EU-kontroll opp til 3500kg. Titlen kan ta opp til 2 linjer.',
    text: 'Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.',
    price: '1490,-',
    checked: false,
  },
  {
    title: 'EU-kontroll opp til 3500kg. Titlen kan ta opp til 2 linjer.',
    text: 'Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.',
    price: '1490,-',
    checked: false,
  },
  {
    title: 'EU-kontroll opp til 3500kg. Titlen kan ta opp til 2 linjer.',
    text: 'Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.',
    price: '1490,-',
    checked: false,
  },
])
const lengthOfChecked = ref(0)
const router = useRouter()
let isOpenModal = ref(false)
const currentData = computed(() => {
  return format(date.value,'dd MMM yyyy')
})

const store = useDateStore()
const listOfTime = toRef(store, 'selectedDate')
const selectedTime = ref('')

watch(date, (newVal, oldVal) => {
  listOfTime.value.forEach(el => {
    el.select = false
  })
})

const line = computed(() => {
  return panel.value.some(el => el === 'Person');
})
function nextStep(step, index) {
  if(step === 'Service') {
    const timeStep = panels.value.find(el => el.component === 'Time')
    lengthOfChecked.value = services.value.filter(el => el.checked).length

    if(timeStep.isSave){
      currentStep.value = 'Person'
      open('Person')
    } else {
      currentStep.value = 'Time'
      open('Time')
    }
  } else if(step === 'Time') {
    currentStep.value = 'Person'
    open('Person')
  }
}

function open(index) {
  panel.value.push(index)
}

function close(index) {
  panel.value.splice(index,1)
}

function openOnEdit(step) {
  panels.value.forEach((el,index) => {
    if(!el.isSave) {
      close(panel.value.indexOf(el.component))
    }
    if(el.component === step.component) {
      currentStep.value = step.component
      el.isSave = false;
    }
  })
}

function openModal() {
  isOpenModal.value = true
}

function closeModal() {
  isOpenModal.value = false
}
</script>

<style lang="scss" scoped>

.phone-wrapper {
  font-family: 'Poppins', sans-serif;
  font-style: normal;

  :deep .v-expansion-panel-title__overlay {
    opacity: 0;
  }

  .sub-header-text {
    font-weight: 400;
    font-size: 14px;
    color: #000000;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 600;
    font-size: 18px;

    .close-btn {
      width: 13px;
      height: 13px;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 16px;
  }

  .input-wrapper {
    margin-top: 36px;
    .telephone-label {
      font-weight: 600;
      font-size: 14px;
      color: $text;
    }

    .my-input {
      margin-top: 8px;
    }
  }

  .phone-btn {
    margin-top: 28px;
    min-width: 343px;
    height: 52px;
    background: $primary;
    border-radius: 100px;
    font-weight: 600;
    font-size: 16px;
  }

  .title {
    gap: 12px;
    font-weight: 600;
    font-size: 16px;
    color: $text;
    align-items: center;
    transform: translateX(-21px);

    .circle {
      background: $primary;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .next-btn {
    width: 343px;
    height: 44px;
    background: $primary;
    border-radius: 100px;
    font-weight: 600;
    font-size: 16px;
    margin-top: 16px;
  }

  .prev-btn {
    width: 343px;
    height: 44px;
    background: #FFFFFF;
    border-radius: 100px;
    font-weight: 600;
    font-size: 16px;
    margin-top: 16px;
  }

  .time-picker-wrapper {
    margin-top: 16px;

    .date {
      position: relative;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      :deep .dp__input {
        font-family: 'Poppins', sans-serif;
      }

      :deep .dp__menu_index {
        z-index: 200 !important;
        border-radius: 13px !important;
      }

      :deep .dp__input_icons {
        //display: none;
      }

      :deep .dp__input_wrap {
        svg {
          width: 22px;
          height: 22px;
        }
      }

      :deep .dp__input_icon {
        right: 0;
        left: initial;
        //left: 100%;
      }

      :deep .dp__input_icon_pad {
        padding: 14px 0 14px 12px;
        border: 1px solid #D0D0D0;
        border-radius: 8px;
        background: #FFFFFF;
      }
    }
  }
}
:deep .v-expansion-panel__shadow {
  box-shadow: none;
}

.v-expansion-panel-text:deep .v-expansion-panel-text__wrapper {
  padding: 0;
}

:deep .v-expansion-panel-title__icon {
  display: none;
}

.dp-custom-cell {
  border-radius: 50% !important;
  background: $primary !important;
}

:deep .dp__active_date {
  background: $primary !important;
}

:deep .dp__cell_inner {
  border-radius: 50% !important;
}
:deep .dp__today {
  border: 1px solid $primary;
}

:deep .black-shift {
  position: absolute;
  background: rgba(0, 0, 0, 0.35);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
}

:deep .dp__inner_nav {
  svg {
    fill: #007AFF!important;
    width: 23px;
    height: 30px;
  }
}

.total-title {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  color: #8C8C8C;
}

.total-price {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
}

</style>