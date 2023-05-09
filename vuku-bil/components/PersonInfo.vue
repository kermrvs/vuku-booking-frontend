<template>
  <div class="person-info-wrapper">
    <div
      v-for="(item,index) in props.modelValue"
      :key="index"
    >
      <h5>{{item.title}}</h5>
      <va-input
        v-model="item.value"
        :placeholder="item.placeholder"
        class="text-fieled rounded-lg"
        variant="outlined"
        :rules="item.rules"
      ></va-input>
    </div>
    <div>
      <h5>Melding til verkstedet</h5>
      <va-input
        v-model="listInputs.value"
        type="textarea"
        :max-length="100"
        placeholder="Text"
        class="text-area"
        :min-rows="6"
        :max-rows="6"
        :rules="[(v) => v.length < 100 || `Error`]"
      >
      </va-input>
    </div>
    <div class="d-flex flex-column my-checkbox">
      <v-checkbox v-model="checkbox" color="black" value="1" label="Bekreft vår privacy police for å bruke vår booking tjeneste" class="my-style-checkbox"></v-checkbox>
      <v-checkbox v-model="checkbox" color="black" value="2" label="Bekreft om du ønsker viktig info og reklame fra oss" class="my-style-checkbox"></v-checkbox>
    </div>
  </div>
</template>

<script setup>
  const checkbox = ref(['1','2'])
  const listInputs = ref({
    value: ''
  })
  const props = defineProps(['modelValue'])

  // const fields = ref([
  //   {
  //     title: 'Fult navn',
  //     type: 'text',
  //     rules: [(v) => v.length > 4 || `Error`],
  //     placeholder: 'Velg ønsket dato',
  //     value: '',
  //   },
  //   {
  //     title: 'Telefonnummer',
  //     type: 'text',
  //     rules: [(v) => v.length > 4 || `Error`],
  //     placeholder: 'Velg ønsket dato',
  //     value: '+47',
  //   },
  //   {
  //     title: 'E-post',
  //     type: 'text',
  //     rules: [(v) => v.length > 4 || `Error`],
  //     placeholder: 'Velg ønsket dato',
  //     value: '',
  //   },
  //   {
  //     title: 'Regnummer / chasisnr',
  //     type: 'text',
  //     rules: [(v) => v.length > 4 || `Error`],
  //     placeholder: 'Velg ønsket dato',
  //     value: '',
  //   },
  //   {
  //     title: 'KM-stand',
  //     type: 'text',
  //     rules: [(v) => v.length > 4 || `Error`],
  //     placeholder: 'Velg ønsket dato',
  //     value: '',
  //   },
  // ])
</script>

<style lang="scss" scoped>
.person-info-wrapper {
  margin-top: 16px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .my-checkbox {
    .my-style-checkbox {
      transform: translateY(-10px);
      height: 55px;

      :deep .v-input__details {
        display: none;
      }

      :deep .v-label {
        opacity: 1;
        height: 42px;
        transform: translate(-3px, 9px);
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #111111;
      }
    }
  }


  h5 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    color: $text;
  }

  .text-fieled {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    color: $text;

    :deep .va-input-wrapper__container {
      height: 52px;
      //border: 1px solid #D0D0D0;
      border-radius: 8px;
    }
    :deep .va-input-wrapper__field {
      height: 100%;
      border: 1px solid #D0D0D0;
      border-radius: 8px;

      &:after {
        background: none;
      }
    }

    :deep .va-icon {
      display: none;
    }

    :deep .va-message-list {
      margin-top: 8px;
    }

    :deep .va-input-wrapper__text {
      font-family: 'Poppins', sans-serif !important;
      font-style: normal !important;
      font-weight: 400 !important;
      font-size: 16px !important;
    }
  }

  :deep .va-input textarea  {
    resize: none;
  }

  .text-area {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    color: $text;

    :deep .va-icon {
      display: none;
    }

    :deep .va-input-wrapper__container {
      border-radius: 8px;
    }

    :deep .va-input-wrapper__field {
      height: 100%;
      border: 1px solid #D0D0D0;
      border-radius: 8px;

      &:after {
        background: none;
      }
    }
  }
}

:deep .va-input-wrapper--focused {
  background: #FFFFFF;
  //border: 1px solid #D0D0D0;
  border-radius: 8px;
  --va-input-wrapper-border-color: none;
}
</style>