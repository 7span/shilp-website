<template>
  <div class="demo" :class="`demo--${name}`">
    <!-- HEADER -->
    <h1 class="demo__title">{{meta.name}}</h1>

    <!-- PREVIEW -->
    <div class="demo__preview">
      <component ref="preview" :is="preview"></component>
      <!-- <div v-html="htmlMarkup"></div> -->
    </div>

    <!-- DOCS -->
    <div class="demo__docs">
      <s-tabs size="lg" color="primary" style_="tab" active="html">
        <!-- TABS -->
        <s-tab icon="LanguageHtml5" name="html">HTML</s-tab>
        <s-tab icon="Vuejs" name="vue">Vue</s-tab>

        <!-- HTML -->
        <template slot="html">
          <code-block lang="html" :sourceCode="htmlMarkup"></code-block>
          <h3 class="demo__subtitle">⚙️ Modifiers</h3>
          <doc-table :data="modifiers"></doc-table>
        </template>

        <!-- VUE -->
        <template slot="vue">
          <code-block lang="vue" :sourceCode="vueMarkup"></code-block>
          <h3 class="demo__subtitle">⚙️ Props</h3>
          <doc-table :data="vueProps"></doc-table>
        </template>
      </s-tabs>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    DocTable: require("@/components/Table").default
  },
  props: {
    name: String
  },
  watch: {
    name(newValue) {
      this.$emit("change", newValue);
    }
  },

  data() {
    const self = this;
    return {
      htmlMarkup2: null,
      meta: require(`../views/components/${self.name}/meta.json`),
      htmlMarkup: require(`raw-loader!../views/components/${
        self.name
      }/template.html`).default,
      modifiers: require(`../views/components/${self.name}/modifiers`).default,
      vueMarkup: require(`!!raw-loader!../views/components/${
        self.name
      }/template.vue`).default,
      vueProps: require(`../views/components/${self.name}/props`).default
    };
  },
  computed: {
    preview() {
      return () => import(`../views/components/${this.name}/template.vue`);
    }
  }
};
</script>

<style lang="scss" >
.demo__title {
  line-height: 1;
  color: --color(grey);
}
.demo__subtitle {
  margin-top: --space(xl);
  line-height: 1;
}
.demo__preview {
  background-color: --color(grey, lightest);
  padding: --space(xl);
  border-radius: --border-radius("md");
}
.demo__docs {
  margin-top: --space(xl);
}
</style>

<style lang="scss">
.demo {
  .tabs__list {
    position: relative;
    &:before {
      @include position(absolute, auto, 0, 0, 0);
      content: "";
      height: 1px;
      background: --color(grey, lighter);
    }
  }
  .tabs__content {
    margin-top: --space(xl);
  }
}
</style>