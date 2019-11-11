export default [
  {
    path: "",
    redirect: "button"
  },
  {
    path: ":name",
    component: require("@/components/Demo").default,
    props: true
  },
  {
    path: "field",
    component: require("@/views/components/Field").default
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
