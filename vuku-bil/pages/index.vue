<template>
  <div class="main-wrapper">
    <div>
      <v-img class="main-image" src="/main-1.jpg"/>
      <h5>Online booking</h5>
      <p class="d-flex text-center">Her kan du enkelt velge tjenester og legge inn bookinger enkelt fra din egen stue eller fra hytta.
        Du vil motta en bekreftelses SMS så snart vår
        verkstedsmester har sett på bookingen din. Du får også en påminnelse dagen i forkant av din booking.</p>
      <v-btn class="booking-btn" @click="toPhone">Booking</v-btn>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
function toPhone () {
  router.push('/phone')
}
</script>

<style lang="scss" scoped>
.main-wrapper {

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;

    .main-image {
      width: 148px;
      height: 104px;
    }

    h5 {
      margin: 28px 0 12px;
      font-weight: 600;
      font-size: 16px;
      color: $text;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: $text;
    }

    .booking-btn {
      margin-top: 28px;
      background: $primary;
      font-weight: 600;
      font-size: 16px;
      min-width: 343px;
      height: 52px;
      border-radius: 100px;
      flex: none;
      order: 0;
      flex-grow: 0;
      color: $text;
    }
  }
}
</style>