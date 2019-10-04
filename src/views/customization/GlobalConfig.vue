<template>
  <div class="config">
    <heading title="Global Config">
      <p>
        The top level options are declared in
        <code>$shilp-config</code> map.
      </p>
    </heading>
    <sub-heading>
      <!--prettyhtml-ignore-->
      <code-block lang="scss">
$shilp-config:(
  "debug": false,
  "scoped": false,
  "scope": "sevenspan",
  "system-fonts": '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  "breakpoint-separator": "\\:"
),
        </code-block>

      <p>
        To modify this options, you should declare
        <code>$shilp-config</code> on
        <strong>shilp-custom.scss</strong> file like this:
      </p>
      <!--prettyhtml-ignore-->
      <code-block lang="scss">
$shilp-config:(
  "breakpoint-separator": "\\@"
),
        </code-block>

      <p>You only need to declare the key for which you need to change the values.</p>
    </sub-heading>
  </div>
</template>