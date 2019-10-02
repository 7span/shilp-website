<template>
  <div class="box">
    <div class="color-group" v-for="item in colorGroups">
      <h3 class="color--grey m--0 mb--xs">{{item.label}}</h3>

      <s-blocks>
        <s-block v-for="color in item.colors" :key="`color--${color}`">
          <s-blocks gap="0" class="palette">
            <s-block :size="{desktop:'auto'}">
              <!-- LIGHT COLORS -->
              <s-blocks gap="0">
                <s-block
                  :size="{laptop:'auto'}"
                  v-for="shade in ['lightest','lighter','light']"
                  :key="`color--${color}--${shade}`"
                >
                  <div class="shade" :class="`bg--${color}--${shade}`">
                    <p>{{shade}}</p>
                    <p>{{colorCode(color,shade)}}</p>
                  </div>
                </s-block>
              </s-blocks>
            </s-block>
            <s-block :size="{desktop:'auto'}">
              <div class="color" :class="`bg--${color} color--white`">
                <p>{{color}}</p>
                <p>{{colorCode(color)}}</p>
              </div>
            </s-block>
            <s-block :size="{desktop:'auto'}">
              <!-- DARK COLORS -->
              <s-blocks gap="0">
                <s-block
                  :size="{laptop:'auto'}"
                  v-for="shade in ['dark','darker','darkest']"
                  :key="`color--${color}--${shade}`"
                >
                  <div class="shade" :class="`bg--${color}--${shade} color--white`">
                    <p>{{shade}}</p>
                    <p>{{colorCode(color,shade)}}</p>
                  </div>
                </s-block>
              </s-blocks>
            </s-block>
          </s-blocks>
        </s-block>
      </s-blocks>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorGroups: [
        {
          label: "Brand Colors",
          colors: ["primary", "secondary", "accent"]
        },
        {
          label: "Status Colors",
          colors: ["info", "success", "warning", "danger"]
        },
        {
          label: "Grey Colors",
          colors: ["grey"]
        }
      ]
    };
  },
  methods: {
    colorCode(color, shade) {
      let cssVar = `--color--${color}`;
      if (shade) {
        cssVar += `--${shade}`;
      }
      return window.getComputedStyle(document.body).getPropertyValue(cssVar);
    }
  }
};
</script>

<style lang="scss" scoped>
.color-group {
  margin-bottom: --space(xl);
}
.color,
.shade {
  padding: --space(sm);
  p {
    margin: 0;
    font-size: 12px;
  }
}
</style>




