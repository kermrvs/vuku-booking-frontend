<template>
  <div class="phone-wrapper">
    <div class="header-wrapper">
      <div>Autorisasjon</div>
      <div @click="back">
        <v-img src="/close.svg" class="close-btn"/>
      </div>
    </div>
    <p>En bekreftelseskode ble sendt til nummer
      <br/>
      <span>+47 111 111 11 11</span></p>
    <div class="input-wrapper">
      <label class="telephone-label">Verifiseringskode på sms</label>
      <va-input
        placeholder="Skriv inn en kode"
        outlined
        class="my-input"
      >
      </va-input>
    </div>
    <div class="d-flex justify-center">
      <v-btn class="phone-btn" variant="flat" @click="next('/order')">Bekrefte</v-btn>
    </div>
    <div class="code-wrapper-helper">
      <div class="send-code">Send Kode Igjen</div>
      <div class="number">Endre telefonnummer</div>
    </div>
  </div>
</template>

<script setup>
import useBack from '~/composables/useBack';

definePageMeta({
  layout: 'auth'
})
const {back, next} = useBack()

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

    span {
      font-weight: 600;
      font-size: 14px;
    }
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
      //color: #8C8C8C;
      background: #FFFFFF !important;
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

  .code-wrapper-helper {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    align-items: center;
    .send-code {
      font-weight: 600;
      font-size: 14px;
      color: $grey;
    }

    .number {
      font-weight: 600;
      font-size: 14px;
      color: $grey;
    }
  }
}

</style>