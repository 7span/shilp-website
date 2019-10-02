<template>
  <aside class="aside py--sm">
    <s-nav>
      <s-nav-item>
        <s-nav slot="nav">
          <s-nav-item icon="FormatFont" align="left" to="/text">Texts</s-nav-item>
          <s-nav-item icon="Palette" align="left" to="/colors">Colors</s-nav-item>
          <s-nav-item icon="CheckboxBlank" align="left" to="/button">Button</s-nav-item>
          <s-nav-item icon="TableRow" align="left" to="/blocks">Blocks</s-nav-item>
          <s-nav-item icon="ArrowExpandHorizontal" align="left" to="/spacing">Spacing</s-nav-item>
          <s-nav-item icon="PanHorizontal" align="left" to="/space">Space</s-nav-item>
          <s-nav-item icon="Textbox" align="left" to="/form">Form</s-nav-item>
          <s-nav-item icon="Loading" align="left" to="/loader">Loader</s-nav-item>
          <s-nav-item icon="CardText" align="left" to="/card">Card</s-nav-item>
          <s-nav-item icon="Alert" align="left" to="/alert">Alert</s-nav-item>
          <s-nav-item icon="Alert" align="left" to="/item">Item</s-nav-item>
        </s-nav>
      </s-nav-item>
    </s-nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.aside {
  flex: 0 0 200px;
}
::v-deep .button {
  color: --color(grey, darkest);
  &:hover {
    background-color: --color(grey, lightest);
  }
  &.router-link-active {
    background-color: --color(primary);
    color: #fff;
  }
}
</style>