class ToggleButton extends Polymer.GestureEventListeners(Polymer.Element) {
    static get is() {
        return 'toggle-button';
    }
    static get properties() {
        return {
            checked: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true
            }
        };
    }

    _toggle() {
        if (this.checked) {
            this.checked = false;
        } else {
            this.checked = true;
        }
    }
}
window.customElements.define(ToggleButton.is, ToggleButton);