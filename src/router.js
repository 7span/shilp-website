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
          path: "text",
          component: require("@/views/demos/Text").default
        },
        {
          path: "button",
          component: require("@/views/demos/Button").default
        },
        {
          path: "blocks",
          component: require("@/views/demos/Blocks").default
        },
        {
          path: "form",
          component: require("@/views/demos/Form").default
        },
        {
          path: "spacing",
          component: require("@/views/demos/Spacing").default
        },
        {
          path: "space",
          component: require("@/views/demos/Space").default
        },
        {
          path: "colors",
          component: require("@/views/demos/Colors").default
        },
        {
          path: "loader",
          component: require("@/views/demos/Loader").default
        },
        {
          path: "card",
          component: require("@/views/demos/Card").default
        },
        {
          path: "alert",
          component: require("@/views/demos/Alert").default
        },
        {
          path: "item",
          component: require("@/views/demos/Item").default
        }
      ]
    }
  ]
});
