<template>
  <div class="person-info-wrapper">
    <div>
      <h5>Fult navn</h5>
      <va-input placeholder="Velg ønsket dato" class="text-fieled rounded-lg" variant="outlined"></va-input>
    </div>
    <div>
      <h5>Telefonnummer</h5>
      <va-input placeholder="Velg ønsket dato"  class="text-fieled" variant="outlined"></va-input>
    </div>
    <div>
      <h5>E-post</h5>
      <va-input placeholder="Velg ønsket dato"  class="text-fieled" variant="outlined"></va-input>
    </div>
    <div>
      <h5>Regnummer / chasisnr</h5>
      <va-input placeholder="Velg ønsket dato"  class="text-fieled" variant="outlined"></va-input>
    </div>
    <div>
      <h5>KM-stand</h5>
      <va-input placeholder="Velg ønsket dato"  class="text-fieled" variant="outlined"></va-input>
    </div>
    <div>
      <h5>Melding til verkstedet</h5>
      <v-textarea
        type="textarea"
        placeholder="Text"
        class="text-fieled"
        variant="outlined"
        auto-grow
        autosize
      ></v-textarea>
    </div>
    <div class="d-flex flex-column">
      <v-checkbox v-model="checkbox" color="black" value="1" label="Bekreft vår privacy police for å bruke vår booking tjeneste"></v-checkbox>
      <v-checkbox v-model="checkbox" color="black" value="2" label="Bekreft om du ønsker viktig info og reklame fra oss"></v-checkbox>
    </div>
  </div>
</template>

<script setup>
  const checkbox = ref([])
</script>

<style lang="scss" scoped>
.person-info-wrapper {
  margin-top: 16px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 16px;

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
      border: 1px solid #D0D0D0;
      border-radius: 8px;
    }
    :deep .va-input-wrapper__field {
      height: 100%;

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

  }
}
</style>