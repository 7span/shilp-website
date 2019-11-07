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

/**
 * Vee Validate
 */
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, image } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en";

const rules = { required, email, image };

for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: en.messages[rule] // add its message
  });
}

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
