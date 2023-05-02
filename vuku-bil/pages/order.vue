<template>
  <div class="phone-wrapper">
    <div class="header-wrapper">
      <div>Tjenestebestilling</div>
      <div>
        <v-img src="/close.svg" class="close-btn"/>
      </div>
    </div>
    <p>Velg tjenestene du trenger og fyll inn nødvendige data</p>
    <v-expansion-panels class="my-list" v-model="panel" multiple>
      <v-expansion-panel v-for="(item,index) in panels" :key="index"  :disabled="item.component !== currentStep" @click="open" :value="item.component">
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
          </div>
          <div v-else-if="item.component === 'Time'" class="time-picker-wrapper">
            <date-picker
              v-model="date"
              :min-date="new Date()"
              :enable-time-picker="false"
              format="dd MMM yyyy"
              class="date"
              teleport-center
              calendar-cell-class-name="dp-custom-cell"
              v-show="currentStep === item.component"
            >
            </date-picker>
            <time-picker  v-show="currentStep === item.component"></time-picker>
          </div>
          <div v-else-if="item.component === 'Person'">
            <person-info
              v-show="currentStep === item.component"
            ></person-info>
          </div>
          <div class="d-flex justify-center">
            <v-btn class="next-btn" v-if="(item.component === 'Service' || item.component === 'Time') && !item.isSave" @click="nextStep(item.component,index), item.isSave = true">Fortsette</v-btn>
            <v-btn class="next-btn" v-else-if="item.component === 'Person'" @click="toVerification">Booking</v-btn>
          </div>
          <div v-if="item.isSave" class="d-flex justify-center">
            <v-btn class="prev-btn" @click="openOnEdit(item, index)">Endring</v-btn>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider class="mt-4"></v-divider>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'order'
})
const date = ref()
const panel = ref([])
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
const router = useRouter()

function toVerification() {
  router.push('/success')
}

function nextStep(step, index) {
  if(step === 'Service') {
    currentStep.value = 'Time'
    open('Time')
  } else if(step === 'Time') {
    currentStep.value = 'Person'
    open('Person')
  }
}

function open(index) {
  panel.value.push(index)
}

function close(index) {
  panel.value.push(index)
}

function openOnEdit(step) {
  // if(step === 'Service') {
  //   currentStep.value = 'Time'
  //   open(index + 1)
  // } else if(step === 'Time') {
  //   currentStep.value = 'Person'
  //   open(index + 1)
  // }
  panels.value.forEach((el,index) => {
    if(el.component === step.component) {
      currentStep.value = step.component
      el.isSave = false;
    }
  })
}

</script>

<style lang="scss" scoped>

.phone-wrapper {
  font-family: 'Poppins', sans-serif;
  font-style: normal;

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
    margin-bottom: 36px;
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
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      :deep .dp__input {
        font-family: 'Poppins', sans-serif;
      }

      :deep .dp__input_icons {
        //display: none;
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

.dp-custom-cell {
  border-radius: 50%;
  background: $primary;
}

</style>