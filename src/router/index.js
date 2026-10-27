import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: require("@/layouts/Main").default,
      children: [
        {
          path: "",
          component: require("@/views/Intro").default
        },
        {
          path: "installation",
          component: require("@/views/Installation").default
        },
        {
          path: "customization",
          component: require("@/views/Customization").default,
          children: require("./customization").default
        },
        {
          path: "utilities",
          component: require("@/views/Utilities").default
        },
        {
          path: "style-guide",
          component: require("@/views/StyleGuide").default,
          children: require("./style-guide").default
        },
        {
          path: "components",
          component: require("@/views/Components").default,
          children: require("./components").default
        }
      ]
    }
  ]
});
