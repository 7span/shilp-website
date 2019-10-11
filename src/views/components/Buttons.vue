<template>
  <demo name="buttons" title="Buttons" :markup="markup">
    <sub-heading title=".buttons Modifiers">
      <s-table :data="modifiers"></s-table>
    </sub-heading>
  </demo>
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