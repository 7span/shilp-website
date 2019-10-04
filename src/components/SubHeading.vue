<template>
  <div class="sub-heading">
    <h3>{{title}}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: [Number, String]
  }
};
</script>

<style lang="scss" scoped>
.sub-heading {
  margin-bottom: --space(xl);
  border-top: 1px solid --color(grey, lighter);
  padding-top: --space(xl);
  h3 {
    margin-bottom: --space(xxs);
  }
}
</style>