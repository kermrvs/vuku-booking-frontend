<template>
  <div class="main" ref="main">
    <v-container class="container">
      <slot/>
    </v-container>
    <TheFooter class="my-footer mb-4"/>
  </div>
</template>

<script>
export default {
  name: "auth"
}
</script>

<style lang="scss" scoped>

.main {
  position: relative;
  height: 100%;
  padding-bottom: 100px;
  .my-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>