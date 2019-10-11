<template>
  <demo name="select" title="Select" :markup="markup"></demo>
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