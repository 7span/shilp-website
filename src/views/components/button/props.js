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
    ["shape", "String", ["rectangle", "rounded", "pill", "square", "circle"]],
    ["style_", "String", ["solid", "outline", "muted", "gradient", "tab"]],
    ["align", "String", ["left", "right"]],
    ["fluid", "Boolean", ["true", "false"]]
  ]
};
