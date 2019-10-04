<template>
  <div class="heading">
    <h2>{{title}}</h2>
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
.heading {
  margin-bottom: --space(xl);
  h2 {
    color: --color(primary);
    margin-bottom: --space(xxs);
  }
}
</style>