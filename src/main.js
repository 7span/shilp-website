import Vue from "vue";
import app from "./App.vue";
import router from "./router";

require("@7span/shilp/scss/styles.scss");
require("@/scss/style.scss");
require("@/scss/dracula.css");

require("./plugins");

Vue.mixin({
  data() {
    return {
      brandColors: ["primary", "secondary", "accent"],
      statusColors: ["info", "success", "warning", "danger"],
      greyColors: ["grey", "light", "dark"],
      inputSizes: ["sm", "md", "lg", "xl"]
    };
  }
});

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(app)
}).$mount("#app");
