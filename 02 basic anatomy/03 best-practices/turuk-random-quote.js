class TurukRandomQuote extends HTMLElement {
  constructor() {
    super();
    this._quotes = [
      "1 plus 1 sometimes egals unicorn.",
      "Trial and error is my credo, make it yours too.",
      "Pineapple pizza shouldn't be allowed. You know it."
    ];
    this._$quote = null;
    this._interval = null;
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        .turuk-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #ccc;
          padding: 20px;
          text-align: center;
          vertical-align: center;
          z-index: 1000;
        }
        .turuk-container h1 {
          font-size: 20px;
          margin: 0;
        }
      </style>
      <div class="turuk-container">
        <h1>Random Quote</h1>
        <p>"<span id="quote"></span>"</p>
      </div>
    `;
    this._$quote = this.querySelector("#quote");
    this._interval = setInterval(() => this._render(), 10000);
    this._render();
  }

  _render(){
    if (this._$quote !== null) {
      this._$quote.innerHTML = this._quotes[Math.floor(Math.random() * this._quotes.length)];
    }
  }

  disconnectedCallback() {
    clearInterval(this._interval);
  }
}
window.customElements.define("turuk-random-quote", TurukRandomQuote);