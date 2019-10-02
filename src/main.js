import Vue from "vue";
import app from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import ShilpVue from "@7span/shilp-vue/src/plugin";
require("@7span/shilp/scss/styles.scss");

Vue.use(ShilpVue, {
  axios: axios,
  vueMaterialDesignIcons: {
    FormatFont: require("@icon/FormatFont").default,
    TableRow: require("@icon/TableRow").default,
    Textbox: require("@icon/Textbox").default,
    CheckboxBlank: require("@icon/CheckboxBlank").default,
    ArrowExpandHorizontal: require("@icon/ArrowExpandHorizontal").default,
    PanHorizontal: require("@icon/PanHorizontal").default,
    Palette: require("@icon/Palette").default,
    CheckCircle: require("@icon/CheckCircle").default,
    Loading: require("@icon/Loading").default,
    AlphaSCircle: require("@icon/AlphaSCircle").default,
    CardText: require("@icon/CardText").default,
    Close: require("@icon/Close").default,
    Minus: require("@icon/Minus").default,
    Alert: require("@icon/Alert").default
  }
});

require("@/scss/style.scss");

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
  store,
  render: h => h(app)
}).$mount("#app");
