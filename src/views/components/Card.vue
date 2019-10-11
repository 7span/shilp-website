<template>
  <div class="pb--xl">
    <demo title="Card" name="card" :markup="markup" wrap-preview></demo>

    <div class="bg--grey--lightest p--xl">
      <s-blocks>
        <s-block :size="6">
          <s-card size="sm" class="shadow--xs">
            <s-card-header title="Minimal Card">
              <s-buttons slot="actions">
                <s-button icon="Minus" shape="square"></s-button>
                <s-button icon="Close" shape="square"></s-button>
              </s-buttons>
            </s-card-header>
            <s-card-body>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus eaque atque porro eius accusamus, ea ipsum quo.</p>
              <p>Officia, maxime aut laborum ullam inventore saepe magni illo assumenda nulla dicta.</p>
            </s-card-body>
            <s-card-footer>
              <s-button color="primary">Open</s-button>
              <s-button class="ml--xs" color="primary" style_="trn">Next</s-button>
            </s-card-footer>
          </s-card>
        </s-block>

        <s-block :size="6">
          <s-card size="sm" style_="border" split>
            <s-card-header title="Bordered Card">
              <s-buttons slot="actions">
                <s-button size="sm" icon="Minus" color="grey" style_="trn" shape="square"></s-button>
                <s-button size="sm" icon="Close" color="grey" style_="trn" shape="square"></s-button>
              </s-buttons>
            </s-card-header>
            <s-card-body>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus eaque atque porro eius accusamus, ea ipsum quo. Officia, maxime aut laborum ullam inventore saepe magni illo assumenda nulla dicta.</p>
            </s-card-body>
            <s-card-footer>
              <s-button color="primary">Open</s-button>
              <s-button class="ml--xs" color="primary" style_="trn">Next</s-button>
            </s-card-footer>
          </s-card>
        </s-block>
      </s-blocks>
    </div>
    <div class="mt--xl">
      <s-blocks>
        <s-block :size="6">
          <s-card size="md" class="shadow--lg">
            <s-card-header title="Shadow Card">
              <s-buttons slot="actions">
                <s-button icon="Close" color="light" shape="circle"></s-button>
              </s-buttons>
            </s-card-header>
            <s-card-body>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus eaque atque porro eius accusamus, ea ipsum quo.</p>
              <p>Officia, maxime aut laborum ullam inventore saepe magni illo assumenda nulla dicta.</p>
            </s-card-body>
            <s-card-footer>
              <s-button color="primary">Open</s-button>
              <s-button class="ml--xs" color="primary" style_="trn">Next</s-button>
            </s-card-footer>
          </s-card>
        </s-block>

        <s-block :size="6">
          <s-card size="sm " style_="round" split>
            <s-card-header class="bg--primary color--white" icon="CardText" title="Colored Card"></s-card-header>
            <s-card-body class="bg--primary--lightest color--primary--darkest">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus eaque atque porro eius accusamus, ea ipsum quo.</p>
            </s-card-body>
          </s-card>
        </s-block>
      </s-blocks>
    </div>
    <div class="mt--xl">
      <s-blocks>
        <s-block :size="6">
          <s-card size="md" class="shadow--lg">
            <s-card-media edge>
              <img src="https://picsum.photos/400/225" alt />
            </s-card-media>
            <s-card-header title="Shadow Card"></s-card-header>
            <s-card-body>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus eaque atque porro eius accusamus, ea ipsum quo.</p>
            </s-card-body>
            <s-card-footer>
              <s-button color="primary">Open</s-button>
              <s-button class="ml--xs" color="primary" style_="trn">Next</s-button>
            </s-card-footer>
          </s-card>
        </s-block>

        <s-block :size="6">
          <s-card size="sm " split>
            <s-card-header class="bg--primary color--white" icon="CardText" title="Colored Card"></s-card-header>
            <s-card-body class="bg--primary--lightest color--primary--darkest">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus eaque atque porro eius accusamus, ea ipsum quo.</p>
            </s-card-body>
          </s-card>
        </s-block>
      </s-blocks>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markup: `
<div class="card shadow--xs card--sm">
  <!-- header -->
  <header class="card__header">
    <h3 class="card__title">Minimal Card</h3>
    <div class="card__actions">
      <button class="button button--square">
        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" class="button__icon">
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
        </svg>
      </button>
    </div>
  </header>

  <!-- body -->
  <div class="card__body">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus eaque atque porro eius accusamus, ea ipsum quo.</p>
    <p>Officia, maxime aut laborum ullam inventore saepe magni illo assumenda nulla dicta.</p>
  </div>

  <!-- footer -->
  <footer class="card__footer">
    <button class="button button--primary">Open</button>
    <button class="button ml--xs button--primary button--trn">Next</button>
  </footer>
</div>`
    };
  }
};
</script>