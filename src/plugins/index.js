import Vue from "vue";

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
