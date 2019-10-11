export default [
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
];
