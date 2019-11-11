<template>
  <s-field label="Select Job">
    <s-select :options="options" :request="request"></s-select>
  </s-field>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: "Hi", value: "hi" },
        { label: "Hello", value: "hello" }
      ]
    };
  },
  methods: {
    request() {
      return this.$axios
        .get("https://cat-fact.herokuapp.com/facts")
        .then(res => {
          return res.data.all.map((item, index) => {
            return {
              label: item.text,
              value: index
            };
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>