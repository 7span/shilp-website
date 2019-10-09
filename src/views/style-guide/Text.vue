<template>
  <div class="texts">
    <heading title="Texts"></heading>
    <sub-heading title="Headings">
      <small class="color--grey">{{fontFamily('heading')}}</small>
    </sub-heading>
    <div class="space space--stack space--sm">
      <div class="text" v-for="(text,key) in heading">
        <label class="text__label">{{key}} &mdash; {{fontSize(key)}}</label>
        <component :is="key">{{text}}</component>
      </div>
    </div>

    <sub-heading title="Content">
      <small class="color--grey">{{fontFamily('content')}}</small>
    </sub-heading>
    <div class="space space--stack space--sm">
      <div class="text" v-for="(text,key) in content">
        <label class="text__label">{{key}}</label>
        <component :is="key">{{text}}</component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: {
        h1:
          "The five boxing wizards jump quickly!\n1234567890\n~!@#$%^&*()_+-=;:'<,>.?/",
        h2: "Pack my box with five dozen liquor jugs.",
        h3: "The quick brown fox jumps over the lazy dog.",
        h4: "We promptly judged antique ivory buckles for the next prize.",
        h5:
          "A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent.",
        h6:
          "The job requires extra pluck and zeal from every young wage earner."
      },
      content: {
        p:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, pariatur aperiam. Nesciunt ipsam vitae aut nisi obcaecati aliquid error explicabo, distinctio fugiat soluta iusto ab quod, sit voluptate non suscipit.",
        span:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, pariatur aperiam. Nesciunt ipsam vitae aut nisi obcaecati aliquid error explicabo, distinctio fugiat soluta iusto ab quod, sit voluptate non suscipit.",
        label: "This is label",
        small: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      }
    };
  },

  methods: {
    fontSize(tag) {
      return getComputedStyle(document.body).getPropertyValue(
        `--font-size--${tag}`
      );
    },
    fontFamily(tagType) {
      return getComputedStyle(document.body).getPropertyValue(
        `--font-family--${tagType}`
      );
    },
    fontWeight(tagType) {
      return getComputedStyle(document.body).getPropertyValue(
        `--font-weight--${tagType}`
      );
    },
    vars(tag) {
      const ele = getComputedStyle(document.body);
      const tagType = tag.startsWith("h") ? "heading" : "content";
      return {
        family: ele.getPropertyValue(`--font-family--${tagType}`),
        weight: ele.getPropertyValue(`--font-weight--${tagType}`)
      };
    }
  }
};
</script>


<style lang="scss" scoped>
.texts {
  ul {
    margin: 0;
    padding: 0;
    color: --color(grey);
    font-size: --font-size(h6);
  }
}
.text {
  white-space: pre-line;
}
.text__label {
  display: block;
  font-weight: --font-weight(bold);
  color: --color(grey);
}
</style>
