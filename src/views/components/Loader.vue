<template>
  <demo title="Loader" name="loader" :markup="markup">
    <sub-heading title=".loader Modifiers">
      <s-table :data="modifiers"></s-table>
      <p class="mt--sm">Loaders can be used with .field & .button too.</p>
    </sub-heading>
  </demo>
</template>

<script>
export default {
  data() {
    return {
      markup: `
<div class="loader bg--primary p--xl">
  <span class="color--light">This is loading! Please Wait...</span>
</div>
`
    };
  },
  computed: {
    modifiers() {
      return {
        Sizes: ["xs", "sm", "md", "lg", "xl"],
        Color: ["light", "dark"]
      };
    }
  }
};
</script>




