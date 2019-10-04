<template>
  <aside-main>
    <template v-slot:aside>
      <s-nav class="aside__nav" stack fluid size="sm" align="left">
        <s-nav-item icon="FormatFont" to="/style-guide/text">Texts</s-nav-item>
        <s-nav-item icon="Palette" to="/style-guide/colors">Colors</s-nav-item>
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
    AsideMain: require("@/layouts/AsideMain").default
  }
};
</script>
