<template>
  <div class="box">
    <div class="blocks">
      <div class="block block--auto:phablet" v-for="i in 12">
        <p>{{i}}</p>
      </div>
    </div>
    <div class="blocks" v-for="i in 11">
      <div class="block block--6:phablet" :class="`block--${i}:desktop`">
        <p>{{i}}</p>
      </div>
      <div class="block block--6:phablet" :class="`block--${12 - i}:desktop`">
        <p>{{12 - i}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  p {
    background-color: #dadada;
    margin: 0;
    padding: 10px;
  }
}
</style>

