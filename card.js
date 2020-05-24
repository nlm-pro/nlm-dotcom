class CardComponent extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');

    style.textContent = /* CSS */ `
      * {
        font-size: var(--font-size, 14px);
        margin: 0;
        padding: 0;
        font-weight: normal;
        box-sizing: inherit;
      }

      .container {
        width: 150px;
        border-radius: 3px;
        padding: 1rem;
        background-color: var(--link-card-bg-color);
        height: 100%;
        box-shadow: var(--link-card-shadow);
      }

      .container:hover {
        background-color: var(--link-card-bg-color-hover);
        box-shadow: var(--link-card-shadow-hover);
      }

      h1 {
        margin-bottom: .5rem;
        font-weight: 600;
        padding: 0;
      }

      a {
        color: var(--font-color);
        text-decoration: none;
      }

      a:hover {
        /* color: var(--link-color); */
      }

      img, ::slotted(svg) {
        margin-bottom: 1rem;
        border-radius: 3px;
        padding: 1rem;
        height: 110px;
        width: 110px;
      }
    `;

    shadowRoot.appendChild(style);

    const container = document.createElement('div');
    container.className = "container";

    container.innerHTML = /* HTML */ `
      <a href="${this.href}" aria-label="${this.label}" target="_blank" rel="noopener noreferrer">
        <slot><img src="${this.colorScheme === 'light' ? this.src : this.srcNeg}" alt="${this.alt}" /></slot>
        <h1>${this.cardTitle}</h1>
        <h2>${this.cardSubTitle}</h2>
      </a>
    `;

    shadowRoot.appendChild(container);

    // const nodes = this.shadowRoot.querySelector('node')
    // const assigned = nodes.assignedNodes();
    // const svg = assigned[1];
    // svg.setAttribute('role', 'img');
    // svg.setAttribute('aria-label', this.alt);

  }

  get alt() {
    return this.getAttribute('alt') || 'Demo';
  }

  get href() {
    return this.getAttribute('href') || '#';
  }

  get srcNeg() {
    return this.getAttribute('src-neg') || '/images/question-mark-dark.svg';
  }

  get src() {
    return this.getAttribute('src') || '/images/question-mark-white.svg';;
  }

  get colorScheme() {
    return this.getAttribute('color-scheme') || 'light';
  }

  get cardTitle() {
    return this.getAttribute('title') || 'Lorem Ispum';
  }

  get cardSubTitle() {
    return this.getAttribute('subtitle') || 'dolor sit amet';
  }

  get label() {
    return this.getAttribute('label') || 'Demo card';
  }
}

window.customElements.define('link-card', CardComponent);
