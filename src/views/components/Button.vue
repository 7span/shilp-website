<template>
  <demo name="button" title="Button" :markup="markup">
    <template slot="intro"></template>

    <sub-heading title=".button Modifiers">
      <s-table :data="modifiers"></s-table>
    </sub-heading>

    <sub-heading title="Brand Colors">
      <div class="space space--sm">
        <s-button v-for="color in brandColors" :color="color">{{color}}</s-button>
      </div>
    </sub-heading>

    <sub-heading title="Status Colors">
      <div class="space space--sm">
        <s-button v-for="color in statusColors" :color="color">{{color}}</s-button>
      </div>
    </sub-heading>

    <sub-heading title="Neutral Colors">
      <div class="space space--sm">
        <s-button v-for="color in neutralColors" :color="color">{{color}}</s-button>
      </div>
    </sub-heading>

    <sub-heading title="Sizes">
      <div class="space space--sm">
        <s-button v-for="size in inputSizes" :size="size" color="primary">{{size}}</s-button>
      </div>
    </sub-heading>

    <sub-heading title="Styles">
      <div class="space space--sm">
        <s-button
          v-for="style in ['solid','muted','outline']"
          :style_="style"
          color="primary"
        >{{style}}</s-button>
      </div>
    </sub-heading>

    <sub-heading title="Shapes">
      <div class="space space--sm">
        <s-button
          v-for="shape in ['rectangle','rounded','pill']"
          :shape="shape"
          color="primary"
        >{{shape}}</s-button>
      </div>
    </sub-heading>

    <sub-heading title="Icons">
      <div class="space space--sm">
        <s-button color="primary" icon="AlphaSCircle">Shilp</s-button>
        <s-button color="primary" icon="AlphaSCircle" align="left">Shilp</s-button>
        <s-button color="primary" icon="AlphaSCircle" align="right">Shilp</s-button>
        <s-button color="primary" icon="AlphaSCircle" shape="square"></s-button>
        <s-button color="primary" icon="AlphaSCircle" shape="circle"></s-button>
      </div>
    </sub-heading>

    <sub-heading title="Grouped">
      <div class="space space--sm">
        <s-buttons group>
          <s-button color="primary" icon="AlphaSCircle">How</s-button>
          <s-button color="primary" icon="AlphaSCircle">Are</s-button>
          <s-button color="primary" icon="AlphaSCircle">You?</s-button>
        </s-buttons>
        <s-buttons class="ml-2" group>
          <s-button color="primary" shape="pill" icon="AlphaSCircle">How</s-button>
          <s-button color="primary" shape="pill" icon="AlphaSCircle">Are</s-button>
          <s-button color="primary" shape="pill" icon="AlphaSCircle">You?</s-button>
        </s-buttons>
      </div>
    </sub-heading>

    <sub-heading title="Stacked">
      <div class="space space--sm">
        <s-buttons stack class="space space--stack space--sm">
          <s-button color="primary" shape="pill" icon="AlphaSCircle">How</s-button>
          <s-button color="primary" shape="pill" icon="AlphaSCircle">Are</s-button>
          <s-button color="primary" shape="pill" icon="AlphaSCircle">You?</s-button>
        </s-buttons>

        <s-buttons stack group class="ml--2">
          <s-button color="grey" align="left" style_="outline" icon="AlphaSCircle">How</s-button>
          <s-button color="grey" align="left" style_="outline" icon="AlphaSCircle">Are</s-button>
          <s-button color="grey" align="left" style_="outline" icon="AlphaSCircle">You?</s-button>
        </s-buttons>
      </div>
    </sub-heading>
  </demo>
</template>

<script>
export default {
  data: () => ({
    markup: `
<button class='button button--primary'>
  <!-- optional icon -->
  <i class="button__icon">
    <svg viewBox="0 0 24 24">
        <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>
  </i>
  <span>I'm Button</span>
</button>
`
  }),

  computed: {
    modifiers() {
      return {
        "Brand Colors": this.brandColors,
        "Status Colors": this.statusColors,
        "Neutral Colors": this.neutralColors,
        Sizes: this.inputSizes,
        Shapes: ["rectangle", "rounded", "pill", "square", "circle"],
        Styles: ["solid", "outline", "muted", "gradient", "tab"],
        Alignments: ["left", "right"],
        Others: ["fluid"]
      };
    }
  }
};
</script>


<style lang="scss" scoped>
.button {
  text-transform: capitalize;
}
</style>
