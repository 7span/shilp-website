export default {
  header: ["Name", "Type", "Values"],
  body: [
    ["options", "Array", "An array of object with keys: label, value, id"],
    ["placeholder", "String", "Text of default selected item"],
    ["custom", "Boolean", "Uses custom UI"],
    [
      "deselect",
      "Boolean",
      "Allow to deselect once selected value. This allows the 'Select' option to be selected"
    ],
    [
      "request",
      "Function, Object",
      "Displays the options by making a request on load. If it is a function, it should return a promise with result as an array in same format as 'options' are provided. If it is an Object, you can confiigure a request in Shilp Vue initialization with 'requestHandler' option."
    ]
  ]
};
