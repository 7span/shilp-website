<template>
  <demo name="button" title="Button" :markup="htmlMarkup" :modifiers="modifiers" :vue="vueMarkup">
    <template slot="intro"></template>
  </demo>
</template>

<script>
// import html from "raw-loader!./template.html";
// import modifiers from "./modifiers";
// import vueTemplate from "!!raw-loader!./template.vue";

export default {
  name: "viewer",
  props: {
    name: String
  },
  data() {
    const self = this;
    return {
      htmlMarkup: require(`raw-loader!./${self.name}/template.html`).default,
      modifiers: require(`./${self.name}/modifiers`).default,
      vueMarkup: require(`!!raw-loader!./${self.name}/template.vue`).default
    };
  }
};
</script>


<style lang="scss" scoped>
.button {
  text-transform: capitalize;
}
</style>
