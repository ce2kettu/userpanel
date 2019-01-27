class TabSelector extends Polymer.Element {
    static get is() {
        return 'tab-selector';
    }
    static get properties() {
        return {
            selectedTab: {
                type: String,
                notify: true
            }
        };
    }
}
window.customElements.define(TabSelector.is, TabSelector);