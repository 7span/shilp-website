<template>
  <div class="box">
    <h3 class="color--grey m--0 mb--xs">Default Buttons</h3>
    <div class="space space--sm">
      <s-button v-for="color in brandColors" :color="color">{{color}}</s-button>
    </div>

    <h3 class="color--grey m--0 mb--xs mt--xl">Status Buttons</h3>
    <div class="space space--sm">
      <s-button v-for="color in statusColors" :color="color">{{color}}</s-button>
    </div>

    <h3 class="color--grey m--0 mb--xs mt--xl">Grey Buttons</h3>
    <div class="space space--sm">
      <s-button v-for="color in greyColors" :color="color">{{color}}</s-button>
    </div>

    <h3 class="color--grey m--0 mb--xs mt--xl">Sizes</h3>
    <div class="space space--sm">
      <s-button v-for="size in inputSizes" :size="size" color="primary">{{size}}</s-button>
    </div>

    <h3 class="color--grey m--0 mb--xs mt--xl">Styles</h3>
    <div class="space space--sm">
      <s-button
        v-for="style in ['solid','muted','outline']"
        :style_="style"
        color="primary"
      >{{style}}</s-button>
    </div>

    <h3 class="color--grey m--0 mb--xs mt--xl">Shapes</h3>
    <div class="space space--sm">
      <s-button
        v-for="shape in ['rectangle','rounded','pill']"
        :shape="shape"
        color="primary"
      >{{shape}}</s-button>
    </div>

    <h3 class="color--grey m--0 mb--xs mt--xl">Icons</h3>
    <div class="space space--sm">
      <s-button color="primary" icon="AlphaSCircle">Shilp</s-button>
      <s-button color="primary" icon="AlphaSCircle" align="left">Shilp</s-button>
      <s-button color="primary" icon="AlphaSCircle" align="right">Shilp</s-button>
      <s-button color="primary" icon="AlphaSCircle" shape="square"></s-button>
      <s-button color="primary" icon="AlphaSCircle" shape="circle"></s-button>
    </div>

    <h3 class="color--grey m--0 mb--xs mt--xl">Grouped</h3>
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

    <h3 class="color--grey m--0 mb--xs mt--xl">Stacked</h3>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    icon: true,
    text: "Hello World!",
    selected: {
      color: "primary",
      size: "md",
      shape: "rectangle",
      style: "solid"
    },
    variants: {
      color: [
        "primary",
        "secondary",
        "accent",
        "light",
        "dark",
        "info",
        "success",
        "warning",
        "danger"
      ],
      size: ["xl", "lg", "md", "sm"],
      shape: ["rectangle", "pill", "rounded", "circle", "square"],
      style: ["solid", "outline", "muted", "trn"]
    }
  }),
  computed: {
    buttonClass() {
      let classes = ["button"];
      for (var val in this.selected) {
        if (this.selected[val]) classes.push(`button--${this.selected[val]}`);
      }
      return classes;
    }
  }
};
</script>


<style lang="scss">
.button {
  text-transform: capitalize;
}
</style>
