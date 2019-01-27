class MapsPage extends Polymer.GestureEventListeners(Polymer.Element) {
    static get is() {
        return 'maps-page';
    }
    static get properties() {
        return {
            opened: {
                type: Boolean,
                value: false,
                reflectToAttribute: true
            },
            searchQuery: {
                type: String,
                observer: '_searchQueryChanged'
            },
            minLength: {
                type: Number,
                value: 3
            },
            maxViewableItems: {
                type: Number,
                value: 10
            },
            queryResult: {
                type: Array,
                value: []
            },
            maps: {
                type: Array,
                value: []
            },
            searchProperty: {
                type: String,
                value: 'name'
            },
            valueProperty: {
                type: String,
                value: 'name'
            }
        };
    }
    static get observers() {
        return [
            '_mapsChanged(maps, maps.*)'
        ]
    }

    _mapsChanged() {
        this.set('queryResult', this.maps);
    }

    _searchQueryChanged(query) {
        let queryResult = [];
/*        if (query.length < this.minLength) {
            this.set('queryResult', queryResult);
            return;
        }*/
        this.maps.forEach(item => {
            if (item[this.searchProperty].toLowerCase().indexOf(query.toLowerCase()) === 0) {
                queryResult.push(item);
            }
        });
        this.set('queryResult', queryResult.slice(0, this.maxViewableItems));
    }

    _noResults(results) {
        if (results.length === 0) {
            this.opened = false;
            return true;
        }
        this.opened = true;
        return false;
    }

    _getItemValue(item) {
        return item[this.valueProperty];
    }

    _buyItem(e) {
        const item = this.$.itemList.itemForElement(e.target);
        mta.triggerEvent('onMapBuyButton', JSON.stringify(item));
    }

    ready() {
        super.ready();
        app.maps = this;
    }
}
window.customElements.define(MapsPage.is, MapsPage);