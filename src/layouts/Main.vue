<template>
  <div class="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: require("@/components/Header").default
  }
};
</script>

<style lang="scss">
.app {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
</style>

