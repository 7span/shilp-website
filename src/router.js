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
          children: [
            {
              path: "",
              component: require("@/views/customization/Index").default
            },
            {
              path: "global-config",
              component: require("@/views/customization/GlobalConfig").default
            },
            {
              path: "colors",
              component: require("@/views/customization/Colors").default
            }
          ]
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
              component: require("@/views/style-guide/Text").default
            },
            {
              path: "colors",
              component: require("@/views/style-guide/Colors").default
            }
          ]
        },
        {
          path: "components",
          component: require("@/views/Components").default,
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
              path: "buttons",
              component: require("@/views/components/Buttons").default
            },
            {
              path: "blocks",
              component: require("@/views/components/Blocks").default
            },
            {
              path: "field",
              component: require("@/views/components/Field").default
            },
            {
              path: "select",
              component: require("@/views/components/Select").default
            },
            {
              path: "choice",
              component: require("@/views/components/Choice").default
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
