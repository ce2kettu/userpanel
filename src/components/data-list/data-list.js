class DataList extends Polymer.GestureEventListeners(Polymer.Element) {
    static get is() {
        return 'data-list';
    }
    static get properties() {
        return {
            items: {
                type: Array
            },
            type: String,
            disabled: {
                type: Boolean,
                reflectToAttribute: true,
                value: false
            }
        };
    }

    _formatMoney(amount) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        });

        return formatter.format(amount);
    }

    _sellItem(e) {
        if (!this.disabled) {
            const item = this.$.itemList.itemForElement(e.target);
            mta.triggerEvent('onPlayerSellItem', this.type, JSON.stringify(item));
        }
    }
}
window.customElements.define(DataList.is, DataList);