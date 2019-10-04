<template>
  <div class="box">
    <s-blocks>
      <s-block size="auto">
        <s-alert
          color="success"
          size="sm"
          shape="pill"
          icon="Alert"
          fluid
        >Lorem ipsum dolor sit amet, consectetur elit.</s-alert>
      </s-block>

      <s-block size="auto">
        <s-alert
          color="warning"
          shape="rounded"
          style_="outline"
          icon="Alert"
        >Lorem ipsum dolor sit amet, consectetur elit.</s-alert>
      </s-block>
    </s-blocks>
    <s-blocks>
      <s-block size="auto">
        <s-alert
          color="danger"
          size="lg"
          style_="muted"
          shape="rectangle"
        >Lorem ipsum dolor sit amet, consectetur elit.</s-alert>
      </s-block>
      <s-block size="auto">
        <s-alert
          color="primary"
          size="lg"
          shape="rectangle"
        >Lorem ipsum dolor sit amet, consectetur elit.</s-alert>
      </s-block>
    </s-blocks>
  </div>
</template>