<template>
  <s-field label="Select your Power">
    <s-select :options="options"></s-select>
  </s-field>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: "Fire", value: "fire" },
        { label: "Water", value: "water" },
        { label: "Earth", value: "earth" },
        { label: "Wood", value: "wood" }
      ]
    };
  }
};
</script>