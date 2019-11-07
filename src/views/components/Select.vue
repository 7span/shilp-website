<template>
  <demo name="select" title="Select" :markup="markup">
    <s-dropdown before-icon="Palette" placeholder="Select Color" :options="dropdownOptions"></s-dropdown>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </demo>
</template>

<script>
export default {
  data() {
    return {
      dropdownOptions: [
        {
          label: "Red Color",
          value: "red"
        },
        {
          label: "Green Color",
          value: "green"
        }
      ],
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