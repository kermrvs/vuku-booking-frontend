<template>
  <div class="service-block">
    <div
      class="service-wrapper"
      :class="{'is_active': item.checked}"
      v-for="(item,index) in props.services"
      :key="index"
      @click="checkService">
      <v-checkbox-btn
        v-model="item.checked"
        class="flex-row-reverse"
        color="#FFCC00"
        :true-icon="'mdi-checkbox-marked-circle'"
        :false-icon="'mdi-circle-outline'">
        <template #label>
          <div class="body">
            <h5>EU-kontroll opp til 3500kg. Titlen kan ta opp til 2 linjer.</h5>
            <p>Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.</p>
            <div class="price">1490,-</div>
          </div>
        </template>
      </v-checkbox-btn>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['services']);

function checkService() {
  console.log(props.services)
}

</script>

<style lang="scss" scoped>
.service-block {
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-top: 16px;
  align-items: center;

  .service-wrapper {
    max-width: 343px;
    min-height: 156px;
    border: 1px solid #D0D0D0;
    border-radius: 8px;
    padding: 12px 12px 12px 12px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;

    :deep .v-selection-control {
      .body {
        min-width: 283px;
      }
    }

    //:deep .v-selection-control__wrapper {
    //  transform: translateX(40px);
    //}

    &:hover {
      border: 2px solid $primary;
    }

    h5 {
      font-weight: 600;
      font-size: 14px;
      color: $text;
    }

    p {
      margin-top: 4px;
      margin-bottom: 8px;
      font-weight: 400;
      font-size: 12px;
      color: $grey;
    }

    .price {
      font-weight: 600;
      font-size: 16px;
    }
  }
  .is_active {
    border: 2px solid $primary;
  }
}
</style>