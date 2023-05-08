<template>
  <v-dialog max-width="300" v-model="props.modelValue" @click="$emit('update:modelValue', false)">
    <v-card width="300">
      <v-container class="d-flex justify-center text-center flex-column body-form">
        <p>Closing this form will redirect you to the main page without saving the entered data. Do you really want to close this page?
        </p>
        <div class="d-flex justify-space-between">
          <v-btn class="yes-btn" variant="flat" @click="toMain">YES</v-btn>
          <v-btn class="no-btn" variant="outlined" @click="$emit('update:modelValue', false)">NO</v-btn>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script setup>
import useBack from '~/composables/useBack';

const props = defineProps(['modelValue']);
const {back} = useBack()

function toMain () {
  back()
}
</script>

<style lang="scss" scoped>

.body-form {
  font-family: 'Poppins', sans-serif;
  color: #000000;

  p {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .yes-btn {
    background: $primary;
  }
}
</style>