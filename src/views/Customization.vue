<template>
  <aside-main>
    <template v-slot:aside>
      <s-nav class="aside__nav" stack fluid size="sm" align="left">
        <s-nav-item href="#defaults">Defaults</s-nav-item>
        <s-nav-item href="#colors">Colors</s-nav-item>
        <s-nav-item href="#fonts">Fonts</s-nav-item>
      </s-nav>
    </template>
    <template v-slot:main>
      <h3>Customization</h3>
      <pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre>
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