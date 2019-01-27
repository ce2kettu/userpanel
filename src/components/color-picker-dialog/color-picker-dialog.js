class ColorPickerDialog extends Polymer.GestureEventListeners(Polymer.Element) {
    static get is() {
        return 'color-picker-dialog';
    }
    static get properties() {
        return {
            color: {
                type: String,
                notify: true
            },
            opened: {
                type: String,
                reflectToAttribute: true,
                value: false
            },
            rgbColor: {
                type: String,
                computed: '_rgbFromColor(color)',
                observer: '_rgbToSliders'
            },
            redVal: {
                type: Number,
                observer: '_colorChanged'
            },
            greenVal: {
                type: Number,
                observer: '_colorChanged'
            },
            blueVal: {
                type: Number,
                observer: '_colorChanged'
            },
            identifier: String
        };
    }

    ready() {
        super.ready();
    }

    _closeDialog(e) {
        if (e.target.dataset.push !== undefined) {
            const color = e.target.dataset.push ? this.color : '';
            this.dispatchEvent(new CustomEvent('color-picker-dialog-closed', {
                bubbles: true,
                composed: true,
                detail: {
                    uniqueId: this.identifier,
                    color: color
                }
            }));
        }
        const closeAnimation = [{
                opacity: '1'
            },
            {
                opacity: '0'
            }
        ];

        const closeTiming = {
            duration: 500,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        };

        this.shadowRoot.querySelector('.dialog').style.pointerEvents = 'none';
        this.shadowRoot.querySelector('.dialog').style.opacity = 0;
        /*this.shadowRoot.querySelector('.overlay').style.opacity = 0;*/
        this.shadowRoot.querySelector('.dialog').animate(closeAnimation, closeTiming);
        setTimeout(() => {
            this.opened = false;
        }, closeTiming.duration);
    }

    open() {
        const openAnimation = [{
                transform: 'scale(0)'
            },
            {
                transform: 'scale(1)'
            }
        ];

        const openTiming = {
            duration: 500,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        };

        this.shadowRoot.querySelector('.dialog').style.pointerEvents = 'auto';
        this.shadowRoot.querySelector('.dialog').style.opacity = 1;
        /*this.shadowRoot.querySelector('.overlay').style.opacity = '';*/
        this.shadowRoot.querySelector('.dialog').animate(openAnimation, openTiming);
        this.opened = true;
    }

    _colorChanged() {
        if (this.redVal === undefined || this.greenVal === undefined || this.blueVal === undefined) {
            return;
        }

        let r = this.redVal.toString(16);
        r = r.length < 2 ? "0" + r : r;
        let g = this.greenVal.toString(16);
        g = g.length < 2 ? "0" + g : g;
        let b = this.blueVal.toString(16);
        b = b.length < 2 ? "0" + b : b;

        this.color = "#" + r + g + b;
    }

    _rgbFromColor(color) {
        var convertColor = document.createElement("div");
        convertColor.style.color = color;
        return convertColor.style.color;
    }

    _rgbToSliders() {
        const split = this.rgbColor.slice(this.rgbColor.indexOf('(') + 1, this.rgbColor.indexOf(')'));
        const splitArr = split.split(',');
        this.redVal = parseInt(splitArr[0]);
        this.greenVal = parseInt(splitArr[1]);
        this.blueVal = parseInt(splitArr[2]);
    }
}

window.customElements.define(ColorPickerDialog.is, ColorPickerDialog);