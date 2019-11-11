export default {
  header: ["Name", "Type", "Values"],
  body: [
    ["label", "String", "The field label"],
    ["desc", "String", "The description to display below field"],
    ["before", "String", "String to display before"],
    ["before-icon", "String", "Icon name"],
    ["after", "String", "String to display after"],
    ["after-icon", "String", "Icon name"],
    ["size", "String", ["xs", "sm", "md", "lg", "xl"]],
    ["color", "String", ["info", "success", "warning", "danger"]],
    ["errorMessage", "String", "Message to show when validation fails"],
    ["successMessage", "String", "Message to show when validation is truthy"],
    ["loader", "Boolean", "Shows loader"],
    [
      "optional",
      "Boolean",
      "If field is optional, making true will append a message"
    ],
    [
      "passwordToggle",
      "Object",
      "If field is password, adds an icon to toggle password visibility. Kyes to be added for icons: visibleIcon, hiddenIcon"
    ]
  ]
};
