<template>
  <demo title="Space" name="space" :markup="markup">
    <sub-heading title=".space Modifiers">
      <s-table :data="modifiers"></s-table>
      <p class="mt--sm">Breakpoint modifiers are supported with each modifiers.</p>
    </sub-heading>
  </demo>
</template>

<script>
export default {
  data() {
    return {
      markup: `
<div class="space space--sm space--xl:desktop">
  <button class="button button--primary">Fire</button>
  <button class="button button--primary">Wood</button>
  <button class="button button--primary">Water</button>
  <button class="button button--primary">Earth</button>
</div>
`
    };
  },
  computed: {
    modifiers() {
      return {
        Sizes: ["0", "xxs", "xs", "sm", "md", "lg", "xl", "auto"],
        Other: ["reverse", "stack"]
      };
    }
  }
};
</script>


