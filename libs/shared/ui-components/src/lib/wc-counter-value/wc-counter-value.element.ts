// create type for React app
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wc-counter-value': { count: number };
    }
  }
}

export class CounterValueElement extends HTMLElement {
  public static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(name: any, oldValue: any, newValue: any) {
    const count = this.querySelector('#count');

    if (count) {
      count!.textContent = newValue;
    }
  }

  connectedCallback() {
    this.setAttribute('count', '0');
    this.innerHTML = `
     <h3>Counter value is <span id="count">${this.getAttribute(
       'count'
     )}</span></h3>`;
  }
}
// define element if it doesn't exist
customElements.get('wc-counter-value') ||
  customElements.define('wc-counter-value', CounterValueElement);
