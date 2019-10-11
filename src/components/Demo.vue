<template>
  <div class="demo" :class="`demo--${name}`">
    <!-- HEADER -->
    <heading :title="title">
      <slot name="intro"></slot>
    </heading>

    <!-- PREVIEW -->
    <sub-heading title="Preview">
      <div class="demo__preview" :class="{'bg--grey--lightest p--xl':wrapPreview}">
        <div v-html="markup"></div>
      </div>
    </sub-heading>

    <!-- MARKUP -->
    <sub-heading title="Markup">
      <code-block lang="html" :sourceCode="markup"></code-block>
    </sub-heading>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    markup: String,
    wrapPreview: {
      type: Boolean,
      default: false
    }
  }
};
</script>