<template>
  <demo name="blocks" title="Blocks" :markup="markup">
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

    <s-field label="Password" :password-toggle="{visibleIcon:'Eye',hiddenIcon:'EyeOff'}">
      <s-textbox v-model="form.password" type="password"></s-textbox>
    </s-field>
  </demo>
</template>

<script>
export default {
  data() {
    return {
      form: {
        password: null
      },
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
