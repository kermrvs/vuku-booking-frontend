<template>
  <div class="person-info-wrapper">
    <div>
      <h5>Fult navn</h5>
      <v-text-field placeholder="Velg ønsket dato" class="text-fieled"></v-text-field>
    </div>
    <div>
      <h5>Telefonnummer</h5>
      <v-text-field placeholder="Velg ønsket dato"  class="text-fieled"></v-text-field>
    </div>
    <div>
      <h5>E-post</h5>
      <v-text-field placeholder="Velg ønsket dato"  class="text-fieled"></v-text-field>
    </div>
    <div>
      <h5>Regnummer / chasisnr</h5>
      <v-text-field placeholder="Velg ønsket dato"  class="text-fieled"></v-text-field>
    </div>
    <div>
      <h5>KM-stand</h5>
      <v-text-field placeholder="Velg ønsket dato"  class="text-fieled"></v-text-field>
    </div>
    <div>
      <h5>Melding til verkstedet</h5>
      <v-textarea placeholder="Text"  class="text-fieled"></v-textarea>
    </div>

    <v-checkbox v-model="checkbox" color="black" value="1" label="Bekreft vår privacy police for å bruke vår booking tjeneste" append-icon="success"></v-checkbox>
    <v-checkbox v-model="checkbox" color="black" value="2" label="Bekreft om du ønsker viktig info og reklame fra oss"></v-checkbox>
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

  h5 {
    font-weight: 600;
    font-size: 14px;
    color: $text;
  }

  .text-fieled {
    font-weight: 400;
    font-size: 16px;
    color: $text;
  }
}
</style>