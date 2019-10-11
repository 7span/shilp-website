<template>
  <demo name="choice" title="Choice" :markup="markup">
    <template slot="intro">
      <p>Choice is a common name for Checkboxes and Radio buttons.</p>
    </template>
  </demo>
</template>

<script>
export default {
  data() {
    return {
      markup: `
<!-- replace type="checkbox" for checkboxes -->
<div class="field">
  <label>Native Radio Buttons</label>
  <div class="field__group">
    <div class="choices space space--md">
      <div class="choice">
        <input name="power" type="radio" id="fire" value="fire" />
        <label for="fire">Fire</label>
      </div>
      <div class="choice">
        <input name="power" type="radio" id="water" value="water" />
        <label for="water">Water</label>
      </div>
    </div>
  </div>
</div>

<!-- button style -->
<div class="field mt--xl">
  <label>Button Style</label>
  <div class="field__group">
    <div class="choices buttons buttons--group">
      <div class="choice choice--custom">
        <input name="power2" type="radio" id="fire2" value="fire2" />
        <label class="button button--primary button--solid" for="fire2">Fire</label>
      </div>
      <div class="choice choice--custom">
        <input name="power2" type="radio" id="water2" value="water2" />
        <label class="button button--primary button--outline" for="water2">Water</label>
      </div>
    </div>
  </div>
</div>
`
    };
  }
};
</script>