class ConfirmDialog extends Polymer.GestureEventListeners(Polymer.Element) {
  static get is() {
    return 'confirm-dialog';
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'home'
      }
    };
  }

}
window.customElements.define(ConfirmDialog.is, ConfirmDialog);