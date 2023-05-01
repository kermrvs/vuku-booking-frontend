<template>
  <div class="main">
    <v-container class="container">
      <slot/>
    </v-container>
    <TheFooter class="my-footer"/>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style lang="scss" scoped>

.main {
  //min-height: 100svh;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
  //position: relative;
  //
  //.container {
  //  padding-bottom: 65px;
  //}
  //
  .my-footer {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>