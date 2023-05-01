<template>
  <div class="main">
    <v-container class="container">
      <slot />
    </v-container>
    <TheFooter class="my-footer"/>
  </div>
</template>

<script>
export default {
  name: "auth"
}
</script>

<style lang="scss" scoped>

.main {

  .my-footer {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>