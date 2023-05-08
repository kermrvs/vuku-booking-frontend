<template>
  <div class="person-info-wrapper">
    <div>
      <h5>Fult navn</h5>
      <va-input v-model="listInputs.field1" placeholder="Velg ønsket dato" class="text-fieled rounded-lg" variant="outlined"></va-input>
    </div>
    <div>
      <h5>Telefonnummer</h5>
      <va-input v-model="listInputs.field2" placeholder="Velg ønsket dato"  class="text-fieled" variant="outlined"></va-input>
    </div>
    <div>
      <h5>E-post</h5>
      <va-input v-model="listInputs.field3" placeholder="Velg ønsket dato"  class="text-fieled" variant="outlined"></va-input>
    </div>
    <div>
      <h5>Regnummer / chasisnr</h5>
      <va-input v-model="listInputs.field4" placeholder="Velg ønsket dato"  class="text-fieled" variant="outlined"></va-input>
    </div>
    <div>
      <h5>KM-stand</h5>
      <va-input v-model="listInputs.field5" placeholder="Velg ønsket dato"  class="text-fieled" variant="outlined"></va-input>
    </div>
    <div>
      <h5>Melding til verkstedet</h5>
      <va-input
        v-model="listInputs.field6"
        type="textarea"
        placeholder="Text"
        class="text-area"
        autosize
      ></va-input>
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
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
  })
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
    :deep .va-input-wrapper__text {
      font-family: 'Poppins', sans-serif !important;
      font-style: normal !important;
      font-weight: 400 !important;
      font-size: 16px !important;
    }
  }

  .text-area {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    color: $text;

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
  border: 1px solid #D0D0D0;
  border-radius: 8px;
  --va-input-wrapper-border-color: none;
}
</style>