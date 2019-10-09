<template>
  <div class="code-block">
    <div class="code-block__title">{{title}}</div>
    <pre v-highlightjs="sourceCode"><code :class="lang"><slot></slot></code></pre>
  </div>
</template>

<script>
export default {
  props: {
    lang: String,
    title: String,
    sourceCode: String
  },
  computed: {
    slotData() {
      return JSON.stringify(this.$slots.default);
    }
  }
};
</script>

<style lang="scss" scoped>
.code-block {
}
.code-block__title {
  color: --color(grey);
  font-weight: --font-weight(bold);
  margin-bottom: -10px;
  margin-top: --space(md);
}
</style>