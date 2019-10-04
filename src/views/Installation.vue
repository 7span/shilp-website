<template>
  <aside-main>
    <template v-slot:aside>
      <s-nav class="aside__nav" stack fluid size="sm" align="left">
        <s-nav-item to="#npm">npm Package</s-nav-item>
        <s-nav-item to="#compiled">Compiled Files</s-nav-item>
      </s-nav>
    </template>
    <template v-slot:main>
      <heading title="Installation"></heading>

      <sub-heading title="Installing via NPM">
        <code-block lang="sh">npm install @7span/shilp --save</code-block>
      </sub-heading>

      <sub-heading title="Import in your project">
        <code-block
          title="Import everything:"
          lang="javascript"
        >import "@7span/shilp/scss/styles.scss"</code-block>
        <p>If you wish to install only some components, you can cherry pick those. This will help to reduce the bundle side. When you manually import the components, the framework needs the core files which has SCSS variables, mixins and functions. So make sure you import those first.</p>
        <!-- prettyhtml-ignore -->
        <code-block title="Cherry-pick components:" lang="javascript">
import "@7span/shilp/scss/_globals.scss"; // Required
import "@7span/shilp/scss/_css-variables.scss"; // Required
import "@7span/shilp/scss/_defaults.scss"; // Optional but recommended
//Start importing components
import "@7span/shilp/scss/_button.scss";
        </code-block>
      </sub-heading>

      <sub-heading title="Compiled Files">
        <p>🚧 WIP.</p>
      </sub-heading>
    </template>
  </aside-main>
</template> 

<script>
export default {
  components: {
    AsideMain: require("@/layouts/AsideMain").default
  }
};
</script>