<template>
  <header class="header">
    <div class="box">
      <s-blocks>
        <s-block size="fix">
          <router-link to="/" class="header__box">
            <img src="@/img/logo.svg" />
          </router-link>
        </s-block>
        <s-block class="ml--auto" size="fix">
          <s-nav size="sm" class="header__nav">
            <s-nav-item to="/installation">Installation</s-nav-item>
            <s-nav-item to="/customization">Customization</s-nav-item>
            <s-nav-item to="/style-guide">Style Guide</s-nav-item>
            <s-nav-item to="/components">Components</s-nav-item>
            <s-nav-item to="/utilities">Utilities</s-nav-item>
          </s-nav>
        </s-block>
      </s-blocks>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid --color(grey, lighter);
}
.header__box {
  padding: --space(sm) 0;
  height: 72px;
  display: flex;
  align-items: center;
  img {
    height: 100%;
  }
}
.header__nav {
  ::v-deep .button {
    &.router-link-active {
      color: --color("primary");
    }
  }
}
</style>