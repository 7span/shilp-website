<template>
  <heading title="Customization">
    <p>You can modify the framework according to your needs. All you need to do is define some SCSS maps! By default Shilp ships with default settings applied. To modify it, you'll need to import SCSS files instead of compiled ones.</p>
    <p>Here is how you should modify the Shilp.</p>
    <ul>
      <li>
        Create
        <strong>shilp-custom.scss</strong> file in your project.
      </li>
      <li>Define maps and options you want to override.</li>
      <li>
        Import shilp-custom.scss file
        <strong>before</strong> importing the original Shilp files.
      </li>
    </ul>
    <s-button
      align="right"
      to="./customization/global-config"
      class="mt--xl"
      icon="ChevronRight"
      color="primary"
    >Global Config</s-button>
  </heading>
</template>