export default {
  header: ["Name", "Type", "Values"],
  body: [
    [
      "color",
      "String",
      [
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "danger",
        "grey",
        "light",
        "dark"
      ]
    ],
    ["size", "String", ["xs", "sm", "md", "lg", "xl"]],
    ["shape", "String", ["rectangle", "rounded", "pill"]],
    ["style_", "String", ["solid", "outline", "muted"]],
    ["fluid", "Boolean", ["true", "false"]]
  ]
};
