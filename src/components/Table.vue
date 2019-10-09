<template>
  <table class="table" v-if="Array.isArray(data)"></table>
  <table class="table" v-else>
    <tr>
      <th v-for="(value,key) in data">{{key}}</th>
    </tr>
    <tr v-for="(n,i) in maxRowsInObjectMode">
      <td v-for="value,key in data">{{value[i]}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    data: [Object, Array]
  },

  computed: {
    maxRowsInObjectMode() {
      let maxCount = 0;
      for (var key in this.data) {
        if (this.data[key].length > maxCount) {
          maxCount = this.data[key].length;
        }
      }
      return maxCount;
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    padding: --space(xs);
    border: 1px solid --color(grey, lighter);
  }
  th {
    color: --color(grey);
  }
}
</style>