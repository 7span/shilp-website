<template>
  <div class="colors">
    <heading title="Colors">
      <p>Colors is the first thing you would need to modify in any project. Shilp follows a specific format for declaring colors as shown below.</p>
    </heading>
    <sub-heading title="Base Colors">
      <p>
        <strong>primary</strong> is a color name and
        <strong>default</strong> key should have master color. The rest are variants which are useful in diffrent states and components.
      </p>
      <!--prettyhtml-ignore-->
      <code-block lang="scss">
$shilp-colors:(
  "primary": (
    lightest: #cce4fd,
    lighter: #65a2f4,
    light: #3f82ea,
    default: #0652dd,
    dark: #043fbe,
    darker: #032e9f,
    darkest: #01176a
  ),
  // ...
)
    </code-block>

      <p>Shilp by default comes with following colors:</p>
      <ul>
        <li>primary</li>
        <li>secondary</li>
        <li>accent</li>
        <li>info</li>
        <li>success</li>
        <li>warning</li>
        <li>danger</li>
        <li>grey</li>
        <li>light</li>
        <li>dark</li>
      </ul>
      <p>
        You can generate a great pallete from here:
        <a
          href="https://colors.eva.design/"
        >https://colors.eva.design/</a>
      </p>
    </sub-heading>

    <sub-heading title="Gradients!">
      <p>Yup! Shilp has support for gradients and you can customize those too!</p>
      <!--prettyhtml-ignore-->
      <code-block lang="scss">
$shilp-gradients: (
    "primary": (
      #9075ee,
      #71a9de
    ),
  // ...
)
    </code-block>
      <p>Each color supports 2 shades, start and stop.</p>
    </sub-heading>

    <sub-heading title="Text Colors">
      <p>You can define text colors in constrast to use with base colors.</p>
      <!--prettyhtml-ignore-->
      <code-block lang="scss">
$shilp-text-colors: (
  "primary": (
    dark: #ffffff,
    light: #0652dd
  ),
  // ...
)
    </code-block>
      <p>Here you can see we need to define 2 shades</p>
      <ul>
        <li>light: Text color to use on "light" variants of color. (The color should be dark)</li>
        <li>dark: Text color to use on "dark" variants of color. (The color should be light)</li>
      </ul>
    </sub-heading>

    <p>
      Checkout the file on
      <a
        href="https://github.com/7span/shilp/blob/master/scss/variables/_colors.scss"
        target="_blank"
      >GitHub</a>
    </p>
  </div>
</template>