<template>
  <div class="phone-wrapper">
    <div class="header-wrapper">
      <div>Autorisasjon</div>
      <div @click="back">
        <v-img src="/close.svg" class="close-btn"/>
      </div>
    </div>
    <p>For å fortsette må du logge inn</p>
    <div class="input-wrapper">
      <label class="telephone-label">Telefonnummer</label>
      <va-input
        v-model="telephone"
        placeholder="+ 47"
        outline
        class="my-input"
        :rules="[(v) => v.length > 4 || `Error`]"
      >
      </va-input>
    </div>
    <div class="d-flex justify-center">
      <v-btn class="phone-btn" variant="flat" @click="next('/verification')">Fortsette</v-btn>
    </div>
  </div>
</template>

<script setup>
import useBack from '~/composables/useBack';

definePageMeta({
  layout: 'auth'
})
const {back, next} = useBack()
let telephone = ref('')

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
      width: 100%;
      color: #8C8C8C;
      :deep .va-input-wrapper__container {
        height: 52px;
        //border: 1px solid #D0D0D0;
        border-radius: 8px;
      }

      :deep .va-icon {
        display: none;
      }

      :deep .va-input-wrapper__field {
        height: 100%;
        border: 1px solid #D0D0D0;
        border-radius: 8px;
      }
      :deep .va-input-wrapper__text {
        font-family: 'Poppins', sans-serif !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
      }
    }
  }

  .phone-btn {
    margin-top: 28px;
    min-width: 343px;
    height: 52px;
    width: 100%;
    background: $primary;
    border-radius: 100px;
    font-weight: 600;
    font-size: 16px;
  }
}

:deep .va-input-wrapper--focused {
  background: #FFFFFF;
  //border: 1px solid #D0D0D0;
  border-radius: 8px;
  --va-input-wrapper-border-color: none;
}
</style>