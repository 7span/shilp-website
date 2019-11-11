import Vue from "vue";
import axios from "./axios";
Vue.prototype.$axios = axios;
/**
 * Import 7Span plugins conditionally.
 */
if (process.env.VUE_APP_ENV == "production") {
  require("./7span");
} else {
  require("./7span.dev");
}

/**
 * Highlight JS
 */
import VueHighlightJS from "vue-highlightjs";
Vue.use(VueHighlightJS);

/**
 * V Tooltip
 */
import VTooltip from "v-tooltip";
Vue.use(VTooltip, {
  defaultClass: "shilp-tooltip",
  popover: {
    defaultClass: "shilp-popover"
  }
});
