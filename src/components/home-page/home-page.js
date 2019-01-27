require('../main-app/main-app.js');

/**
 * @customElement
 * @polymer
 */
class HomePage extends Polymer.Element {
  static get is() {
    return 'home-page';
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'home'
      }
    };
  }
  get player() {
    return app.main.player;
  }

  _returnPlayerName() {
    return this.player.nickname;
  }
}
window.customElements.define(HomePage.is, HomePage);