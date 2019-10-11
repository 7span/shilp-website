export default [
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
    path: "file",
    component: require("@/views/components/File").default
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
];
