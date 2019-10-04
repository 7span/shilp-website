<template>
  <aside-main>
    <template v-slot:aside>
      <s-nav class="aside__nav" stack fluid size="sm" align="left">
        <s-nav-item icon="CheckboxBlank" to="/components/button">Button</s-nav-item>
        <s-nav-item icon="TableRow" to="/components/blocks">Blocks</s-nav-item>
        <s-nav-item icon="ArrowExpandHorizontal" to="/components/spacing">Spacing</s-nav-item>
        <s-nav-item icon="PanHorizontal" to="/components/space">Space</s-nav-item>
        <s-nav-item icon="Textbox" to="/components/form">Form</s-nav-item>
        <s-nav-item icon="Loading" to="/components/loader">Loader</s-nav-item>
        <s-nav-item icon="CardText" to="/components/card">Card</s-nav-item>
        <s-nav-item icon="Alert" to="/components/alert">Alert</s-nav-item>
        <s-nav-item icon="Alert" to="/components/item">Item</s-nav-item>
      </s-nav>
    </template>
    <template v-slot:main>
      <router-view></router-view>
    </template>
  </aside-main>
</template>

<script>
export default {
  components: {
    AsideMain: require("@/layouts/AsideMain").default
  }
};
</script>
