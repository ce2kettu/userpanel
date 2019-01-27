class ShopPage extends Polymer.GestureEventListeners(Polymer.Element) {
    static get is() {
        return 'shop-page';
    }
    static get properties() {
        return {
            selectedTab: {
                type: String,
                value: 'lights'
            }
        };
    }
    static get observers() {
        return [
            '_dataChanged(shopData.*)'
        ]
    }

    _dataChanged() {
        const images = [];
        if (this.shopData.lights && this.shopData.skins && this.shopData.wheels) {
            images.push.apply(images, this.shopData.lights);
            images.push.apply(images, this.shopData.skins);
            images.push.apply(images, this.shopData.wheels);
            this._preload(images);
        }
    }

    ready() {
        super.ready();
        app.shop = this;
        this.tabs = ['lights', 'skins', 'wheels'];
    }

    _preload(images) {
        for (let i = 0; i < images.length; i++) {
            let img = new Image();
            img.src = `${ this.importPath }images/${ images[i].type }/${ images[i].name}.jpg`;
        }
    }

    _getItems(tab) {
        if (this.shopData) {
            return this.shopData[tab];
        }
    }

    _getItemImage(name, type) {
        return `background-image: url(${ this.importPath }images/${ type }/${ name }.jpg);`;
    }

    _shortenMoney(value) {
        const ranges = [{
                divider: 1e9,
                suffix: 'B'
            },
            {
                divider: 1e6,
                suffix: 'M'
            },
            {
                divider: 1e3,
                suffix: 'K'
            }
        ];

        for (let i = 0; i < ranges.length; i++) {
            if (value >= ranges[i].divider) {
                return '$' + (value / ranges[i].divider).toString() + ranges[i].suffix;
            }
        }
        return '$' + value.toString();
    }

    _isPurchasable(item) {
        const hasSpecialAccess = item.players.find(x => x === this.player.stats.username);
        const isPurchased = this.player.ownedItems[item.type].find(x => x === item._id);
        if (item.purchasable && !hasSpecialAccess && !isPurchased) {
            return true;
        } else if (isPurchased) {
            return false;
        } else {
            return false;
        }
    }

    _isExclusive(item) {
        const hasSpecialAccess = item.players.find(x => x === this.player.stats.username);
        if (hasSpecialAccess || item.purchasable) {
            return true;
        }
        return false;
    }

    _canEquip(item) {
        const isPurchased = this.player.ownedItems[item.type].find(x => x === item._id);
        const hasSpecialAccess = item.players.find(x => x === this.player.stats.username);
        if (isPurchased || hasSpecialAccess) {
            return true;
        }
        return false;
    }

    _isEquipped(item) {
        return this.player.equippedItems[item.type] === item._id ? true : false;
    }

    _computeEquipLabel(item) {
        return this.player.equippedItems[item.type] === item._id ? 'Unequip' : 'Equip';
    }

    _computeBuyLabel(item) {
        const isPurchased = this.player.ownedItems[item.type].find(x => x === item._id);
        return isPurchased ? 'Bought' : `Buy for ${ this._shortenMoney(item.price) }`;
    }

    _buyItem(e) {
        const item = this.$.itemList.itemForElement(e.target);
        const isPurchased = this.player.ownedItems[item.type].find(x => x === item._id);
        if (!isPurchased) {
            mta.triggerEvent('onItemPurchased', item.type, item._id);
        }
    }

    _equipItem(e) {
        const item = this.$.itemList.itemForElement(e.target);
        const isEquipped = this.player.equippedItems[item.type] === item._id ? true : false;
        if (this._canEquip(item) && !isEquipped) {
            mta.triggerEvent('onItemEquipped', item.type, item._id);
        } else if (isEquipped) {
            mta.triggerEvent('onItemUnequipped', item.type, item._id);
        }
    }
}
window.customElements.define(ShopPage.is, ShopPage);