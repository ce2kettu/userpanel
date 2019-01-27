class ColorPicker extends Polymer.GestureEventListeners(Polymer.Element) {
    static get is() {
        return 'color-picker';
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflectToAttribute: true,
                value: false
            },
            color: {
                type: String,
                notify: true,
                observer: '_colorChanged'
            }
        };
    }

    ready() {
        super.ready();
        this.uniqueId = this._generateId();
        window.addEventListener('color-picker-dialog-closed', e => {
            this._dialogHandler(e)
        }, false);
    }

    _dialogHandler(e) {
        if (e.detail.uniqueId === this.uniqueId) {
            this.color = e.detail.color;
        }
    }

    _generateId() {
        const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };

    _colorChanged() {
        if (this.color) {
            const color = this._colorConversion(this.color);
            if ((color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114) > 186) {
                this.updateStyles({
                    '--color-picker-contrast-color': '#000000'
                });
            } else {
                this.updateStyles({
                    '--color-picker-contrast-color': '#ffffff'
                });
            }
            this.updateStyles({
                '--color-picker-color': this.color
            });
        } else {
            this.updateStyles({
                '--color-picker-color': 'transparent',
                '--color-picker-contrast-color': '#ffffff'
            });
        }
    }

    _colorConversion(hex) {
        let r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (r) {
            return r.slice(1, 4).map(function (x) {
                return parseInt(x, 16);
            });
        }
        r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
        if (r) {
            return r.slice(1, 4).map(function (x) {
                return 0x11 * parseInt(x, 16);
            });
        }
        return null;
    }

    _openDialog() {
        if (this.disabled) {
            return;
        }
        const colorDialog = app.main.shadowRoot.querySelector('.panel color-picker-dialog');
        colorDialog.color = this.color || '#e2e2e2';
        colorDialog.identifier = this.uniqueId;
        colorDialog.open();
    }

    _resetColor() {
        this.color = '';
    }

    _noColor(color) {
        return color ? true : false;
    }
}

window.customElements.define(ColorPicker.is, ColorPicker);