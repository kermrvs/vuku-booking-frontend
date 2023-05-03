<template>
  <div class="last-wrapper">
    <div>
      <v-img src="/main-1.jpg" class="main-img"></v-img>
    </div>
    <h5 class="mt-6">Takk for din bestilling!</h5>
    <p class="mt-2 text-center main-text">Du vil få en bekreftelse på SMS så snart vår verksteds-mester har fått sett på din booking. Du bil også få tilsendt en påminnelse dagen før din time.</p>
    <div class="divider"></div>
    <h5 class="mt-7 basket-title">Tjenester</h5>
    <div class="d-flex justify-space-between service">
      <div class="service-name">EU-kontroll opp til 3500kg</div>
      <div class="price">1490,-</div>
    </div>
    <div class="d-flex justify-space-between service">
      <div class="service-name">EU-kontroll opp til 3500kg</div>
      <div class="price">1490,-</div>
    </div>
    <div class="d-flex justify-space-between service">
      <div class="total">Total</div>
      <div class="total-price">1490,-</div>
    </div>
    <h5 class="basket-title mt-2">Tidspunkt</h5>
    <div class="d-flex service justify-space-between service">
      <div class="service-name">Valgt dato</div>
      <div class="price">22 april 2023</div>
    </div>
    <div class="info-block">
      <h5 class="basket-title">Personinformasjon</h5>
      <div class="main-text">Cameron Williamson</div>
      <div class="main-text">+47 111 111 111 11</div>
      <div class="main-text">qwertyu@gmail.com</div>
      <div class="main-text">Regnummer / chasisnr</div>
      <div class="main-text">KM-stand</div>
    </div>

  </div>
</template>

<script>
definePageMeta({
  layout: 'last'
})
</script>

<style lang="scss" scoped>

.last-wrapper {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12px;

  .main-img {
    width: 148px;
    height: 104px;
  }

  .main-text {
    font-weight: 400;
    font-size: 14px;
    color: #000000;
  }

  h5 {
    font-weight: 600;
    font-size: 16px;
    color: $text;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  .divider {
    background: #D0D0D0;
    width: 100%;
    height: 1px;
    margin-top: 12px;
    margin-bottom: 28px;
  }

  .service {
    width: 100%;
    align-items: center;

    .service-name {
      font-weight: 400;
      font-size: 14px;
      color: #8C8C8C;
      margin-top: 12px;
    }

    .total {
      font-weight: 400;
      font-size: 14px;
      color: $text;
      margin-top: 14px;
    }

    .total-price {
      font-weight: 600;
      font-size: 16px;
      color: #000000;
    }

    .price {
      font-weight: 600;
      font-size: 14px;
      color: #000000;
    }
  }

  .basket-title {
    width: 100%;
    margin-top: 0 !important;
  }

  .info-block {
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: flex-start;
  }
}

</style>