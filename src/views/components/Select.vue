<template>
  <div class="demo demo--select">
    <heading title="Select"></heading>

    <sub-heading title="Markup">
      <!-- prettyhtml-ignore -->
      <code-block lang="html" :sourceCode="markup"></code-block>
      <s-blocks>
        <s-block :size="6">
          <div v-html="markup"></div>
        </s-block>
      </s-blocks>
    </sub-heading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markup: `
<div class="field">
  <label>Select Your Power</label>
  <div class="select field-block">
    <select>
      <option value="" disabled="disabled">Select</option>
      <option value="fire">Fire</option>
      <option value="water">Water</option>
    </select>
  </div>
</div>
`
    };
  }
};
</script>