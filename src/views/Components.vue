<template>
  <aside-main>
    <template v-slot:aside>
      <s-nav class="aside__nav" stack fluid align="left">
        <s-nav-item icon="CheckboxBlank" to="/components/button">Button</s-nav-item>
        <s-nav-item icon="ViewStream" to="/components/buttons">Buttons</s-nav-item>
        <s-nav-item icon="TableRow" to="/components/blocks">Blocks</s-nav-item>
        <s-nav-item icon="Textbox" to="/components/field">Field</s-nav-item>
        <s-nav-item icon="ArrowDownDropCircle" to="/components/select">Select</s-nav-item>
        <s-nav-item icon="CheckboxMarked" to="/components/choice">Choice</s-nav-item>
        <s-nav-item icon="File" to="/components/file">File</s-nav-item>
        <s-nav-item icon="PanHorizontal" to="/components/space">Space</s-nav-item>
        <s-nav-item icon="ProgressClock" to="/components/loader">Loader</s-nav-item>
        <s-nav-item icon="CardText" to="/components/card">Card</s-nav-item>
        <!--  -->
        <s-nav-item icon="ArrowExpandHorizontal" to="/components/spacing">Spacing</s-nav-item>
        <s-nav-item icon="Alert" to="/components/alert">Alert</s-nav-item>
        <s-nav-item icon="ViewList" to="/components/item">Item</s-nav-item>
      </s-nav>
    </template>
    <template v-slot:main>
      <router-view :key="component" @change="component=$event"></router-view>
    </template>
  </aside-main>
</template>

<script>
export default {
  components: {
    AsideMain: require("@/layouts/AsideMain").default
  },
  data() {
    return {
      component: null
    };
  }
};
</script>
