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
  name: "auth"
}
</script>

<style lang="scss" scoped>

.main {

  .my-footer {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>