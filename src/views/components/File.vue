<template>
  <demo name="file" title="File" :markup="markup">
    <sub-heading title="Vue Component">
      <s-form-validate v-slot="{invalid}">
        INVALID: {{invalid}}
        <s-field-validate rules="required|image" size="lg" label="File">
          <s-file
            v-model="form.file"
            color="primary"
            multiple
            placeholder="Select File..."
            button-label="Select Files"
          ></s-file>
        </s-field-validate>
        <s-field-validate rules="required" size="lg" label="Text">
          <s-textbox v-model="form.textbox"></s-textbox>
        </s-field-validate>
      </s-form-validate>
    </sub-heading>
  </demo>
</template>

<script>
export default {
  data() {
    return {
      form: {
        file: null,
        textbox: null
      },
      markup: `
<div class="field field--lg">
  <label>File</label>
  <div class="field__group">
    <div class="file field-block">
      <input type="text" placeholder="Select File..." readonly="readonly" /><!-- Displays the selected file value -->
      <input type="file" multiple="multiple" /> <!-- This is hidden -->
      <button class="button button--primary button--lg">Select Files</button>
    </div>
  </div>
</div>
`
    };
  }
};
</script>