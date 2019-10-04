<template>
  <aside-main>
    <template v-slot:aside>
      <s-nav class="aside__nav" stack fluid size="sm" align="left">
        <s-nav-item to="/customization/global-config">Global Config</s-nav-item>
        <s-nav-item to="/customization/colors">Colors</s-nav-item>
        <s-nav-item to="/customization/fonts">Fonts</s-nav-item>
      </s-nav>
    </template>
    <template v-slot:main>
      <router-view></router-view>
    </template>
  </aside-main>
</template> 

<script>
export default {
  components: {
    AsideMain: require("@/layouts/AsideMain").default,
    GlobalConfig: require("./customization/GlobalConfig").default,
    Colors: require("./customization/Colors").default
  }
};
</script>