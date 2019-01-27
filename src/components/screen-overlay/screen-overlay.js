class ScreenOverlay extends Polymer.Element {
  static get is() {
    return 'screen-overlay';
  }
  static get properties() {
      return {
          opened: {
              type: Boolean,
              reflectToAttribute: true,
              value: false
          }
      }
  }
}
window.customElements.define(ScreenOverlay.is, ScreenOverlay);