<template>
  <aside-main>
    <template v-slot:aside>
      <s-nav class="aside__nav" stack fluid size="sm" align="left">
        <s-nav-item href="#defaults">npm Package</s-nav-item>
        <s-nav-item href="#colors">Source Files</s-nav-item>
      </s-nav>
    </template>
    <template v-slot:main>
      <h3>Installation</h3>
      <pre v-highlightjs><code class="sh">npm install @7span/shilp --save</code></pre>
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