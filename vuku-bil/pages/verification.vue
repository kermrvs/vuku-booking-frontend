<template>
  <div class="phone-wrapper">
    <div class="header-wrapper">
      <div>Autorisasjon</div>
      <div>
        <v-img src="/close.svg" class="close-btn"/>
      </div>
    </div>
    <p>En bekreftelseskode ble sendt til nummer
      <br/>
      <span>+47 111 111 11 11</span></p>
    <div class="input-wrapper">
      <label class="telephone-label">Verifiseringskode på sms</label>
      <v-text-field
        placeholder="Skriv inn en kode"
        variant="outlined"
        rounded="123"
        class="my-input"
      >
      </v-text-field>
    </div>
    <div class="d-flex justify-center">
      <v-btn class="phone-btn" @click="toVerification">Bekrefte</v-btn>
    </div>
    <div class="code-wrapper-helper">
      <div class="send-code">Send Kode Igjen</div>
      <div class="number">Endre telefonnummer</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})
const router = useRouter()

function toVerification()  {
  router.push('/order')
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