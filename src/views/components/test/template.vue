<template>
  <div class="test">
    <div class="list list--sm">
      <s-button color="primary">Hello</s-button>
      <s-button color="primary">How Are You?</s-button>
    </div>
    <s-field label="Select Job">
      <s-select :options="options" :request="request"></s-select>
    </s-field>
  </div>
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
