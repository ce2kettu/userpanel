class DropdownMenu extends Polymer.GestureEventListeners(Polymer.Element) {
    static get is() {
        return 'dropdown-menu';
    }
    static get properties() {
        return {
            selectedItem: {
                type: String,
                notify: true,
                observer: '_selectedItemChanged'
            },
            opened: {
                type: Boolean,
                reflectToAttribute: true,
                value: false
            },
            items: {
                type: Array,
                value: []
            }
        };
    }

    _closeOverlay() {
        this.opened = false;
    }

    _selectedItemChanged() {
        this.opened = false;
    }

    toggle() {
        if (this.opened) {
            this.opened = false;
        } else {
            this.opened = true;
        }
    }
}
window.customElements.define(DropdownMenu.is, DropdownMenu);