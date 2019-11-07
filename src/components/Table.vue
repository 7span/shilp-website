<template>
  <table class="table" v-if="data">
    <tr>
      <th v-for="(heading,hIndex) in data.header" :key="`heading--${hIndex}`">{{heading}}</th>
    </tr>
    <tr v-for="(row,rIndex) in data.body" :key="`row--${rIndex}`">
      <td
        v-for="(cell,cIndex) in row"
        :key="`cell--${rIndex}--${cIndex}`"
      >{{Array.isArray(cell)? cell.join(", ") : cell}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
.table {
  text-align: left;
  border: 1px solid --color(grey, lighter);
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    border: 1px solid --color(grey, lighter);
    padding: --space(xs) --space(xs);
  }
}
</style>