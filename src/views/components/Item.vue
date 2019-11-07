<template>
  <div class="box">
    <s-blocks>
      <s-block size="auto">
        <s-person to="https://google.com">
          <s-avatar
            name="John Cena"
            slot="avatar"
            url="https://randomuser.me/api/portraits/women/95.jpg"
          ></s-avatar>
        </s-person>

        <s-item title="John Doe">
          <img slot="media" src="https://randomuser.me/api/portraits/women/95.jpg" />
          Lorem ipsum dolor sit amet, consectetur elit.
        </s-item>
      </s-block>

      <s-block size="auto">
        <s-item title="Hello There!">
          <img slot="media" src="https://randomuser.me/api/portraits/women/95.jpg" />
          Lorem ipsum dolor sit amet, consectetur elit.
        </s-item>
      </s-block>
    </s-blocks>
  </div>
</template>