<template>
  <div class="last-wrapper">
    <div>
      <v-img src="/main-1.jpg" class="main-img"></v-img>
    </div>
    <h5 class="mt-6">Takk for din bestilling!</h5>
    <p class="mt-3 text-center main-text">Du vil få en bekreftelse på SMS så snart vår verksteds-mester har fått sett på din booking. Du bil også få tilsendt en påminnelse dagen før din time.</p>
    <div class="divider mt-4"></div>
    <h5 class="mt-5 basket-title">Tjenester</h5>
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
    <h5 class="basket-title mt-4">Tidspunkt</h5>
    <div class="d-flex service justify-space-between service">
      <div class="service-name">Valgt dato</div>
      <div class="price">22 Apr 2023 17:45</div>
    </div>
    <div class="info-block">
      <h5 class="basket-title mb-3">Personinformasjon</h5>
      <div class="main-text">Cameron Williamson</div>
      <div class="main-text">+47 111 111 111 11</div>
      <div class="main-text">qwertyu@gmail.com</div>
      <div class="main-text">Regnummer / chasisnr</div>
      <div class="main-text">KM-stand</div>
    </div>

    <div class="d-flex justify-center mt-16">
      <v-btn width="187" height="79" rounded="0" variant="tonal" class="tilbake-btn">TILBAKE TIL START</v-btn>
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
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    margin-bottom: 4px;
  }

  h5 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: $text;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  .divider {
    background: #D0D0D0;
    width: 100%;
    height: 1px;
    margin-top: 12px;
  }

  .service {
    width: 100%;
    align-items: center;

    .service-name {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: #8C8C8C;
      margin-top: 12px;
    }

    .total {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: $text;
      margin-top: 14px;
    }

    .total-price {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 16px;
      color: #000000;
    }

    .price {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 14px;
      color: #000000;
    }
  }

  .basket-title {
    width: 100%;
  }

  .info-block {
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: flex-start;
  }

  .tilbake-btn {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

  }
}

</style>