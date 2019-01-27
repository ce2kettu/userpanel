class SettingsPage extends Polymer.Element {
    static get is() {
        return 'settings-page';
    }

    ready() {
        super.ready();
        app.settings = this;
    }

}
window.customElements.define(SettingsPage.is, SettingsPage);