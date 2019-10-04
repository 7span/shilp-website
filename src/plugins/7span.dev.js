import Vue from "vue";
import shilpVueConfig from "./shilp-vue";
/**
 * Shilp Vue
 */
import ShilpVue from "@7span/shilp-vue/src/plugin";
import { SFieldValidate, SFormValidate } from "@7span/shilp-vue/src/plugin";
Vue.use(ShilpVue, shilpVueConfig);
Vue.component("SFieldValidate", SFieldValidate);
Vue.component("SFormValidate", SFormValidate);
require("@7span/shilp-vue/dist/shilp-vue.css");
