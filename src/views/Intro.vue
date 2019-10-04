<template>
  <div class="intro">
    <div class="box">
      <img src="@/img/logo.svg" alt />
      <p
        class="mt--lg color--grey--dark"
      >Shilp is an open source CSS Framework built with latest CSS features and BEM methodology. Shilp aims to provide maximum customization via CSS variables with minimum CSS overrides.</p>
      <s-button to="/installation" class="mt--xl" color="primary" style_="gradient" size="lg">
        <strong>Get Started</strong>
      </s-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    max-width: 300px;
  }
}
</style>