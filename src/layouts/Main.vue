<template>
  <div class="app">
    <app-header></app-header>
    <div class="content">
      <div class="box">
        <div class="content__box">
          <app-aside></app-aside>
          <main class="main ml--xl mt--md">
            <router-view></router-view>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: require("@/components/Header").default,
    AppAside: require("@/components/Aside").default
  }
};
</script>

<style lang="scss">
.app {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.content__box {
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
}
.main {
  flex: 1 1 auto;
}
</style>

