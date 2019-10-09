<template>
  <div class="demo demo--blocks">
    <heading title="Blocks"></heading>

    <sub-heading title="Markup">
      <!-- prettyhtml-ignore -->
      <code-block lang="html" :sourceCode="markup"></code-block>
      <div v-html="markup"></div>
    </sub-heading>

    <s-blocks>
      <s-block :size="6">
        <sub-heading title=".blocks Modifiers">
          <s-table :data="blocksModifiers"></s-table>
        </sub-heading>
      </s-block>
      <s-block :size="6">
        <sub-heading title=".block Modifiers">
          <s-table :data="blockModifiers"></s-table>
        </sub-heading>
      </s-block>
    </s-blocks>

    <sub-heading title="Demo">
      <div class="blocks">
        <div class="block block--auto:phablet" v-for="i in 12">
          <p>{{i}}</p>
        </div>
      </div>
      <div class="blocks mt--sm" v-for="i in 11">
        <div class="block block--6:phablet" :class="`block--${i}:desktop`">
          <p>{{i}}</p>
        </div>
        <div class="block block--6:phablet" :class="`block--${12 - i}:desktop`">
          <p>{{12 - i}}</p>
        </div>
      </div>
    </sub-heading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markup: `
<div class="blocks">
  <div class="block block--6:phablet block--3:desktop">1</div>
  <div class="block block--6:phablet block--3:desktop">2</div>
  <div class="block block--6:phablet block--3:desktop">3</div>
  <div class="block block--6:phablet block--3:desktop">4</div>
</div>
`,
      blockModifiers: {
        Sizes: ["1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12", "fix", "auto"]
      },
      blocksModifiers: {
        Gaps: ["0", "xs", "sm", "md", "lg", "xl"]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.block {
  p {
    background-color: #dadada;
    margin: 0;
    padding: 10px;
  }
}
</style>

