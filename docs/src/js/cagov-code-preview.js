class CaGovCodePreview extends window.HTMLElement {
  constructor() {
    super();

    this.instructions = this.dataset.instructions.split(',');
    this.allowReset = this.instructions.includes('reset');
  }

  connectedCallback() {
    this.root = this.querySelector('.code-preview');
    this.demo = this.querySelector('.code-preview-demo');

    if (this.demo) {
      this.originalCode = this.demo.innerHTML;
    }

    if (this.allowReset) {
      const button = document.createElement('button');
      button.classList.add('code-preview-reset-button');
      button.innerHTML = 'Reset demo';
      button.addEventListener('click', () => {
        this.demo.innerHTML = this.originalCode;
      });

      this.root.prepend(button);
    }
  }
}

window.customElements.define('cagov-code-preview', CaGovCodePreview);
