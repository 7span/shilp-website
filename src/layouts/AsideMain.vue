<template>
  <div class="content">
    <div class="box content__box">
      <aside class="aside py--sm">
        <slot name="aside"></slot>
      </aside>
      <main class="main ml--xl mt--md">
        <slot name="main"></slot>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  flex: 0 0 200px;
}
.content {
  padding-bottom: --space(xl);
}
.content__box {
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
}
.main {
  flex: 1 1 auto;
  min-width: 0;
}
</style>

<style lang="scss">
.aside {
  .button {
    --button--color: #{--color(grey, darkest)};
    --button--hover-bg: #{--color(grey, lightest)};
  }
  .router-link-active {
    --button--color: #fff;
    --button--hover-color: #fff;
    --button--bg: #{--color(primary)};
    --button--hover-bg: #{--color(primary)};
  }
}
</style>
