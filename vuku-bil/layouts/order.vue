<template>
  <div className="main">
    <v-container className="container">
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
    margin: 44px auto 23px auto;
  }
}
</style>