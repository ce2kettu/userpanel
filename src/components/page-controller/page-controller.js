class PageController extends Polymer.mixinBehaviors([Polymer.IronResizableBehavior, Polymer.IronSelectableBehavior], Polymer.Element) {
    static get is() {
        return 'page-controller';
    }
    static get properties() {
        return {
            activateEvent: {
                type: String,
                value: null
            }
        }
    }

    static get observers() {
        return [
            '_selectedPageChanged(selected)'
        ]
    }
    constructor() {
        super();
    }
    _selectedPageChanged(selected, old) {
        this.async(this.notifyResize);
    }
}

customElements.define(PageController.is, PageController);