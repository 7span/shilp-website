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
          component: require("@/views/Customization").default
        },
        {
          path: "utilities",
          component: require("@/views/Utilities").default
        },
        {
          path: "style-guide",
          component: require("@/views/StyleGuide").default,
          children: [
            {
              path: "",
              redirect: "text"
            },
            {
              path: "text",
              component: require("@/views/components/Text").default
            },
            {
              path: "colors",
              component: require("@/views/components/Colors").default
            }
          ]
        },
        {
          path: "components",
          component: require("@/views/components/Index").default,
          children: [
            {
              path: "",
              redirect: "button"
            },
            {
              path: "button",
              component: require("@/views/components/Button").default
            },
            {
              path: "blocks",
              component: require("@/views/components/Blocks").default
            },
            {
              path: "form",
              component: require("@/views/components/Form").default
            },
            {
              path: "spacing",
              component: require("@/views/components/Spacing").default
            },
            {
              path: "space",
              component: require("@/views/components/Space").default
            },

            {
              path: "loader",
              component: require("@/views/components/Loader").default
            },
            {
              path: "card",
              component: require("@/views/components/Card").default
            },
            {
              path: "alert",
              component: require("@/views/components/Alert").default
            },
            {
              path: "item",
              component: require("@/views/components/Item").default
            }
          ]
        }
      ]
    }
  ]
});
