import Vue from "vue";
import app from "./App.vue";
import router from "./router/";

require("@7span/shilp/scss/styles.scss");
require("@/scss/dracula.css");
require("./plugins");

require("@/scss/style.scss");
Vue.component("Heading", require("@/components/Heading.vue").default);
Vue.component("SubHeading", require("@/components/SubHeading.vue").default);
Vue.component("CodeBlock", require("@/components/CodeBlock.vue").default);
Vue.component("STable", require("@/components/Table.vue").default);
Vue.component("Demo", require("@/components/Demo.vue").default);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(app)
}).$mount("#app");
