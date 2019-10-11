<template>
  <demo name="file" title="File" :markup="markup"></demo>
</template>

<script>
export default {
  data() {
    return {
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