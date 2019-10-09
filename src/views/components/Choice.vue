<template>
  <div class="demo demo--choice">
    <heading title="Choice">Choice is a common name for Checkboxes and Radio buttons.</heading>

    <sub-heading title="Markup">
      <!-- prettyhtml-ignore -->
      <code-block lang="html" :sourceCode="markup"></code-block>
      <s-blocks>
        <s-block :size="6">
          <div v-html="markup"></div>
        </s-block>
      </s-blocks>
    </sub-heading>

    <sub-heading title="Button Style Markup">
      <!-- prettyhtml-ignore -->
      <code-block lang="html" :sourceCode="buttonMarkup"></code-block>
      <s-blocks>
        <s-block :size="6">
          <div v-html="buttonMarkup"></div>
        </s-block>
      </s-blocks>
    </sub-heading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markup: `
<!-- radio -->
<!-- replace type="checkbox" for checkboxes -->
<div class="field">
  <label>Choose Your Power</label>
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
`,
      buttonMarkup: `
<!-- radio -->
<!-- replace type="checkbox" for checkboxes -->
<div class="field">
  <label>Choose Your Power</label>
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