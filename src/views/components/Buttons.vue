<template>
  <div class="demo demo--buttons">
    <heading title="Buttons"></heading>

    <sub-heading title="Markup">
      <!-- prettyhtml-ignore -->
      <code-block lang="html" :sourceCode="markup"></code-block>
      <div v-html="markup"></div>
    </sub-heading>

    <sub-heading title=".buttons Modifiers">
      <s-table :data="modifiers"></s-table>
    </sub-heading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markup: `
<div class="buttons buttons--group">
  <button class='button button--primary'>
    <span>Earth</span>
  </button>
  <button class='button button--primary'>
    <span>Water</span>
  </button>
  <button class='button button--primary'>
    <span>Wood</span>
  </button>
  <button class='button button--primary'>
    <span>Fire</span>
  </button>
</div>
`,
      modifiers: {
        All: ["stack", "group"]
      }
    };
  }
};
</script>