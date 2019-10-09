<template>
  <div class="demo demo--field">
    <heading title="Field"></heading>

    <sub-heading title="Markup">
      <!-- prettyhtml-ignore -->
      <code-block lang="html" :sourceCode="markup"></code-block>
      <s-blocks>
        <s-block :size="6">
          <div v-html="markup"></div>
        </s-block>
      </s-blocks>
    </sub-heading>

    <s-blocks>
      <s-block :size="6">
        <sub-heading title=".field Modifiers">
          <s-table :data="fieldModifiers"></s-table>
        </sub-heading>
      </s-block>
      <s-block :size="6">
        <sub-heading title=".field-block Modifiers">
          <s-table :data="fieldBlockModifiers"></s-table>
        </sub-heading>
      </s-block>
    </s-blocks>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markup: `
<div class="field">
  <label>Email</label>
  <div class="field__group">
    <div class="field__before">@</div>
      <input class="field-block" type="email" placeholder="e.g. john@doe.com">
    <div class="field__after">.com</div>
  </div>
  <small>Gmail or Yahoo only!</small>
</div>
`,
      fieldModifiers: {
        Status: ["info", "success", "warning", "danger"],
        Size: ["xs", "sm", "md", "lg", "xl"]
      },
      fieldBlockModifiers: {
        All: ["view"]
      }
    };
  }
};
</script>
